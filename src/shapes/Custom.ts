///<reference path="./ShapeType" />
///<reference path="./BasicShapePrototype" />
///<reference path="./BasicShape" />
///<reference path="../utils/PolygonUtils" />

module CanvasBag {
    export module BasicShapes {
        export class Custom extends BasicShapePrototype implements BasicShape {
            constructor() {
                super();
                this.setType(ShapeType.CUSTOM_SHAPE)
            }

            public contains = (point):boolean => {
                return PolygonUtils.pointInPolygon(
                    point, PolygonUtils.addOffsetToPoints(this.getProperties().points, this.getRenderOffset())
                )
            };

            public  move = (offsetX, offsetY) => {
                var properties = this.getProperties();
                for (var i = 0; i < properties.points.length; i++) {
                    properties.points[i].x += offsetX;
                    properties.points[i].y += offsetY;
                }
            };
        }
    }
}