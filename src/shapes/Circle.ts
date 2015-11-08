///<reference path="./ShapeType" />
///<reference path="./BasicShapePrototype" />
///<reference path="./BasicShape" />
///<reference path="../render/Point.ts" />
///<reference path="BasicShapePrototype.ts" />

module CanvasBag {
    export module BasicShapes {
        export interface CircleShapeProperties extends BasicShapeProperties {
            radius: number;
        }

        export class Circle extends BasicShapePrototype implements BasicShape {
            constructor() {
                super();
                this.setType(ShapeType.CIRCLE)
            }

            public setProperties = (properties: CircleShapeProperties) => {
                this.setBaseProperties(properties);
            };

            public getProperties = ():CircleShapeProperties => {
                return <CircleShapeProperties>this.getBaseProperties();
            };

            public contains = (point: Point):boolean => {
                var properties : CircleShapeProperties = <CircleShapeProperties> this.getBaseProperties();
                var renderOffset = this.getRenderOffset();
                return Math.pow(point.x - (properties.position.x + renderOffset.x), 2) +
                    Math.pow(point.y - (properties.position.y + renderOffset.y), 2) < Math.pow(properties.radius, 2);
            };

            public  move = (offsetX, offsetY) => {
                var properties : CircleShapeProperties = <CircleShapeProperties> this.getBaseProperties();
                properties.position.x += offsetX;
                properties.position.y += offsetY;
            };
        }
    }
}