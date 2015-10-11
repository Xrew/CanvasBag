var CanvasBag;
(function (CanvasBag) {
    (function (ShapeType) {
        ShapeType[ShapeType["RECTANGLE"] = 0] = "RECTANGLE";
        ShapeType[ShapeType["TRIANGLE"] = 1] = "TRIANGLE";
        ShapeType[ShapeType["CIRCLE"] = 2] = "CIRCLE";
        ShapeType[ShapeType["CUSTOM_SHAPE"] = 3] = "CUSTOM_SHAPE";
        ShapeType[ShapeType["COMPLEX_SHAPE"] = 4] = "COMPLEX_SHAPE";
    })(CanvasBag.ShapeType || (CanvasBag.ShapeType = {}));
    var ShapeType = CanvasBag.ShapeType;
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=ShapeType.js.map
