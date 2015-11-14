///<reference path="../utils/Guid" />
///<reference path="./ShapeType" />
///<reference path="../utils/ObjectUtils" />
///<reference path="../render/RenderOffset.ts" />
///<reference path="../render/base/Color.ts" />
///<reference path="../render/Point.ts" />
///<reference path="../render/Node.ts" />
var CanvasBag;
(function (CanvasBag) {
    var BasicShapePrototype = (function () {
        function BasicShapePrototype() {
            var _this = this;
            this.getId = function () {
                return _this.id;
            };
            this.getType = function () {
                return _this.type;
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
            this.isJoinAble = function () {
                return _this.properties.joinable;
            };
            this.setJoinAble = function (able) {
                _this.properties.joinable = able;
            };
            this.setBackgroundImage = function (base64String) {
                _this.properties.base64Background = base64String;
            };
            // TODO not sure what type is incoming type
            this.fromJSON = function (json) {
                if (!CanvasBag.ObjectUtils.hasDefinedProperty(json, 'id')) {
                    json.id = CanvasBag.Guid.generate();
                    _this.printWarningBasicShape("ID");
                }
                _this.id = json.id;
                _this.type = json.type;
                if (!CanvasBag.ObjectUtils.hasDefinedProperty(json, 'renderOffset')) {
                    json.renderOffset = { x: 0, y: 0 };
                    _this.printWarningBasicShape("renderOffset");
                }
                _this.renderOffset = json.renderOffset;
                if (!CanvasBag.ObjectUtils.hasDefinedProperty(json, 'properties')) {
                    json.properties = {};
                    _this.printErrorBasicShape("properties");
                }
                _this.properties = json.properties;
                if (!CanvasBag.ObjectUtils.hasDefinedProperty(json, 'onClickCallback')) {
                    json.onClickCallback = null;
                    _this.printWarningBasicShape("onClickCallback");
                }
                _this.onClickCallback = json.onClickCallback;
                return _this;
            };
            this.printWarningBasicShape = function (msg) {
                console.log("WARNING: " + " should be defined. Object is loaded from JSON, be careful.");
            };
            this.printErrorBasicShape = function (msg) {
                console.log("ERROR: " + " must be defined. Object is loaded from JSON.");
            };
            this.id = CanvasBag.Guid.generate();
            this.renderOffset = { x: 0, y: 0 };
            this.onClickCallback = null;
            this.properties = null;
        }
        // TODO not sure what type is returned type
        BasicShapePrototype.prototype.toJSON = function () {
            return {
                id: this.id,
                type: this.type,
                renderOffset: this.renderOffset,
                properties: this.properties
            };
        };
        return BasicShapePrototype;
    })();
    CanvasBag.BasicShapePrototype = BasicShapePrototype;
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=BasicShapePrototype.js.map