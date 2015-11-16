var CanvasBag;
(function (CanvasBag) {
    var ShapeType = (function () {
        function ShapeType() {
        }
        ShapeType.RECTANGLE = "SHAPE_RECTANGLE";
        ShapeType.TRIANGLE = "SHAPE_TRIANGLE";
        ShapeType.CIRCLE = "SHAPE_CIRCLE";
        ShapeType.CUSTOM_SHAPE = "SHAPE_CUSTOM_SHAPE";
        ShapeType.COMPLEX_SHAPE = "SHAPE_COMPLEX_SHAPE";
        return ShapeType;
    })();
    CanvasBag.ShapeType = ShapeType;
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=ShapeType.js.map