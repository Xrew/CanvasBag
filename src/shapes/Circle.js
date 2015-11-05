///<reference path="./ShapeType" />
///<reference path="./BasicShapePrototype" />
///<reference path="./BasicShape" />
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
                var _this = this;
                _super.call(this);
                this.contains = function (point) {
                    var properties = _this.getProperties();
                    var renderOffset = _this.getRenderOffset();
                    return Math.pow(point.x - (properties.position.x + renderOffset.x), 2) +
                        Math.pow(point.y - (properties.position.y + renderOffset.y), 2) < Math.pow(properties.radius, 2);
                };
                this.move = function (offsetX, offsetY) {
                    var properties = _this.getProperties();
                    properties.position.x += offsetX;
                    properties.position.y += offsetY;
                };
                this.setType(CanvasBag.ShapeType.CIRCLE);
            }
            return Circle;
        })(CanvasBag.BasicShapePrototype);
        BasicShapes.Circle = Circle;
    })(BasicShapes = CanvasBag.BasicShapes || (CanvasBag.BasicShapes = {}));
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=Circle.js.map