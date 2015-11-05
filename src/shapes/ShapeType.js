var CanvasBag;
(function (CanvasBag) {
    var ShapeType = (function () {
        function ShapeType() {
        }
        ShapeType.RECTANGLE = "RECTANGLE";
        ShapeType.TRIANGLE = "TRIANGLE";
        ShapeType.CIRCLE = "CIRCLE";
        ShapeType.CUSTOM_SHAPE = "CUSTOM_SHAPE";
        ShapeType.COMPLEX_SHAPE = "COMPLEX_SHAPE";
        return ShapeType;
    })();
    CanvasBag.ShapeType = ShapeType;
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=ShapeType.js.map