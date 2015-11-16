///<reference path="./ShapeType" />
///<reference path="./BasicShapePrototype" />
///<reference path="../../render/Node.ts" />
///<reference path="../../render/Point.ts" />
///<reference path="BasicShapePrototype.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CanvasBag;
(function (CanvasBag) {
    var BasicShapes;
    (function (BasicShapes) {
        var Circle = (function (_super) {
            __extends(Circle, _super);
            function Circle() {
                _super.call(this);
                this.type = CanvasBag.ShapeType.CIRCLE;
            }
            Circle.prototype.setProperties = function (properties) {
                this.properties = properties;
            };
            ;
            Circle.prototype.getProperties = function () {
                return this.properties;
            };
            ;
            Circle.prototype.contains = function (point) {
                var properties = this.properties;
                var renderOffset = this.getRenderOffset();
                return Math.pow(point.x - (properties.position.x + renderOffset.x), 2) +
                    Math.pow(point.y - (properties.position.y + renderOffset.y), 2) < Math.pow(properties.radius, 2);
            };
            ;
            Circle.prototype.move = function (offsetX, offsetY) {
                var properties = this.properties;
                properties.position.x += offsetX;
                properties.position.y += offsetY;
            };
            ;
            return Circle;
        })(CanvasBag.BasicShapePrototype);
        BasicShapes.Circle = Circle;
    })(BasicShapes = CanvasBag.BasicShapes || (CanvasBag.BasicShapes = {}));
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=Circle.js.map