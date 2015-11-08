///<reference path="./ShapeType" />
///<reference path="./BasicShapePrototype" />
///<reference path="../render/Node.ts" />
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
                _super.call(this);
                this.setType(CanvasBag.ShapeType.RECTANGLE);
            }
            Rectangle.prototype.setProperties = function (properties) {
                this.setBaseProperties(properties);
            };
            ;
            Rectangle.prototype.getProperties = function () {
                return this.getBaseProperties();
            };
            ;
            Rectangle.prototype.contains = function (point) {
                var properties = this.getBaseProperties();
                var renderOffset = this.getRenderOffset();
                var centerX = properties.position.x + renderOffset.x;
                var centerY = properties.position.y + renderOffset.y;
                var offsetX = properties.width / 2;
                var offsetY = properties.height / 2;
                return (centerX - offsetX <= point.x && centerX + offsetX >= point.x && centerY + offsetY >= point.y && centerY - offsetY <= point.y);
            };
            ;
            Rectangle.prototype.move = function (offsetX, offsetY) {
                var properties = this.getBaseProperties();
                properties.position.x += offsetX;
                properties.position.y += offsetY;
            };
            ;
            return Rectangle;
        })(CanvasBag.BasicShapePrototype);
        BasicShapes.Rectangle = Rectangle;
    })(BasicShapes = CanvasBag.BasicShapes || (CanvasBag.BasicShapes = {}));
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=Rectangle.js.map