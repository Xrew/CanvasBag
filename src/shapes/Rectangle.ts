///<reference path="./ShapeType" />
///<reference path="./BasicShapePrototype" />
///<reference path="./BasicShape" />

module CanvasBag {
    export module BasicShapes {
        export interface RectangleShapeProperties extends BasicShapeProperties {
        }


        export class Rectangle extends BasicShapePrototype implements BasicShape {
            constructor() {
                super();
                this.setType(ShapeType.RECTANGLE)
            }

            public setProperties = (properties:RectangleShapeProperties) => {
                this.setBaseProperties(properties);
            };

            public getProperties = ():RectangleShapeProperties => {
                return <BasicShapeProperties>this.getBaseProperties();
            };

            public contains = (point):boolean => {
                var properties = <RectangleShapeProperties>this.getBaseProperties();
                var renderOffset = this.getRenderOffset();

                var centerX = properties.position.x + renderOffset.x;
                var centerY = properties.position.y + renderOffset.y;
                var offsetX = properties.width / 2;
                var offsetY = properties.height / 2;

                return (centerX - offsetX <= point.x && centerX + offsetX >= point.x && centerY + offsetY >= point.y && centerY - offsetY <= point.y);
            };

            public  move = (offsetX, offsetY) => {
                var properties = <RectangleShapeProperties>this.getBaseProperties();
                properties.position.x += offsetX;
                properties.position.y += offsetY;
            };
        }
    }
}