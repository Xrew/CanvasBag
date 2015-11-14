///<reference path="./SpriteType" />
///<reference path="./BasicSpritePrototype" />
///<reference path="../render/Node.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CanvasBag;
(function (CanvasBag) {
    var Sprites;
    (function (Sprites) {
        var Image = (function (_super) {
            __extends(Image, _super);
            function Image() {
                var _this = this;
                _super.call(this);
                this.setBackgroundImage = function (imageData) {
                    _this.properties.imageData = imageData;
                };
                this.type = CanvasBag.SpriteType.IMAGE;
            }
            Image.prototype.setProperties = function (properties) {
                this.properties = properties;
            };
            ;
            Image.prototype.getProperties = function () {
                return this.properties;
            };
            ;
            Image.prototype.contains = function (point) {
                var properties = this.properties;
                var renderOffset = this.getRenderOffset();
                var centerX = properties.position.x + renderOffset.x;
                var centerY = properties.position.y + renderOffset.y;
                var offsetX = properties.width / 2;
                var offsetY = properties.height / 2;
                return (centerX - offsetX <= point.x && centerX + offsetX >= point.x && centerY + offsetY >= point.y && centerY - offsetY <= point.y);
            };
            ;
            Image.prototype.move = function (offsetX, offsetY) {
                var properties = this.properties;
                properties.position.x += offsetX;
                properties.position.y += offsetY;
            };
            ;
            return Image;
        })(CanvasBag.BasicSpritePrototype);
        Sprites.Image = Image;
    })(Sprites = CanvasBag.Sprites || (CanvasBag.Sprites = {}));
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=Image.js.map