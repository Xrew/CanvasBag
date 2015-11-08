///<reference path="./ShapeType" />
///<reference path="./BasicShapePrototype" />
///<reference path="../render/Node.ts" />
///<reference path="../utils/PolygonUtils" />

module CanvasBag {
    export module BasicShapes {
        export interface CustomShapeProperties extends BasicShapeProperties {
            points: Array<Point>;
        }

        export class Custom extends BasicShapePrototype {
            constructor() {
                super();
                this.setType(ShapeType.CUSTOM_SHAPE)
            }

            setProperties(properties: CustomShapeProperties) {
                this.setBaseProperties(properties);
            };

            getProperties():CustomShapeProperties{
                return <CustomShapeProperties>this.getBaseProperties();
            };

            contains(point):boolean{
                return PolygonUtils.pointInPolygon(
                    point, PolygonUtils.addOffsetToPoints((<CustomShapeProperties>this.getBaseProperties()).points, this.getRenderOffset())
                )
            };

            move(offsetX, offsetY){
                var properties = <CustomShapeProperties> this.getBaseProperties();
                for (var i = 0; i < properties.points.length; i++) {
                    properties.points[i].x += offsetX;
                    properties.points[i].y += offsetY;
                }
            };
        }
    }
}