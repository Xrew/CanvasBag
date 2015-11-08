var CanvasBag;
(function (CanvasBag) {
    var Base;
    (function (Base) {
        var Color = (function () {
            function Color() {
            }
            Color.BLACK = "black";
            Color.YELLOW = "yellow";
            Color.BLUE = "blue";
            Color.RED = "red";
            return Color;
        })();
        Base.Color = Color;
    })(Base = CanvasBag.Base || (CanvasBag.Base = {}));
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=Color.js.map