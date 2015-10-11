///<reference path="../render/Point" />
///<reference path="../containers/ContainerType" />
///<reference path="../containers/Container" />
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
                };
                this.addShape = function (shape) {
                    _this.addNode(shape);
                };
                this.addContainer = function (container) {
                    _this.addNode(container);
                };
                this.addSprite = function (sprite) {
                    _this.addNode(sprite);
                };
                this.addConnection = function (connection) {
                    _this.connections.push(connection);
                    _this.invalidateScene();
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
                            case 0 /* BASIC */:
                                if (CanvasBag.ObjectUtils.hasDefinedProperty(json, 'nodes')) {
                                    json.nodes.forEach(function (node) {
                                        if (!CanvasBag.ObjectUtils.hasDefinedProperty(node, 'type')) {
                                            _this.printSceneErrMessage("Type of node is not defined");
                                            throw "NodeType error";
                                        }
                                        var imported = null;
                                        switch (node.type) {
                                            case 0 /* RECTANGLE */:
                                                imported = new CanvasBag.BasicShapes.Rectangle();
                                                imported.fromJSON(node);
                                                break;
                                            case 2 /* CIRCLE */:
                                                imported = new CanvasBag.BasicShapes.Circle();
                                                imported.fromJSON(node);
                                                break;
                                            case 1 /* TRIANGLE */:
                                                imported = new CanvasBag.BasicShapes.Triangle();
                                                imported.fromJSON(node);
                                                break;
                                            case 3 /* CUSTOM_SHAPE */:
                                                imported = new CanvasBag.BasicShapes.Custom();
                                                imported.fromJSON(node);
                                                break;
                                            case 0 /* BASIC */:
                                                imported = new CanvasBag.Container.Basic();
                                                imported.fromJSON(node);
                                                break;
                                            default:
                                                _this.printSceneErrMessage("Unknown shape type.");
                                                throw "NodeType error";
                                        }
                                        _this.nodes.push(imported);
                                    });
                                } else {
                                    _this.printSceneErrMessage("Please check if scene type is set correctly.");
                                }
                                _this.sprites = json.sprites;
                                _this.connections = json.connections;
                                break;
                            default:
                                _this.printSceneErrMessage("Unknown type of scene. Cannot import JSON object.");
                        }
                    } else {
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
                this.type = 0 /* BASIC */;
                this.nodes = [];
                this.connections = [];
                this.sprites = [];
                this.valid = false;
            }
            return Basic;
        })();
        Scene.Basic = Basic;
    })(Scene || (Scene = {}));
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=Scene.js.map
