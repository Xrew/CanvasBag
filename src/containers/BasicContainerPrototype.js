///<reference path="../render/Point" />
///<reference path="../utils/ObjectUtils" />
///<reference path="../utils/Guid" />
///<reference path="../sprites/Image" />
///<reference path="../sprites/Text" />
///<reference path="../shapes/ShapeType" />
///<reference path="ContainerType.ts" />
///<reference path="../render/Node.ts" />
var CanvasBag;
(function (CanvasBag) {
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
                //if (!ObjectUtils.hasDefinedProperty(json, 'id')) {
                //    json.id = Guid.generate();
                //    this.printWarningBasicContainer("ID");
                //}
                //this.id = json.id;
                //this.type = json.type;
                //
                //if (!ObjectUtils.hasDefinedProperty(json, 'elements')) {
                //    json.elements = [];
                //    this.printWarningBasicContainer("elements");
                //}
                //
                //json.elements.forEach((element) => {
                //    if (!ObjectUtils.hasDefinedProperty(element, 'type')) {
                //        this.printErrorBasicContainer("Type of node is not defined");
                //        throw "NodeType error"
                //    }
                //    var imported = null;
                //    switch (element.type) {
                //        case ShapeType.RECTANGLE:
                //            imported = new BasicShapes.Rectangle();
                //            break;
                //        case ShapeType.CIRCLE:
                //            imported = new BasicShapes.Circle();
                //            break;
                //        case ShapeType.TRIANGLE:
                //            imported = new BasicShapes.Triangle();
                //            break;
                //        case ShapeType.CUSTOM_SHAPE:
                //            imported = new BasicShapes.Custom();
                //            break;
                //        case ContainerType.BASIC:
                //            imported = new BasicContainer.SimpleContainer();
                //            break;
                //        case SpriteType.IMAGE:
                //            imported = new Sprites.Image();
                //            break;
                //        case SpriteType.TEXT:
                //            imported = new Sprites.Text();
                //            break;
                //        default:
                //            this.printErrorBasicContainer("Unknown shape type.");
                //            throw "NodeType error";
                //    }
                //    imported.fromJSON(element);
                //    this.elements.push(imported)
                //});
                //
                //if (!ObjectUtils.hasDefinedProperty(json, 'properties')) {
                //    json.properties = null;
                //    this.printWarningBasicContainer("properties");
                //}
                //this.properties = json.properties;
                //return this;
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
    CanvasBag.BasicContainerPrototype = BasicContainerPrototype;
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=BasicContainerPrototype.js.map