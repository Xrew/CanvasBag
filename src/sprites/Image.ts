///<reference path="./SpriteType" />
///<reference path="./BasicSpritePrototype" />
///<reference path="./BasicSprite" />

module CanvasBag {
    export module Sprites {
        export interface ImageSpriteProperties extends BasicSpriteProperties {
            imageData: string;
            width: number;
            height: number;
        }

        export class Image extends BasicSpritePrototype implements BasicSprite {

            constructor() {
                super();
                this.setType(SpriteType.IMAGE)
            }

            public setProperties = (properties:ImageSpriteProperties) => {
                this.setBaseProperties(properties);
            };

            public getProperties = ():ImageSpriteProperties => {
                return <ImageSpriteProperties>this.getBaseProperties();
            };

            public contains = (point):boolean => {
                var properties = <ImageSpriteProperties>this.getBaseProperties();
                var renderOffset = this.getRenderOffset();

                var centerX = properties.position.x + renderOffset.x;
                var centerY = properties.position.y + renderOffset.y;
                var offsetX = properties.width / 2;
                var offsetY = properties.height / 2;

                return (centerX - offsetX <= point.x && centerX + offsetX >= point.x && centerY + offsetY >= point.y && centerY - offsetY <= point.y);
            };

            public  move = (offsetX, offsetY) => {
                var properties = <ImageSpriteProperties>this.getProperties();

                properties.position.x += offsetX;
                properties.position.y += offsetY;
            };
        }
    }
}