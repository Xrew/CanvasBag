var CanvasBag;
(function (CanvasBag) {
    var ContainerType = (function () {
        function ContainerType() {
        }
        ContainerType.BASIC = "CONTAINER_BASIC";
        return ContainerType;
    })();
    CanvasBag.ContainerType = ContainerType;
})(CanvasBag || (CanvasBag = {}));
var CanvasBag;
(function (CanvasBag) {
    var SpriteType = (function () {
        function SpriteType() {
        }
        SpriteType.IMAGE = "SPRITE_IMAGE";
        SpriteType.TEXT = "SPRITE_TEXT";
        return SpriteType;
    })();
    CanvasBag.SpriteType = SpriteType;
})(CanvasBag || (CanvasBag = {}));
var CanvasBag;
(function (CanvasBag) {
    var ShapeType = (function () {
        function ShapeType() {
        }
        ShapeType.RECTANGLE = "SHAPE_RECTANGLE";
        ShapeType.TRIANGLE = "SHAPE_TRIANGLE";
        ShapeType.CIRCLE = "SHAPE_CIRCLE";
        ShapeType.CUSTOM_SHAPE = "SHAPE_CUSTOM_SHAPE";
        ShapeType.COMPLEX_SHAPE = "SHAPE_COMPLEX_SHAPE";
        return ShapeType;
    })();
    CanvasBag.ShapeType = ShapeType;
})(CanvasBag || (CanvasBag = {}));
var CanvasBag;
(function (CanvasBag) {
    var ConnectionType = (function () {
        function ConnectionType() {
        }
        ConnectionType.SIMPLE = "CONNECTION_SIMPLE";
        return ConnectionType;
    })();
    CanvasBag.ConnectionType = ConnectionType;
})(CanvasBag || (CanvasBag = {}));
var CanvasBag;
(function (CanvasBag) {
    var Guid = (function () {
        function Guid() {
        }
        Guid.generate = function () {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        };
        return Guid;
    })();
    CanvasBag.Guid = Guid;
})(CanvasBag || (CanvasBag = {}));
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
///<reference path="Point.ts" />
///<reference path="../render/Point" />
///<reference path="./ConnectionType" />
///<reference path="../utils/Guid" />
///<reference path="../render/base/Color.ts" />
///<reference path="../render/Node.ts" />
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
            this.getBaseProperties = function () {
                return _this.properties;
            };
            this.setBaseProperties = function (properties) {
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
///<reference path="./ConnectionType" />
///<reference path="./BasicConnectionPrototype" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CanvasBag;
(function (CanvasBag) {
    var Connections;
    (function (Connections) {
        var SimpleConnection = (function (_super) {
            __extends(SimpleConnection, _super);
            function SimpleConnection() {
                _super.call(this);
                this.setType(CanvasBag.ConnectionType.SIMPLE);
            }
            SimpleConnection.prototype.getProperties = function () {
                return this.getBaseProperties();
            };
            ;
            SimpleConnection.prototype.setProperties = function (properties) {
                this.setBaseProperties(properties);
            };
            ;
            SimpleConnection.prototype.contains = function (point) {
                console.log("Simple connection doesnt support 'contain' method.");
                return false;
            };
            SimpleConnection.prototype.move = function (offsetX, offsetY) {
                throw "Method move is not supported in SimpleConnection yet.";
            };
            return SimpleConnection;
        })(CanvasBag.BasicConnectionPrototype);
        Connections.SimpleConnection = SimpleConnection;
    })(Connections = CanvasBag.Connections || (CanvasBag.Connections = {}));
})(CanvasBag || (CanvasBag = {}));
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
///<reference path="../utils/Guid" />
///<reference path="../utils/ObjectUtils" />
///<reference path="SpriteType.ts" />
///<reference path="../render/Point.ts" />
///<reference path="../render/RenderOffset.ts" />
///<reference path="../render/Node.ts" />
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
var CanvasBag;
(function (CanvasBag) {
    var Base;
    (function (Base) {
        var Font = (function () {
            function Font() {
            }
            Font.ARIAL = "Arial";
            return Font;
        })();
        Base.Font = Font;
    })(Base = CanvasBag.Base || (CanvasBag.Base = {}));
})(CanvasBag || (CanvasBag = {}));
///<reference path="./SpriteType" />
///<reference path="./BasicSpritePrototype" />
///<reference path="../render/Node.ts" />
///<reference path="../render/base/Font.ts" />
var CanvasBag;
(function (CanvasBag) {
    var Sprites;
    (function (Sprites) {
        var Text = (function (_super) {
            __extends(Text, _super);
            function Text() {
                _super.call(this);
                this.setType(CanvasBag.SpriteType.TEXT);
            }
            Text.prototype.setProperties = function (properties) {
                this.setBaseProperties(properties);
            };
            ;
            Text.prototype.getProperties = function () {
                return this.getBaseProperties();
            };
            ;
            Text.prototype.contains = function (point) {
                var properties = this.getProperties();
                var renderOffset = this.getRenderOffset();
                var centerX = properties.position.x + renderOffset.x;
                var centerY = properties.position.y + renderOffset.y;
                var offsetX = properties.width / 2;
                var offsetY = properties.height / 2;
                return (centerX - offsetX <= point.x && centerX + offsetX >= point.x && centerY + offsetY >= point.y && centerY - offsetY <= point.y);
            };
            ;
            Text.prototype.move = function (offsetX, offsetY) {
                var properties = this.getProperties();
                properties.position.x += offsetX;
                properties.position.y += offsetY;
            };
            ;
            return Text;
        })(CanvasBag.BasicSpritePrototype);
        Sprites.Text = Text;
    })(Sprites = CanvasBag.Sprites || (CanvasBag.Sprites = {}));
})(CanvasBag || (CanvasBag = {}));
///<reference path="./SpriteType" />
///<reference path="./BasicSpritePrototype" />
///<reference path="../render/Node.ts" />
var CanvasBag;
(function (CanvasBag) {
    var Sprites;
    (function (Sprites) {
        var Image = (function (_super) {
            __extends(Image, _super);
            function Image() {
                var _this = this;
                _super.call(this);
                this.setBackgroundImage = function (imageData) {
                    _this.getBaseProperties().imageData = imageData;
                };
                this.setType(CanvasBag.SpriteType.IMAGE);
            }
            Image.prototype.setProperties = function (properties) {
                this.setBaseProperties(properties);
            };
            ;
            Image.prototype.getProperties = function () {
                return this.getBaseProperties();
            };
            ;
            Image.prototype.contains = function (point) {
                var properties = this.getBaseProperties();
                var renderOffset = this.getRenderOffset();
                var centerX = properties.position.x + renderOffset.x;
                var centerY = properties.position.y + renderOffset.y;
                var offsetX = properties.width / 2;
                var offsetY = properties.height / 2;
                return (centerX - offsetX <= point.x && centerX + offsetX >= point.x && centerY + offsetY >= point.y && centerY - offsetY <= point.y);
            };
            ;
            Image.prototype.move = function (offsetX, offsetY) {
                var properties = this.getProperties();
                properties.position.x += offsetX;
                properties.position.y += offsetY;
            };
            ;
            return Image;
        })(CanvasBag.BasicSpritePrototype);
        Sprites.Image = Image;
    })(Sprites = CanvasBag.Sprites || (CanvasBag.Sprites = {}));
})(CanvasBag || (CanvasBag = {}));
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
            this.setType = function (type) {
                _this.type = type;
            };
            this.getBaseProperties = function () {
                return _this.properties;
            };
            this.setBaseProperties = function (pProperties) {
                _this.properties = pProperties;
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
///<reference path="./ShapeType" />
///<reference path="./BasicShapePrototype" />
///<reference path="../render/Node.ts" />
///<reference path="../render/Point.ts" />
///<reference path="BasicShapePrototype.ts" />
var CanvasBag;
(function (CanvasBag) {
    var BasicShapes;
    (function (BasicShapes) {
        var Circle = (function (_super) {
            __extends(Circle, _super);
            function Circle() {
                _super.call(this);
                this.setType(CanvasBag.ShapeType.CIRCLE);
            }
            Circle.prototype.setProperties = function (properties) {
                this.setBaseProperties(properties);
            };
            ;
            Circle.prototype.getProperties = function () {
                return this.getBaseProperties();
            };
            ;
            Circle.prototype.contains = function (point) {
                var properties = this.getBaseProperties();
                var renderOffset = this.getRenderOffset();
                return Math.pow(point.x - (properties.position.x + renderOffset.x), 2) +
                    Math.pow(point.y - (properties.position.y + renderOffset.y), 2) < Math.pow(properties.radius, 2);
            };
            ;
            Circle.prototype.move = function (offsetX, offsetY) {
                var properties = this.getBaseProperties();
                properties.position.x += offsetX;
                properties.position.y += offsetY;
            };
            ;
            return Circle;
        })(CanvasBag.BasicShapePrototype);
        BasicShapes.Circle = Circle;
    })(BasicShapes = CanvasBag.BasicShapes || (CanvasBag.BasicShapes = {}));
})(CanvasBag || (CanvasBag = {}));
var CanvasBag;
(function (CanvasBag) {
    var PolygonUtils = (function () {
        function PolygonUtils() {
        }
        PolygonUtils.pointInPolygon = function (pt, poly) {
            for (var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
                ((poly[i].y <= pt.y && pt.y < poly[j].y) || (poly[j].y <= pt.y && pt.y < poly[i].y))
                    && (pt.x < (poly[j].x - poly[i].x) * (pt.y - poly[i].y) / (poly[j].y - poly[i].y) + poly[i].x)
                    && (c = !c);
            return c;
        };
        PolygonUtils.addOffsetToPoints = function (points, offset) {
            for (var i = 0; i < points.length; i++) {
                points[i].x += offset.x;
                points[i].y += offset.y;
            }
            return points;
        };
        return PolygonUtils;
    })();
    CanvasBag.PolygonUtils = PolygonUtils;
})(CanvasBag || (CanvasBag = {}));
///<reference path="./ShapeType" />
///<reference path="./BasicShapePrototype" />
///<reference path="../render/Node.ts" />
///<reference path="../utils/PolygonUtils" />
var CanvasBag;
(function (CanvasBag) {
    var BasicShapes;
    (function (BasicShapes) {
        var Custom = (function (_super) {
            __extends(Custom, _super);
            function Custom() {
                _super.call(this);
                this.setType(CanvasBag.ShapeType.CUSTOM_SHAPE);
            }
            Custom.prototype.setProperties = function (properties) {
                this.setBaseProperties(properties);
            };
            ;
            Custom.prototype.getProperties = function () {
                return this.getBaseProperties();
            };
            ;
            Custom.prototype.contains = function (point) {
                return CanvasBag.PolygonUtils.pointInPolygon(point, CanvasBag.PolygonUtils.addOffsetToPoints(this.getBaseProperties().points, this.getRenderOffset()));
            };
            ;
            Custom.prototype.move = function (offsetX, offsetY) {
                var properties = this.getBaseProperties();
                for (var i = 0; i < properties.points.length; i++) {
                    properties.points[i].x += offsetX;
                    properties.points[i].y += offsetY;
                }
            };
            ;
            return Custom;
        })(CanvasBag.BasicShapePrototype);
        BasicShapes.Custom = Custom;
    })(BasicShapes = CanvasBag.BasicShapes || (CanvasBag.BasicShapes = {}));
})(CanvasBag || (CanvasBag = {}));
///<reference path="./ShapeType" />
///<reference path="./BasicShapePrototype" />
///<reference path="../render/Node.ts" />
var CanvasBag;
(function (CanvasBag) {
    var BasicShapes;
    (function (BasicShapes) {
        var Rectangle = (function (_super) {
            __extends(Rectangle, _super);
            function Rectangle() {
                _super.call(this);
                this.setType(CanvasBag.ShapeType.RECTANGLE);
            }
            Rectangle.prototype.setProperties = function (properties) {
                this.setBaseProperties(properties);
            };
            ;
            Rectangle.prototype.getProperties = function () {
                return this.getBaseProperties();
            };
            ;
            Rectangle.prototype.contains = function (point) {
                var properties = this.getBaseProperties();
                var renderOffset = this.getRenderOffset();
                var centerX = properties.position.x + renderOffset.x;
                var centerY = properties.position.y + renderOffset.y;
                var offsetX = properties.width / 2;
                var offsetY = properties.height / 2;
                return (centerX - offsetX <= point.x && centerX + offsetX >= point.x && centerY + offsetY >= point.y && centerY - offsetY <= point.y);
            };
            ;
            Rectangle.prototype.move = function (offsetX, offsetY) {
                var properties = this.getBaseProperties();
                properties.position.x += offsetX;
                properties.position.y += offsetY;
            };
            ;
            return Rectangle;
        })(CanvasBag.BasicShapePrototype);
        BasicShapes.Rectangle = Rectangle;
    })(BasicShapes = CanvasBag.BasicShapes || (CanvasBag.BasicShapes = {}));
})(CanvasBag || (CanvasBag = {}));
///<reference path="./ShapeType" />
///<reference path="./BasicShapePrototype" />
///<reference path="../render/Node.ts" />
///<reference path="../utils/PolygonUtils" />
var CanvasBag;
(function (CanvasBag) {
    var BasicShapes;
    (function (BasicShapes) {
        var Triangle = (function (_super) {
            __extends(Triangle, _super);
            function Triangle() {
                _super.call(this);
                this.setType(CanvasBag.ShapeType.TRIANGLE);
            }
            Triangle.prototype.setProperties = function (properties) {
                this.setBaseProperties(properties);
            };
            ;
            Triangle.prototype.getProperties = function () {
                return this.getBaseProperties();
            };
            ;
            Triangle.prototype.contains = function (point) {
                return CanvasBag.PolygonUtils.pointInPolygon(point, CanvasBag.PolygonUtils.addOffsetToPoints(this.getProperties().points, this.getRenderOffset()));
            };
            ;
            Triangle.prototype.move = function (offsetX, offsetY) {
                var properties = this.getProperties();
                for (var i = 0; i < properties.points.length; i++) {
                    properties.points[i].x += offsetX;
                    properties.points[i].y += offsetY;
                }
            };
            ;
            return Triangle;
        })(CanvasBag.BasicShapePrototype);
        BasicShapes.Triangle = Triangle;
    })(BasicShapes = CanvasBag.BasicShapes || (CanvasBag.BasicShapes = {}));
})(CanvasBag || (CanvasBag = {}));
var CanvasBag;
(function (CanvasBag) {
    var SceneType = (function () {
        function SceneType() {
        }
        SceneType.BASIC = "SCENE_BASIC";
        return SceneType;
    })();
    CanvasBag.SceneType = SceneType;
})(CanvasBag || (CanvasBag = {}));
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
///<reference path="../render/Point" />
///<reference path="../containers/ContainerType" />
///<reference path="../utils/ObjectUtils" />
///<reference path="../utils/Guid" />
///<reference path="../sprites/Image" />
///<reference path="../sprites/Text" />
///<reference path="../shapes/ShapeType" />
///<reference path="../shapes/Circle" />
///<reference path="../shapes/Custom" />
///<reference path="../shapes/Rectangle" />
///<reference path="../shapes/Triangle" />
///<reference path="./SceneType" />
///<reference path="../render/Node" />
///<reference path="../containers/BasicContainerPrototype.ts" />
///<reference path="../shapes/BasicShapePrototype.ts" />
///<reference path="../connections/BasicConnectionPrototype.ts" />
var CanvasBag;
(function (CanvasBag) {
    var Scene;
    (function (Scene) {
        var Basic = (function () {
            function Basic() {
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
                this.invalidateScene = function () {
                    _this.valid = false;
                };
                this.validateScene = function () {
                    _this.valid = true;
                };
                this.isValid = function () {
                    return _this.valid;
                };
                this.addNode = function (node) {
                    _this.nodes.push(node);
                    _this.invalidateScene();
                    return _this;
                };
                this.addShape = function (shape) {
                    _this.addNode(shape);
                    return _this;
                };
                this.addContainer = function (container) {
                    _this.addNode(container);
                    return _this;
                };
                this.addSprite = function (sprite) {
                    _this.addNode(sprite);
                    return _this;
                };
                this.addConnection = function (connection) {
                    _this.connections.push(connection);
                    _this.invalidateScene();
                    return _this;
                };
                this.removeConnectionById = function (connectionId) {
                    for (var i = 0; i < _this.connections.length; i++) {
                        if (_this.connections[i].getId() == connectionId) {
                            _this.connections.splice(i, 1);
                            break;
                        }
                    }
                };
                this.getConnectionById = function (connectionId) {
                    for (var i = 0; i < _this.connections.length; i++) {
                        if (_this.connections[i].getId() == connectionId) {
                            return _this.connections[i];
                        }
                    }
                };
                this.getAllNodes = function () {
                    return _this.nodes;
                };
                this.getAllConnections = function () {
                    return _this.connections;
                };
                this.getAllSprites = function () {
                    return _this.sprites;
                };
                this.getNodeById = function (nodeId) {
                    for (var i = 0; i < _this.nodes.length; i++) {
                        var candidate = _this.tryToFindNodeInSceneById(nodeId, _this.nodes[i]);
                        if (candidate != null) {
                            return candidate;
                        }
                    }
                };
                this.toJSON = function () {
                    return {
                        id: _this.id,
                        type: _this.type,
                        nodes: _this.nodes,
                        connections: _this.connections,
                        sprites: _this.sprites
                    };
                };
                this.fromJSON = function (json) {
                    if (CanvasBag.ObjectUtils.hasDefinedProperty(json, 'type')) {
                        switch (json.type) {
                            case CanvasBag.SceneType.BASIC:
                                if (CanvasBag.ObjectUtils.hasDefinedProperty(json, 'nodes')) {
                                    json.nodes.forEach(function (node) {
                                        if (!CanvasBag.ObjectUtils.hasDefinedProperty(node, 'type')) {
                                            _this.printSceneErrMessage("Type of node is not defined");
                                            throw "NodeType error";
                                        }
                                        var imported = null;
                                        switch (node.type) {
                                            case CanvasBag.ShapeType.RECTANGLE:
                                                imported = new CanvasBag.BasicShapes.Rectangle();
                                                imported.fromJSON(node);
                                                break;
                                            case CanvasBag.ShapeType.CIRCLE:
                                                imported = new CanvasBag.BasicShapes.Circle();
                                                imported.fromJSON(node);
                                                break;
                                            case CanvasBag.ShapeType.TRIANGLE:
                                                imported = new CanvasBag.BasicShapes.Triangle();
                                                imported.fromJSON(node);
                                                break;
                                            case CanvasBag.ShapeType.CUSTOM_SHAPE:
                                                imported = new CanvasBag.BasicShapes.Custom();
                                                imported.fromJSON(node);
                                                break;
                                            case CanvasBag.ContainerType.BASIC:
                                                imported = new CanvasBag.BasicContainer.SimpleContainer();
                                                imported.fromJSON(node);
                                                break;
                                            default:
                                                _this.printSceneErrMessage("Unknown shape type.");
                                                throw "NodeType error";
                                        }
                                        _this.nodes.push(imported);
                                    });
                                }
                                else {
                                    _this.printSceneErrMessage("Please check if scene type is set correctly.");
                                }
                                _this.sprites = json.sprites;
                                _this.connections = json.connections;
                                break;
                            default:
                                _this.printSceneErrMessage("Unknown type of scene. Cannot import JSON object.");
                        }
                    }
                    else {
                        _this.printSceneErrMessage("Please check if scene type is set correctly.");
                    }
                };
                this.tryToFindNodeInSceneById = function (nodeId, investigatedNode) {
                    if (investigatedNode.id != nodeId) {
                        if (investigatedNode.nodes != undefined && investigatedNode.nodes != null) {
                            investigatedNode.forEach(function (node) {
                                var candidate = _this.tryToFindNodeInSceneById(nodeId, node);
                                if (candidate != null) {
                                    return candidate;
                                }
                            });
                        }
                    }
                    return null;
                };
                this.printSceneErrMessage = function (msg) {
                    console.log("Defined JSON of scene is not valid. " + msg);
                };
                this.id = CanvasBag.Guid.generate();
                this.type = CanvasBag.SceneType.BASIC;
                this.nodes = [];
                this.connections = [];
                this.sprites = [];
                this.valid = false;
            }
            return Basic;
        })();
        Scene.Basic = Basic;
    })(Scene = CanvasBag.Scene || (CanvasBag.Scene = {}));
})(CanvasBag || (CanvasBag = {}));
///<reference path="BasicContainerPrototype.ts" />
///<reference path="ContainerType.ts" />
var CanvasBag;
(function (CanvasBag) {
    var BasicContainer;
    (function (BasicContainer) {
        var SimpleContainer = (function (_super) {
            __extends(SimpleContainer, _super);
            function SimpleContainer() {
                _super.call(this);
                this.setType(CanvasBag.ContainerType.BASIC);
            }
            SimpleContainer.prototype.getProperties = function () {
                return this.getBaseProperties();
            };
            SimpleContainer.prototype.setProperties = function (properties) {
                this.setBaseProperties(properties);
            };
            SimpleContainer.prototype.contains = function (point) {
                return this.detectInnerElement(point) !== null;
            };
            SimpleContainer.prototype.move = function (offsetX, offsetY) {
                this.getBaseProperties().position.x += offsetX;
                this.getBaseProperties().position.y += offsetY;
            };
            return SimpleContainer;
        })(CanvasBag.BasicContainerPrototype);
        BasicContainer.SimpleContainer = SimpleContainer;
    })(BasicContainer = CanvasBag.BasicContainer || (CanvasBag.BasicContainer = {}));
})(CanvasBag || (CanvasBag = {}));
///<reference path="./render/RenderedPoint.ts" />
///<reference path="./containers/ContainerType" />
///<reference path="./sprites/SpriteType" />
///<reference path="./shapes/ShapeType.ts" />
///<reference path="./connections/ConnectionType" />
///<reference path="./connections/SimpleConnection" />
///<reference path="sprites/Text.ts" />
///<reference path="scene/Scene.ts" />
///<reference path="containers/SimpleContainer.ts" />
var CanvasBag;
(function (CanvasBag) {
    var Render = (function () {
        function Render() {
            var _this = this;
            this.RENDERING_INTERVAL = 40;
            this.newConnection = null;
            this.setRenderingInterval = function (interval) {
                if (interval > 0) {
                    _this.RENDERING_INTERVAL = interval;
                }
                else {
                    console.log("Invalid RENDERING_INTERVAL has been set for canvas render.");
                }
            };
            this.setCanvas = function (canvas) {
                _this.canvas = canvas;
                _this.context = canvas.getContext('2d');
                _this.initCanvasBehaviour();
            };
            this.render = function () {
                if (!_this.scene.isValid()) {
                    _this.invalidateCanvas();
                }
                if (!_this.canvasValid) {
                    _this.clearCanvas();
                    if (_this.scene == null) {
                        console.log("No scene has been added yet to render.");
                        return;
                    }
                    var nodes = _this.scene.getAllNodes();
                    nodes.forEach(function (node) {
                        _this.renderNode(node);
                    });
                    var connections = _this.scene.getAllConnections();
                    connections.forEach(function (connection) {
                        _this.renderConnection(connection);
                    });
                    _this.validateCanvas();
                }
            };
            this.addScene = function (pScene) {
                _this.scene = pScene;
            };
            this.finalizeRender = function (properties) {
                if (properties.backgroundColor !== undefined && properties.backgroundColor !== null) {
                    _this.context.fillStyle = properties.backgroundColor;
                    _this.context.fill();
                }
                if (properties.borderWidth !== undefined && properties.borderColor !== null) {
                    _this.context.lineWidth = properties.borderWidth;
                    _this.context.strokeStyle = properties.borderColor;
                    _this.context.stroke();
                }
            };
            this.renderText = function (text) {
                var properties = text.getProperties();
                var renderOffset = text.getRenderOffset();
                _this.context.font = properties.fontSize + " " + properties.fontFamily;
                text.getProperties().width = _this.context.measureText(properties.content).width;
                text.getProperties().height = parseInt(properties.fontSize);
                properties = text.getProperties();
                _this.context.fillText(properties.content, properties.position.x - (properties.width / 2) + renderOffset.x, properties.position.y - (properties.height / 2) + renderOffset.y);
            };
            this.renderImage = function (image) {
                var properties = image.getProperties();
                var renderOffset = image.getRenderOffset();
                var halfWidth = properties.width / 2;
                var halfHeight = properties.height / 2;
                _this.context.beginPath();
                _this.context.rect(Math.floor(properties.position.x + renderOffset.x - halfWidth) + 0.5, Math.floor(properties.position.y + renderOffset.y - halfHeight) + 0.5, properties.width, properties.height);
                var _context = _this.context;
                if (properties.imageData !== undefined && properties.imageData !== null) {
                    var img = new Image();
                    img.onload = function () {
                        _context.drawImage(this, properties.position.x + renderOffset.x - halfWidth, properties.position.y + renderOffset.y - halfHeight, properties.width, properties.height);
                    };
                    img.src = "data:image/gif;base64," + properties.imageData;
                }
                _this.finalizeRender(properties);
            };
            this.renderRectangle = function (shape) {
                var properties = shape.getProperties();
                var renderOffset = shape.getRenderOffset();
                var halfWidth = properties.width / 2;
                var halfHeight = properties.height / 2;
                _this.context.beginPath();
                _this.context.rect(Math.floor(properties.position.x + renderOffset.x - halfWidth) + 0.5, Math.floor(properties.position.y + renderOffset.y - halfHeight) + 0.5, properties.width, properties.height);
                var _context = _this.context;
                if (properties.base64Background !== undefined && properties.base64Background !== null) {
                    var img = new Image();
                    img.onload = function () {
                        _context.drawImage(this, properties.position.x + renderOffset.x - halfWidth, properties.position.y + renderOffset.y - halfHeight, properties.width, properties.height);
                    };
                    img.src = "data:image/gif;base64," + properties.base64Background;
                }
                _this.finalizeRender(properties);
            };
            this.renderCircle = function (shape) {
                var properties = shape.getProperties();
                var renderOffset = shape.getRenderOffset();
                _this.context.beginPath();
                _this.context.arc(properties.position.x + renderOffset.x, properties.position.y + renderOffset.y, properties.radius, 0, 2 * Math.PI, false);
                _this.finalizeRender(properties);
            };
            this.renderTriangle = function (shape) {
                if (shape.getProperties().points.length != 3) {
                    console.log("Shape is not a triangle. Cannot render.", shape);
                }
                _this.renderCustomShape(shape);
            };
            this.renderCustomShape = function (shape) {
                var properties = shape.getProperties();
                var renderOffset = shape.getRenderOffset();
                var first = null;
                properties.points.forEach(function (point, index) {
                    if (index == 0) {
                        _this.context.beginPath();
                        _this.context.moveTo(point.x + renderOffset.x, point.y + renderOffset.y);
                        first = { x: point.x + renderOffset.x, y: point.y + renderOffset.y };
                    }
                    else {
                        _this.context.lineTo(point.x + renderOffset.x, point.y + renderOffset.y);
                    }
                });
                if (first != null) {
                    _this.context.lineTo(first.x + renderOffset.x, first.y + renderOffset.y);
                }
                _this.finalizeRender(properties);
            };
            this.renderContainerBasic = function (container) {
                var containerCenter = container.getProperties().position;
                var nodes = container.getElements();
                for (var i = 0; i < nodes.length; i++) {
                    nodes[i].setRenderOffset(containerCenter);
                    _this.renderNode(nodes[i]);
                }
            };
            this.renderSimpleConnection = function (connection) {
                var connectionBindings = connection.getBindings();
                var entryShape = connectionBindings.entry;
                var entryShapeRenderOffset = entryShape.getRenderOffset();
                var startCoord = {
                    x: entryShape.getProperties().position.x + entryShapeRenderOffset.x,
                    y: entryShape.getProperties().position.y + entryShapeRenderOffset.y
                };
                var endShape = connectionBindings.end;
                var endCoord;
                if (connectionBindings.end != null) {
                    var endShapeRenderOffset = endShape.getRenderOffset();
                    endCoord = {
                        x: connectionBindings.end.getProperties().position.x + endShapeRenderOffset.x,
                        y: connectionBindings.end.getProperties().position.y + endShapeRenderOffset.y
                    };
                }
                else {
                    endCoord = connection.getTemporaryEnd();
                }
                _this.context.beginPath();
                _this.context.moveTo(startCoord.x, startCoord.y);
                _this.context.lineTo(endCoord.x, endCoord.y);
                _this.context.stroke();
            };
            this.renderNode = function (node) {
                switch (node.getType()) {
                    case CanvasBag.ShapeType.RECTANGLE:
                        _this.renderRectangle(node);
                        break;
                    case CanvasBag.ShapeType.CIRCLE:
                        _this.renderCircle(node);
                        break;
                    case CanvasBag.ShapeType.TRIANGLE:
                        _this.renderTriangle(node);
                        break;
                    case CanvasBag.ShapeType.CUSTOM_SHAPE:
                        _this.renderCustomShape(node);
                        break;
                    case CanvasBag.ContainerType.BASIC:
                        _this.renderContainerBasic(node);
                        break;
                    case CanvasBag.SpriteType.IMAGE:
                        _this.renderImage(node);
                        break;
                    case CanvasBag.SpriteType.TEXT:
                        _this.renderText(node);
                        break;
                    default:
                        console.log("Unknown shape " + node.getType() + ". Cannot render.");
                        break;
                }
            };
            this.renderConnection = function (connection) {
                switch (connection.getType()) {
                    case CanvasBag.ConnectionType.SIMPLE:
                        _this.renderSimpleConnection(connection);
                        break;
                    default:
                        console.log("Unknown connection " + connection.getType() + ". Cannot render.");
                        break;
                }
            };
            this.validateCanvas = function () {
                _this.canvasValid = true;
                if (_this.scene != null) {
                    _this.scene.validateScene();
                }
                else {
                    console.log("No scene has been added to render.");
                }
            };
            this.invalidateCanvas = function () {
                _this.canvasValid = false;
            };
            this.clearCanvas = function () {
                _this.context.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
            };
            this.detectElement = function (point) {
                var nodes = _this.scene.getAllNodes();
                var sprites = _this.scene.getAllSprites();
                // TODO should we search in sprites too? Should be sprites draggable?
                var elements = nodes.concat(sprites);
                var highestIndex = -1;
                for (var i = 0; i < elements.length; i++) {
                    if (elements[i].contains(point)) {
                        highestIndex = i;
                    }
                }
                if (highestIndex !== -1) {
                    return elements[highestIndex];
                }
                return null;
            };
            this.isBasicContainer = function (element) {
                return element !== null && element.getType() == CanvasBag.ContainerType.BASIC;
            };
            this.initCanvasBehaviour = function () {
                // Prevent selection of text in canvas
                _this.canvas.addEventListener('selectstart', function (e) {
                    e.preventDefault();
                    return false;
                }, false);
                _this.canvas.addEventListener('click', function (e) {
                    if (!_this.isDragging && !_this.isJoining) {
                        var mousePosition = _this.getMousePosition(e);
                        var shape = _this.detectElement(mousePosition);
                        if (shape != null) {
                            shape.click();
                        }
                    }
                });
                _this.canvas.addEventListener('mousedown', function (e) {
                    var mousePosition = _this.getMousePosition(e);
                    var element = _this.detectElement(mousePosition);
                    var hotElement = null;
                    if (element == null) {
                        return;
                    }
                    if (_this.isBasicContainer(element)) {
                        hotElement = element.detectInnerElement(mousePosition);
                    }
                    else {
                        hotElement = element;
                    }
                    if (hotElement.isDraggable()) {
                        _this.draggingElement = element;
                        _this.draggingMousePositionPrevious = mousePosition;
                    }
                    else if (hotElement.isJoinAble()) {
                        _this.joiningElementStart = hotElement;
                        _this.newConnection = new CanvasBag.Connections.SimpleConnection();
                        _this.newConnection.setBindings({ entry: _this.joiningElementStart, end: null });
                        _this.newConnection.setTemporaryEnd(mousePosition);
                        _this.joiningMousePosition = mousePosition;
                        _this.scene.addConnection(_this.newConnection);
                    }
                });
                _this.canvas.addEventListener('mousemove', function (e) {
                    var mousePosition = _this.getMousePosition(e);
                    if (_this.draggingElement !== null) {
                        _this.isDragging = true;
                        var offsetX = mousePosition.x - _this.draggingMousePositionPrevious.x;
                        var offsetY = mousePosition.y - _this.draggingMousePositionPrevious.y;
                        _this.draggingMousePositionPrevious = mousePosition;
                        _this.draggingElement.move(offsetX, offsetY);
                        _this.invalidateCanvas();
                    }
                    else if (_this.joiningElementStart != null) {
                        _this.isJoining = true;
                        _this.newConnection.setTemporaryEnd(mousePosition);
                        _this.invalidateCanvas();
                    }
                });
                _this.canvas.addEventListener('mouseup', function (e) {
                    if (_this.draggingElement !== null) {
                        // To prevent click listener when ending dragging
                        setTimeout(function () {
                            _this.isDragging = false;
                        }, 0);
                        _this.draggingElement = null;
                        _this.draggingMousePositionPrevious = null;
                        _this.invalidateCanvas();
                    }
                    else if (_this.joiningElementStart !== null) {
                        var mousePosition = _this.getMousePosition(e);
                        var joiningShapeEnd = _this.detectElement(mousePosition);
                        if (_this.isBasicContainer(joiningShapeEnd)) {
                            joiningShapeEnd = joiningShapeEnd.detectInnerElement(mousePosition);
                        }
                        if (joiningShapeEnd !== null && joiningShapeEnd.isJoinAble()) {
                            if (_this.newConnection != null) {
                                _this.newConnection.setBindings({ entry: _this.joiningElementStart, end: joiningShapeEnd });
                                // To prevent click listener when ending dragging
                                setTimeout(function () {
                                    _this.isJoining = false;
                                }, 0);
                                _this.joiningElementStart = null;
                            }
                        }
                        else {
                            _this.scene.removeConnectionById(_this.newConnection.getId());
                            _this.joiningElementStart = null;
                            _this.newConnection = null;
                        }
                        _this.invalidateCanvas();
                    }
                });
            };
            this.getMousePosition = function (e) {
                var element = _this.canvas;
                var offsetX = 0;
                var offsetY = 0;
                var mx, my;
                // Compute the total offset
                if (element.offsetParent !== undefined) {
                    do {
                        offsetX += element.offsetLeft;
                        offsetY += element.offsetTop;
                    } while ((element == element.offsetParent));
                }
                mx = e.pageX - offsetX;
                my = e.pageY - offsetY;
                // We return a simple javascript object (a hash) with x and y defined
                return { x: mx, y: my };
            };
            window.setInterval(this.render, this.RENDERING_INTERVAL);
            this.context = null;
            this.canvas = null;
            this.scene = null;
            this.canvasValid = false;
            this.isDragging = false;
            this.draggingElement = null;
            this.draggingMousePositionPrevious = null;
            this.isJoining = false;
            this.joiningElementStart = null;
            this.joiningMousePosition = null;
            this.newConnection = null;
        }
        return Render;
    })();
    CanvasBag.Render = Render;
})(CanvasBag || (CanvasBag = {}));

//# sourceMappingURL=bundle.js.map
