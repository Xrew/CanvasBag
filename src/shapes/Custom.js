///<reference path="./ShapeType" />
///<reference path="./BasicShapePrototype" />
///<reference path="../render/Node.ts" />
///<reference path="../utils/PolygonUtils" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CanvasBag;
(function (CanvasBag) {
    var BasicShapes;
    (function (BasicShapes) {
        var Custom = (function (_super) {
            __extends(Custom, _super);
            function Custom() {
                _super.call(this);
                this.setType(CanvasBag.ShapeType.CUSTOM_SHAPE);
            }
            Custom.prototype.setProperties = function (properties) {
                this.setBaseProperties(properties);
            };
            ;
            Custom.prototype.getProperties = function () {
                return this.getBaseProperties();
            };
            ;
            Custom.prototype.contains = function (point) {
                return CanvasBag.PolygonUtils.pointInPolygon(point, CanvasBag.PolygonUtils.addOffsetToPoints(this.getBaseProperties().points, this.getRenderOffset()));
            };
            ;
            Custom.prototype.move = function (offsetX, offsetY) {
                var properties = this.getBaseProperties();
                for (var i = 0; i < properties.points.length; i++) {
                    properties.points[i].x += offsetX;
                    properties.points[i].y += offsetY;
                }
            };
            ;
            return Custom;
        })(CanvasBag.BasicShapePrototype);
        BasicShapes.Custom = Custom;
    })(BasicShapes = CanvasBag.BasicShapes || (CanvasBag.BasicShapes = {}));
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=Custom.js.map