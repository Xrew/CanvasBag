///<reference path="./ShapeType" />
///<reference path="./BasicShapePrototype" />
///<reference path="./BasicShape" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CanvasBag;
(function (CanvasBag) {
    var Circle = (function (_super) {
        __extends(Circle, _super);
        function Circle() {
            var _this = this;
            _super.call(this);
            this.contains = function (point) {
                var properties = _this.getProperties();
                var renderOffset = _this.getRenderOffset();
                return Math.pow(point.x - (properties.position.x + renderOffset.x), 2) + Math.pow(point.y - (properties.position.y + renderOffset.y), 2) < Math.pow(properties.radius, 2);
            };
            this.move = function (offsetX, offsetY) {
                var properties = _this.getProperties();
                properties.position.x += offsetX;
                properties.position.y += offsetY;
            };
            this.setType(2 /* CIRCLE */);
        }
        return Circle;
    })(CanvasBag.BasicShapePrototype);
    CanvasBag.Circle = Circle;
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=Circle.js.map
