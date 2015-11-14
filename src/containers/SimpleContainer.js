///<reference path="BasicContainerPrototype.ts" />
///<reference path="ContainerType.ts" />
///<reference path="../shapes/Circle.ts"/>
///<reference path="../shapes/Rectangle.ts"/>
///<reference path="../shapes/Triangle.ts"/>
///<reference path="../shapes/Custom.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CanvasBag;
(function (CanvasBag) {
    var BasicContainer;
    (function (BasicContainer) {
        var SimpleContainer = (function (_super) {
            __extends(SimpleContainer, _super);
            function SimpleContainer() {
                _super.call(this);
                this.type = CanvasBag.ContainerType.BASIC;
            }
            SimpleContainer.prototype.getProperties = function () {
                return this.properties;
            };
            SimpleContainer.prototype.setProperties = function (properties) {
                this.properties = properties;
            };
            SimpleContainer.prototype.contains = function (point) {
                return this.detectInnerElement(point) !== null;
            };
            SimpleContainer.prototype.move = function (offsetX, offsetY) {
                this.properties.position.x += offsetX;
                this.properties.position.y += offsetY;
            };
            SimpleContainer.prototype.toJSON = function () {
                return {
                    id: this.id,
                    type: this.type,
                    elements: this.elements,
                    properties: this.properties
                };
            };
            ;
            SimpleContainer.prototype.fromJSON = function (json) {
                var _this = this;
                if (!CanvasBag.ObjectUtils.hasDefinedProperty(json, 'id')) {
                    json.id = CanvasBag.Guid.generate();
                    this.printWarningBasicContainer("ID");
                }
                this.id = json.id;
                this.type = json.type;
                if (!CanvasBag.ObjectUtils.hasDefinedProperty(json, 'elements')) {
                    json.elements = [];
                    this.printWarningBasicContainer("elements");
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
                    this.printWarningBasicContainer("properties");
                }
                this.properties = json.properties;
                return this;
            };
            ;
            return SimpleContainer;
        })(CanvasBag.BasicContainerPrototype);
        BasicContainer.SimpleContainer = SimpleContainer;
    })(BasicContainer = CanvasBag.BasicContainer || (CanvasBag.BasicContainer = {}));
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=SimpleContainer.js.map