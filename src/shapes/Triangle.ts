///<reference path="./ShapeType" />
///<reference path="./BasicShapePrototype" />
///<reference path="../render/Node.ts" />
///<reference path="../utils/PolygonUtils" />

module CanvasBag {
    export module BasicShapes {
        export interface TriangleShapeProperties extends BasicShapeProperties {
            points: Array<Point>;
        }


        export class Triangle extends BasicShapePrototype {
            constructor() {
                super();
                this.setType(ShapeType.TRIANGLE)
            }

            setProperties(properties:TriangleShapeProperties) {
                this.setBaseProperties(properties);
            };

            getProperties():TriangleShapeProperties {
                return <TriangleShapeProperties>this.getBaseProperties();
            };

            contains(point):boolean {
                return PolygonUtils.pointInPolygon(point, PolygonUtils.addOffsetToPoints(this.getProperties().points, this.getRenderOffset()))
            };

            move(offsetX, offsetY) {
                var properties = <TriangleShapeProperties>this.getProperties();
                for (var i = 0; i < properties.points.length; i++) {
                    properties.points[i].x += offsetX;
                    properties.points[i].y += offsetY;
                }
            };
        }
    }
}