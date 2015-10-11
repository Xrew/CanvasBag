var CanvasBag;
(function (CanvasBag) {
    var ObjectUtils = (function () {
        function ObjectUtils() {
        }
        ObjectUtils.hasDefinedProperty = function (object, key) {
            return object[key] !== undefined && object[key] !== null;
        };
        return ObjectUtils;
    })();
    CanvasBag.ObjectUtils = ObjectUtils;
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=ObjectUtils.js.map
