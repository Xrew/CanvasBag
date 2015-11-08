///<reference path="./ShapeType" />
///<reference path="./BasicShapePrototype" />
///<reference path="./BasicShape" />
///<reference path="../utils/PolygonUtils" />

module CanvasBag {
    export module BasicShapes {
        export interface TriangleShapeProperties extends BasicShapeProperties {
            points: Array<Point>;
        }


        export class Triangle extends BasicShapePrototype implements BasicShape {
            constructor() {
                super();
                this.setType(ShapeType.TRIANGLE)
            }

            public setProperties = (properties:TriangleShapeProperties) => {
                this.setBaseProperties(properties);
            };

            public getProperties = ():TriangleShapeProperties => {
                return <TriangleShapeProperties>this.getBaseProperties();
            };

            public contains = (point):boolean => {
                return PolygonUtils.pointInPolygon(point, PolygonUtils.addOffsetToPoints(this.getProperties().points, this.getRenderOffset()))
            };

            public  move = (offsetX, offsetY) => {
                var properties = <TriangleShapeProperties>this.getProperties();
                for (var i = 0; i < properties.points.length; i++) {
                    properties.points[i].x += offsetX;
                    properties.points[i].y += offsetY;
                }
            };
        }
    }
}