///<reference path="../render/Point" />
///<reference path="./ConnectionType" />
///<reference path="../utils/Guid" />
var CanvasBag;
(function (CanvasBag) {
    var BasicConnectionPrototype = (function () {
        function BasicConnectionPrototype() {
            var _this = this;
            this.getId = function () {
                return _this.id;
            };
            this.getType = function () {
                return _this.type;
            };
            this.setType = function (type) {
                _this.type = type;
            };
            this.getProperties = function () {
                return _this.properties;
            };
            this.setProperties = function (properties) {
                _this.properties = properties;
            };
            this.setTemporaryEnd = function (pemporaryEnd) {
                _this.temporaryEnd = pemporaryEnd;
            };
            this.setEntryBinding = function (entryBinding) {
                _this.bindings.entry = entryBinding;
            };
            this.setEndBinding = function (entryBinding) {
                _this.bindings.end = entryBinding;
            };
            this.toJSON = function () {
                return {
                    id: _this.id,
                    type: _this.type,
                    properties: _this.properties,
                    bindings: _this.bindings
                };
            };
            this.type = null;
            this.id = CanvasBag.Guid.generate();
            this.properties = null;
            this.onClickCallback = null;
            this.bindings = { entry: null, end: null };
            this.temporaryEnd = null;
        }
        BasicConnectionPrototype.prototype.click = function () {
            this.onClickCallback();
        };
        BasicConnectionPrototype.prototype.setOnClickListener = function (callback) {
            this.onClickCallback = callback;
        };
        BasicConnectionPrototype.prototype.getBindings = function () {
            return this.bindings;
        };
        BasicConnectionPrototype.prototype.setBindings = function (bindings) {
            this.bindings = bindings;
        };
        BasicConnectionPrototype.prototype.getTemporaryEnd = function () {
            return this.temporaryEnd;
        };
        return BasicConnectionPrototype;
    })();
    CanvasBag.BasicConnectionPrototype = BasicConnectionPrototype;
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=BasicConnectionPrototype.js.map