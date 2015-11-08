///<reference path="BasicContainerPrototype.ts" />
///<reference path="ContainerType.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CanvasBag;
(function (CanvasBag) {
    var BasicContainer;
    (function (BasicContainer) {
        var SimpleContainer = (function (_super) {
            __extends(SimpleContainer, _super);
            function SimpleContainer() {
                _super.call(this);
                this.setType(CanvasBag.ContainerType.BASIC);
            }
            SimpleContainer.prototype.getProperties = function () {
                return this.getBaseProperties();
            };
            ;
            SimpleContainer.prototype.setProperties = function (properties) {
                this.setBaseProperties(properties);
            };
            ;
            SimpleContainer.prototype.contains = function (point) {
                return this.detectInnerElement(point) !== null;
            };
            ;
            SimpleContainer.prototype.move = function (offsetX, offsetY) {
                this.getBaseProperties().position.x += offsetX;
                this.getBaseProperties().position.y += offsetY;
            };
            ;
            return SimpleContainer;
        })(BasicContainer.BasicContainerPrototype);
        BasicContainer.SimpleContainer = SimpleContainer;
    })(BasicContainer = CanvasBag.BasicContainer || (CanvasBag.BasicContainer = {}));
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=SimpleContainer.js.map