///<reference path="../render/Point" />
///<reference path="../primitives/containers/ContainerType" />
///<reference path="../utils/ObjectUtils" />
///<reference path="../utils/Guid" />
///<reference path="../primitives/sprites/Image" />
///<reference path="../primitives/sprites/Text" />
///<reference path="../primitives/shapes/ShapeType" />
///<reference path="../primitives/shapes/Circle" />
///<reference path="../primitives/shapes/Custom" />
///<reference path="../primitives/shapes/Rectangle" />
///<reference path="../primitives/shapes/Triangle" />
///<reference path="./SceneType" />
///<reference path="../render/Node" />
///<reference path="../primitives/containers/SimpleContainer.ts" />
///<reference path="../primitives/shapes/BasicShapePrototype.ts" />
///<reference path="../primitives/connections/BasicConnectionPrototype.ts" />
var CanvasBag;
(function (CanvasBag) {
    var Scene;
    (function (Scene) {
        var BasicScenePrototype = (function () {
            function BasicScenePrototype() {
                var _this = this;
                this.getId = function () {
                    return _this.id;
                };
                this.getType = function () {
                    return _this.type;
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
                this.nodes = [];
                this.connections = [];
                this.sprites = [];
                this.valid = false;
            }
            return BasicScenePrototype;
        })();
        Scene.BasicScenePrototype = BasicScenePrototype;
    })(Scene = CanvasBag.Scene || (CanvasBag.Scene = {}));
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=BasicScenePrototype.js.map