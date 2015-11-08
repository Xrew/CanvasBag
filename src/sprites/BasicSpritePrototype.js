///<reference path="../utils/Guid" />
///<reference path="../utils/ObjectUtils" />
///<reference path="SpriteType.ts" />
///<reference path="../render/Point.ts" />
///<reference path="../render/RenderOffset.ts" />
var CanvasBag;
(function (CanvasBag) {
    var BasicSpritePrototype = (function () {
        function BasicSpritePrototype() {
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
            this.getBaseProperties = function () {
                return _this.properties;
            };
            this.setBaseProperties = function (properties) {
                _this.properties = properties;
            };
            this.click = function () {
                _this.onClickCallback();
            };
            this.setOnClickListener = function (callback) {
                _this.onClickCallback = callback;
            };
            this.setRenderOffset = function (offset) {
                _this.renderOffset = offset;
            };
            this.getRenderOffset = function () {
                return _this.renderOffset;
            };
            this.isDraggable = function () {
                return _this.properties.draggable;
            };
            this.setDraggable = function (able) {
                _this.properties.draggable = able;
            };
            this.setBackgroundImage = function (imageData) {
                _this.properties.imageData = imageData;
            };
            this.toJSON = function () {
                return {
                    id: _this.id,
                    type: _this.type,
                    renderOffset: _this.renderOffset,
                    properties: _this.properties
                };
            };
            this.fromJSON = function (json) {
                if (!CanvasBag.ObjectUtils.hasDefinedProperty(json, 'id')) {
                    json.id = CanvasBag.Guid.generate();
                    _this.printWarningBasicSprite("ID");
                }
                _this.id = json.id;
                _this.type = json.type;
                if (!CanvasBag.ObjectUtils.hasDefinedProperty(json, 'renderOffset')) {
                    json.renderOffset = { x: 0, y: 0 };
                    _this.printWarningBasicSprite("renderOffset");
                }
                _this.renderOffset = json.renderOffset;
                if (!CanvasBag.ObjectUtils.hasDefinedProperty(json, 'properties')) {
                    json.properties = {};
                    _this.printErrorBasicSprite("properties");
                }
                _this.properties = json.properties;
                if (!CanvasBag.ObjectUtils.hasDefinedProperty(json, 'onClickCallback')) {
                    json.onClickCallback = null;
                    _this.printWarningBasicSprite("onClickCallback");
                }
                _this.onClickCallback = json.onClickCallback;
                return _this;
            };
            this.printWarningBasicSprite = function (msg) {
                console.log("WARNING: " + " should be defined. Object is loaded from JSON, be careful.");
            };
            this.printErrorBasicSprite = function (msg) {
                console.log("ERROR: " + " must be defined. Object is loaded from JSON.");
            };
            this.type = null;
            this.id = CanvasBag.Guid.generate();
            this.renderOffset = { x: 0, y: 0 };
            this.onClickCallback = null;
            this.properties = null;
        }
        return BasicSpritePrototype;
    })();
    CanvasBag.BasicSpritePrototype = BasicSpritePrototype;
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=BasicSpritePrototype.js.map