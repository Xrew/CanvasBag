///<reference path="./ShapeType" />
///<reference path="./BasicShapePrototype" />
///<reference path="../render/Node.ts" />

module CanvasBag {
    export module BasicShapes {
        export interface RectangleShapeProperties extends BasicShapeProperties {
        }


        export class Rectangle extends BasicShapePrototype {
            constructor() {
                super();
                this.setType(ShapeType.RECTANGLE)
            }

            setProperties(properties:RectangleShapeProperties) {
                this.setBaseProperties(properties);
            };

            getProperties():RectangleShapeProperties {
                return <BasicShapeProperties>this.getBaseProperties();
            };

            contains(point):boolean {
                var properties = <RectangleShapeProperties>this.getBaseProperties();
                var renderOffset = this.getRenderOffset();

                var centerX = properties.position.x + renderOffset.x;
                var centerY = properties.position.y + renderOffset.y;
                var offsetX = properties.width / 2;
                var offsetY = properties.height / 2;

                return (centerX - offsetX <= point.x && centerX + offsetX >= point.x && centerY + offsetY >= point.y && centerY - offsetY <= point.y);
            };

            move(offsetX, offsetY) {
                var properties = <RectangleShapeProperties>this.getBaseProperties();
                properties.position.x += offsetX;
                properties.position.y += offsetY;
            };
        }
    }
}