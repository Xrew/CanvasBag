///<reference path="./ShapeType" />
///<reference path="./BasicShapePrototype" />
///<reference path="./BasicShape" />
///<reference path="../utils/PolygonUtils" />

module CanvasBag {
    export module BasicShapes {
        export interface CustomShapeProperties extends BasicShapeProperties {
            points: Array<Point>;
        }

        export class Custom extends BasicShapePrototype implements BasicShape {
            constructor() {
                super();
                this.setType(ShapeType.CUSTOM_SHAPE)
            }

            public setProperties = (properties: CustomShapeProperties) => {
                this.setBaseProperties(properties);
            };

            public getProperties = ():CustomShapeProperties => {
                return <CustomShapeProperties>this.getBaseProperties();
            };

            public contains = (point):boolean => {
                return PolygonUtils.pointInPolygon(
                    point, PolygonUtils.addOffsetToPoints((<CustomShapeProperties>this.getBaseProperties()).points, this.getRenderOffset())
                )
            };

            public  move = (offsetX, offsetY) => {
                var properties = <CustomShapeProperties> this.getBaseProperties();
                for (var i = 0; i < properties.points.length; i++) {
                    properties.points[i].x += offsetX;
                    properties.points[i].y += offsetY;
                }
            };
        }
    }
}