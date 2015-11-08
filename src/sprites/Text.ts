///<reference path="./SpriteType" />
///<reference path="./BasicSpritePrototype" />
///<reference path="../render/Node.ts" />
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


        export class Text extends BasicSpritePrototype {
            constructor() {
                super();
                this.setType(SpriteType.TEXT)
            }

            setProperties(properties:TextSpriteProperties) {
                this.setBaseProperties(properties);
            };

            getProperties():TextSpriteProperties {
                return <TextSpriteProperties>this.getBaseProperties();
            };

            contains(point:Point):boolean {
                var properties = this.getProperties();
                var renderOffset = this.getRenderOffset();

                var centerX = properties.position.x + renderOffset.x;
                var centerY = properties.position.y + renderOffset.y;
                var offsetX = properties.width / 2;
                var offsetY = properties.height / 2;

                return (centerX - offsetX <= point.x && centerX + offsetX >= point.x && centerY + offsetY >= point.y && centerY - offsetY <= point.y);
            };

            move(offsetX:number, offsetY:number) {
                var properties = this.getProperties();

                properties.position.x += offsetX;
                properties.position.y += offsetY;
            };
        }
    }
}