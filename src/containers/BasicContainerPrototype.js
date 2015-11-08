///<reference path="../render/Point" />
///<reference path="../utils/ObjectUtils" />
///<reference path="../utils/Guid" />
///<reference path="../sprites/Image" />
///<reference path="../sprites/Text" />
///<reference path="../shapes/ShapeType" />
///<reference path="../shapes/Circle" />
///<reference path="../shapes/Custom" />
///<reference path="../shapes/Rectangle" />
///<reference path="../shapes/Triangle" />
///<reference path="ContainerType.ts" />
///<reference path="SimpleContainer.ts" />
var CanvasBag;
(function (CanvasBag) {
    var BasicContainer;
    (function (BasicContainer) {
        var BasicContainerPrototype = (function () {
            function BasicContainerPrototype() {
                var _this = this;
                this.getType = function () {
                    return _this.type;
                };
                this.getId = function () {
                    return _this.id;
                };
                this.setBaseProperties = function (properties) {
                    _this.properties = properties;
                };
                this.getBaseProperties = function () {
                    return _this.properties;
                };
                this.detectInnerElement = function (point) {
                    for (var i = 0; i < _this.elements.length; i++) {
                        if (_this.elements[i].contains(point)) {
                            return _this.elements[i];
                        }
                    }
                    return null;
                };
                this.addElement = function (element) {
                    _this.elements.push(element);
                    return _this;
                };
                this.getElements = function () {
                    return _this.elements;
                };
                this.toJSON = function () {
                    return {
                        id: _this.id,
                        type: _this.type,
                        elements: _this.elements,
                        properties: _this.properties
                    };
                };
                this.fromJSON = function (json) {
                    if (!CanvasBag.ObjectUtils.hasDefinedProperty(json, 'id')) {
                        json.id = CanvasBag.Guid.generate();
                        _this.printWarningBasicContainer("ID");
                    }
                    _this.id = json.id;
                    _this.type = json.type;
                    if (!CanvasBag.ObjectUtils.hasDefinedProperty(json, 'elements')) {
                        json.elements = [];
                        _this.printWarningBasicContainer("elements");
                    }
                    json.elements.forEach(function (element) {
                        if (!CanvasBag.ObjectUtils.hasDefinedProperty(element, 'type')) {
                            _this.printErrorBasicContainer("Type of node is not defined");
                            throw "NodeType error";
                        }
                        var imported = null;
                        switch (element.type) {
                            case CanvasBag.ShapeType.RECTANGLE:
                                imported = new CanvasBag.BasicShapes.Rectangle();
                                break;
                            case CanvasBag.ShapeType.CIRCLE:
                                imported = new CanvasBag.BasicShapes.Circle();
                                break;
                            case CanvasBag.ShapeType.TRIANGLE:
                                imported = new CanvasBag.BasicShapes.Triangle();
                                break;
                            case CanvasBag.ShapeType.CUSTOM_SHAPE:
                                imported = new CanvasBag.BasicShapes.Custom();
                                break;
                            case CanvasBag.ContainerType.BASIC:
                                imported = new BasicContainer.SimpleContainer();
                                break;
                            case CanvasBag.SpriteType.IMAGE:
                                imported = new CanvasBag.Sprites.Image();
                                break;
                            case CanvasBag.SpriteType.TEXT:
                                imported = new CanvasBag.Sprites.Text();
                                break;
                            default:
                                _this.printErrorBasicContainer("Unknown shape type.");
                                throw "NodeType error";
                        }
                        imported.fromJSON(element);
                        _this.elements.push(imported);
                    });
                    if (!CanvasBag.ObjectUtils.hasDefinedProperty(json, 'properties')) {
                        json.properties = null;
                        _this.printWarningBasicContainer("properties");
                    }
                    _this.properties = json.properties;
                    return _this;
                };
                this.printWarningBasicContainer = function (msg) {
                    console.log("WARNING: " + " should be defined. Object is loaded from JSON, be careful.");
                };
                this.printErrorBasicContainer = function (msg) {
                    console.log("ERROR: " + " must be defined. Object is loaded from JSON.");
                };
                this.id = CanvasBag.Guid.generate();
                this.type = null;
                this.elements = [];
                this.properties = null;
            }
            BasicContainerPrototype.prototype.setType = function (type) {
                this.type = type;
            };
            return BasicContainerPrototype;
        })();
        BasicContainer.BasicContainerPrototype = BasicContainerPrototype;
    })(BasicContainer = CanvasBag.BasicContainer || (CanvasBag.BasicContainer = {}));
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=BasicContainerPrototype.js.map