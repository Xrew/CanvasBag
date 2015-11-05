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
        var Rectangle = (function (_super) {
            __extends(Rectangle, _super);
            function Rectangle() {
                var _this = this;
                _super.call(this);
                this.contains = function (point) {
                    var properties = _this.getProperties();
                    var renderOffset = _this.getRenderOffset();
                    var centerX = properties.position.x + renderOffset.x;
                    var centerY = properties.position.y + renderOffset.y;
                    var offsetX = properties.width / 2;
                    var offsetY = properties.height / 2;
                    return (centerX - offsetX <= point.x && centerX + offsetX >= point.x && centerY + offsetY >= point.y && centerY - offsetY <= point.y);
                };
                this.move = function (offsetX, offsetY) {
                    var properties = _this.getProperties();
                    properties.position.x += offsetX;
                    properties.position.y += offsetY;
                };
                this.setType(CanvasBag.ShapeType.RECTANGLE);
            }
            return Rectangle;
        })(CanvasBag.BasicShapePrototype);
        BasicShapes.Rectangle = Rectangle;
    })(BasicShapes = CanvasBag.BasicShapes || (CanvasBag.BasicShapes = {}));
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=Rectangle.js.map