///<reference path="./ShapeType" />
///<reference path="./BasicShapePrototype" />
///<reference path="../../render/Node.ts" />
///<reference path="../../render/Point.ts" />
///<reference path="BasicShapePrototype.ts" />

module CanvasBag {
    export module BasicShapes {
        export interface CircleShapeProperties extends BasicShapeProperties {
            radius: number;
        }

        export class Circle extends BasicShapePrototype  {
            constructor() {
                super();
                this.type=ShapeType.CIRCLE;
            }

            setProperties (properties: CircleShapeProperties) {
                this.properties = properties;
            };

            getProperties ():CircleShapeProperties {
                return <CircleShapeProperties>this.properties;
            };

            contains(point: Point):boolean {
                let properties : CircleShapeProperties = <CircleShapeProperties> this.properties;
                let renderOffset = this.getRenderOffset();
                return Math.pow(point.x - (properties.position.x + renderOffset.x), 2) +
                    Math.pow(point.y - (properties.position.y + renderOffset.y), 2) < Math.pow(properties.radius, 2);
            };

            move(offsetX, offsetY) {
                let properties : CircleShapeProperties = <CircleShapeProperties> this.properties;
                properties.position.x += offsetX;
                properties.position.y += offsetY;
            };
        }
    }
}