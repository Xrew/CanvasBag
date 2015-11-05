///<reference path="./ShapeType" />
///<reference path="./BasicShapePrototype" />
///<reference path="./BasicShape" />
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
                var _this = this;
                _super.call(this);
                this.contains = function (point) {
                    return CanvasBag.PolygonUtils.pointInPolygon(point, CanvasBag.PolygonUtils.addOffsetToPoints(_this.getProperties().points, _this.getRenderOffset()));
                };
                this.move = function (offsetX, offsetY) {
                    var properties = _this.getProperties();
                    for (var i = 0; i < properties.points.length; i++) {
                        properties.points[i].x += offsetX;
                        properties.points[i].y += offsetY;
                    }
                };
                this.setType(CanvasBag.ShapeType.CUSTOM_SHAPE);
            }
            return Custom;
        })(CanvasBag.BasicShapePrototype);
        BasicShapes.Custom = Custom;
    })(BasicShapes = CanvasBag.BasicShapes || (CanvasBag.BasicShapes = {}));
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=Custom.js.map