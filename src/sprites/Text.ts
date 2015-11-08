///<reference path="./SpriteType" />
///<reference path="./BasicSpritePrototype" />
///<reference path="./BasicSprite" />
///<reference path="../render/base/Font.ts" />

module CanvasBag {
    export module Sprites {
        export interface TextSpriteProperties extends BasicSpriteProperties {
            fontSize: string;
            fontFamily: Base.Font;
            content: string;
            width: number;
            height: number;
        }


        export class Text extends BasicSpritePrototype implements BasicSprite {
            constructor() {
                super();
                this.setType(SpriteType.TEXT)
            }

            public setProperties = (properties:TextSpriteProperties) =>  {
                this.setBaseProperties(properties);
            };

            public getProperties = ():TextSpriteProperties => {
                return <TextSpriteProperties>this.getBaseProperties();
            };

            public contains = (point):boolean => {
                var properties = this.getProperties();
                var renderOffset = this.getRenderOffset();

                var centerX = properties.position.x + renderOffset.x;
                var centerY = properties.position.y + renderOffset.y;
                var offsetX = properties.width / 2;
                var offsetY = properties.height / 2;

                return (centerX - offsetX <= point.x && centerX + offsetX >= point.x && centerY + offsetY >= point.y && centerY - offsetY <= point.y);
            };

            public  move = (offsetX, offsetY) => {
                var properties = this.getProperties();

                properties.position.x += offsetX;
                properties.position.y += offsetY;
            };
        }
    }
}