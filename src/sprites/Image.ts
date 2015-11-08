///<reference path="./SpriteType" />
///<reference path="./BasicSpritePrototype" />
///<reference path="../render/Node.ts" />

module CanvasBag {
    export module Sprites {
        export interface ImageSpriteProperties extends BasicSpriteProperties {
            imageData: string;
            width: number;
            height: number;
        }

        export class Image extends BasicSpritePrototype {

            constructor() {
                super();
                this.setType(SpriteType.IMAGE)
            }

            setProperties(properties:ImageSpriteProperties) {
                this.setBaseProperties(properties);
            };

            getProperties():ImageSpriteProperties {
                return <ImageSpriteProperties>this.getBaseProperties();
            };

            contains(point):boolean {
                var properties = <ImageSpriteProperties>this.getBaseProperties();
                var renderOffset = this.getRenderOffset();

                var centerX = properties.position.x + renderOffset.x;
                var centerY = properties.position.y + renderOffset.y;
                var offsetX = properties.width / 2;
                var offsetY = properties.height / 2;

                return (centerX - offsetX <= point.x && centerX + offsetX >= point.x && centerY + offsetY >= point.y && centerY - offsetY <= point.y);
            };

            move(offsetX, offsetY) {
                var properties = <ImageSpriteProperties>this.getProperties();

                properties.position.x += offsetX;
                properties.position.y += offsetY;
            };

            public setBackgroundImage = (imageData:string) => {
                (<ImageSpriteProperties>this.getBaseProperties()).imageData = imageData;
            };
        }
    }
}