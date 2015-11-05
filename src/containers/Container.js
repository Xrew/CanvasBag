///<reference path="../render/Point" />
///<reference path="./ContainerType" />
///<reference path="../utils/ObjectUtils" />
///<reference path="../utils/Guid" />
///<reference path="../sprites/Image" />
///<reference path="../sprites/Text" />
///<reference path="../shapes/ShapeType" />
///<reference path="../shapes/Circle" />
///<reference path="../shapes/Custom" />
///<reference path="../shapes/Rectangle" />
///<reference path="../shapes/Triangle" />
var CanvasBag;
(function (CanvasBag) {
    var Container;
    (function (Container) {
        var Basic = (function () {
            function Basic() {
                var _this = this;
                this.getType = function () {
                    return _this.type;
                };
                this.getId = function () {
                    return _this.id;
                };
                this.setProperties = function (properties) {
                    _this.properties = properties;
                };
                this.getProperties = function () {
                    return _this.properties;
                };
                this.contains = function (point) {
                    return _this.detectInnerElement(point) !== null;
                };
                this.detectInnerElement = function (point) {
                    for (var i = 0; i < _this.elements.length; i++) {
                        if (_this.elements[i].contains(point)) {
                            return _this.elements[i];
                        }
                    }
                    return null;
                };
                this.move = function (offsetX, offsetY) {
                    _this.properties.position.x += offsetX;
                    _this.properties.position.y += offsetY;
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
                                imported = new Container.Basic();
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
                this.type = CanvasBag.ContainerType.BASIC;
                this.elements = [];
                this.properties = null;
            }
            return Basic;
        })();
        Container.Basic = Basic;
    })(Container = CanvasBag.Container || (CanvasBag.Container = {}));
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=Container.js.map