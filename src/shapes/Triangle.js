///<reference path="./ShapeType" />
///<reference path="./BasicShapePrototype" />
///<reference path="./BasicShape" />
///<reference path="../utils/PolygonUtils" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CanvasBag;
(function (CanvasBag) {
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
                this.setType(1 /* TRIANGLE */);
            }
            return Triangle;
        })(CanvasBag.BasicShapePrototype);
        BasicShapes.Triangle = Triangle;
    })(CanvasBag.BasicShapes || (CanvasBag.BasicShapes = {}));
    var BasicShapes = CanvasBag.BasicShapes;
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=Triangle.js.map
