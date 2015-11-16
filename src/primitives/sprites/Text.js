///<reference path="./SpriteType" />
///<reference path="./BasicSpritePrototype" />
///<reference path="../../render/Node.ts" />
///<reference path="../../render/base/Font.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CanvasBag;
(function (CanvasBag) {
    var Sprites;
    (function (Sprites) {
        var Text = (function (_super) {
            __extends(Text, _super);
            function Text() {
                _super.call(this);
                this.type = CanvasBag.SpriteType.TEXT;
            }
            Text.prototype.setProperties = function (properties) {
                this.properties = properties;
            };
            ;
            Text.prototype.getProperties = function () {
                return this.properties;
            };
            ;
            Text.prototype.contains = function (point) {
                var properties = this.properties;
                var renderOffset = this.getRenderOffset();
                var centerX = properties.position.x + renderOffset.x;
                var centerY = properties.position.y + renderOffset.y;
                var offsetX = properties.width / 2;
                var offsetY = properties.height / 2;
                return (centerX - offsetX <= point.x && centerX + offsetX >= point.x && centerY + offsetY >= point.y && centerY - offsetY <= point.y);
            };
            ;
            Text.prototype.move = function (offsetX, offsetY) {
                var properties = this.properties;
                properties.position.x += offsetX;
                properties.position.y += offsetY;
            };
            ;
            Text.prototype.setContent = function (content) {
                var properties = this.properties;
                properties.content = content;
            };
            return Text;
        })(CanvasBag.BasicSpritePrototype);
        Sprites.Text = Text;
    })(Sprites = CanvasBag.Sprites || (CanvasBag.Sprites = {}));
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=Text.js.map