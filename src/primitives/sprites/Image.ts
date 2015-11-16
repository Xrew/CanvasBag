///<reference path="./SpriteType" />
///<reference path="./BasicSpritePrototype" />
///<reference path="../../render/Node.ts" />

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
                this.type = SpriteType.IMAGE;
            }

            setProperties(properties:ImageSpriteProperties) {
                this.properties = properties;
            };

            getProperties():ImageSpriteProperties {
                return <ImageSpriteProperties>this.properties;
            };

            contains(point):boolean {
                let properties = <ImageSpriteProperties>this.properties;
                let renderOffset = this.getRenderOffset();

                let centerX = properties.position.x + renderOffset.x;
                let centerY = properties.position.y + renderOffset.y;
                let offsetX = properties.width / 2;
                let offsetY = properties.height / 2;

                return (centerX - offsetX <= point.x && centerX + offsetX >= point.x && centerY + offsetY >= point.y && centerY - offsetY <= point.y);
            };

            move(offsetX, offsetY) {
                let properties = <ImageSpriteProperties>this.properties;

                properties.position.x += offsetX;
                properties.position.y += offsetY;
            };

            public setBackgroundImage = (imageData:string) => {
                (<ImageSpriteProperties>this.properties).imageData = imageData;
            };
        }
    }
}