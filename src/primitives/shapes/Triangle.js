///<reference path="./ShapeType" />
///<reference path="./BasicShapePrototype" />
///<reference path="../../render/Node.ts" />
///<reference path="../../utils/PolygonUtils" />
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
                _super.call(this);
                this.type = CanvasBag.ShapeType.TRIANGLE;
            }
            Triangle.prototype.setProperties = function (properties) {
                this.properties = properties;
            };
            ;
            Triangle.prototype.getProperties = function () {
                return this.properties;
            };
            ;
            Triangle.prototype.contains = function (point) {
                return CanvasBag.PolygonUtils.pointInPolygon(point, CanvasBag.PolygonUtils.addOffsetToPoints(this.getProperties().points, this.getRenderOffset()));
            };
            ;
            Triangle.prototype.move = function (offsetX, offsetY) {
                var properties = this.getProperties();
                for (var i = 0; i < properties.points.length; i++) {
                    properties.points[i].x += offsetX;
                    properties.points[i].y += offsetY;
                }
            };
            ;
            return Triangle;
        })(CanvasBag.BasicShapePrototype);
        BasicShapes.Triangle = Triangle;
    })(BasicShapes = CanvasBag.BasicShapes || (CanvasBag.BasicShapes = {}));
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=Triangle.js.map