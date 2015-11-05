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
        var Triangle = (function (_super) {
            __extends(Triangle, _super);
            function Triangle() {
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
                this.setType(CanvasBag.ShapeType.TRIANGLE);
            }
            return Triangle;
        })(CanvasBag.BasicShapePrototype);
        BasicShapes.Triangle = Triangle;
    })(BasicShapes = CanvasBag.BasicShapes || (CanvasBag.BasicShapes = {}));
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=Triangle.js.map