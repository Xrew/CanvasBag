///<reference path="./SpriteType" />
///<reference path="./BasicSpritePrototype" />
///<reference path="../../render/Node.ts" />
///<reference path="../../render/base/Font.ts" />

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
                this.type = SpriteType.TEXT;
            }

            setProperties(properties:TextSpriteProperties) {
                this.properties = properties;
            };

            getProperties():TextSpriteProperties {
                return <TextSpriteProperties>this.properties;
            };

            contains(point:Point):boolean {
                let properties = <TextSpriteProperties>this.properties;
                let renderOffset = this.getRenderOffset();

                let centerX = properties.position.x + renderOffset.x;
                let centerY = properties.position.y + renderOffset.y;
                let offsetX = properties.width / 2;
                let offsetY = properties.height / 2;

                return (centerX - offsetX <= point.x && centerX + offsetX >= point.x && centerY + offsetY >= point.y && centerY - offsetY <= point.y);
            };

            move(offsetX:number, offsetY:number) {
                var properties = this.properties;

                properties.position.x += offsetX;
                properties.position.y += offsetY;
            };

            public setContent(content:string) {
                let properties = <TextSpriteProperties>this.properties;
                properties.content = content;
            }
        }
    }
}