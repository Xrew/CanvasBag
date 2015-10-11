///<reference path="./ShapeType" />
///<reference path="./BasicShapePrototype" />
///<reference path="./BasicShape" />

module CanvasBag {
    export module BasicShapes {
        export class Circle extends BasicShapePrototype implements BasicShape {
            constructor() {
                super();
                this.setType(ShapeType.CIRCLE)
            }

            public contains = (point):boolean => {
                var properties = this.getProperties();
                var renderOffset = this.getRenderOffset();
                return Math.pow(point.x - (properties.position.x + renderOffset.x), 2) +
                    Math.pow(point.y - (properties.position.y + renderOffset.y), 2) < Math.pow(properties.radius, 2);
            };

            public  move = (offsetX, offsetY) => {
                var properties = this.getProperties();
                properties.position.x += offsetX;
                properties.position.y += offsetY;
            };
        }
    }
}