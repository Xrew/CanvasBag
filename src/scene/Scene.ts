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

module CanvasBag {
    module Scene {
        export class Basic {
            private id;
            private type: SceneType;
            private nodes;
            private connections;
            private sprites;
            private valid:boolean;

            constructor() {
                this.id = Guid.generate();
                this.type = SceneType.BASIC;
                this.nodes = [];
                this.connections = [];
                this.sprites = [];
                this.valid = false;
            }


            public  getId = () => {
                return this.id;
            };

            public getType = () => {
                return this.type;
            };

            public setType = (type) => {
                this.type = type;
            };

            public invalidateScene = () => {
                this.valid = false;
            };

            public validateScene = () => {
                this.valid = true;
            };

            public isValid = ():boolean => {
                return this.valid;
            };

            private addNode = (node) => {
                this.nodes.push(node);
                this.invalidateScene();
            };

            public addShape = (shape) => {
                this.addNode(shape);
            };

            public addContainer = (container) => {
                this.addNode(container);
            };

            public addSprite = (sprite) => {
                this.addNode(sprite);
            };

            public addConnection = (connection) => {
                this.connections.push(connection);
                this.invalidateScene();
            };

            public removeConnectionById = (connectionId) => {
                for (var i = 0; i < this.connections.length; i++) {
                    if (this.connections[i].getId() == connectionId) {
                        this.connections.splice(i, 1);
                        break;
                    }
                }
            };

            public  getConnectionById = (connectionId) => {
                for (var i = 0; i < this.connections.length; i++) {
                    if (this.connections[i].getId() == connectionId) {
                        return this.connections[i];
                    }
                }
            };

            public getAllNodes = () => {
                return this.nodes;
            };

            public getAllConnections = () => {
                return this.connections;
            };

            public  getAllSprites = () => {
                return this.sprites;
            };

            public getNodeById = (nodeId) => {
                for (var i = 0; i < this.nodes.length; i++) {
                    var candidate = this.tryToFindNodeInSceneById(nodeId, this.nodes[i]);
                    if (candidate != null) {
                        return candidate;
                    }
                }
            };

            public toJSON = () => {
                return {
                    id: this.id,
                    type: this.type,
                    nodes: this.nodes,
                    connections: this.connections,
                    sprites: this.sprites
                };
            };

            public fromJSON = (json) => {
                if (ObjectUtils.hasDefinedProperty(json, 'type')) {
                    switch (json.type) {
                        case SceneType.BASIC:
                            if (ObjectUtils.hasDefinedProperty(json, 'nodes')) {
                                json.nodes.forEach((node) => {
                                    if (!ObjectUtils.hasDefinedProperty(node, 'type')) {
                                        this.printSceneErrMessage("Type of node is not defined");
                                        throw "NodeType error"
                                    }
                                    var imported = null;
                                    switch (node.type) {
                                        case ShapeType.RECTANGLE:
                                            imported = new BasicShapes.Rectangle();
                                            imported.fromJSON(node);
                                            break;
                                        case ShapeType.CIRCLE:
                                            imported = new BasicShapes.Circle();
                                            imported.fromJSON(node);
                                            break;
                                        case ShapeType.TRIANGLE:
                                            imported = new BasicShapes.Triangle();
                                            imported.fromJSON(node);
                                            break;
                                        case ShapeType.CUSTOM_SHAPE:
                                            imported = new BasicShapes.Custom();
                                            imported.fromJSON(node);
                                            break;
                                        case ContainerType.BASIC:
                                            imported = new Container.Basic();
                                            imported.fromJSON(node);
                                            break;
                                        default:
                                            this.printSceneErrMessage("Unknown shape type.");
                                            throw "NodeType error";
                                    }
                                    this.nodes.push(imported)
                                });
                            } else {
                                this.printSceneErrMessage("Please check if scene type is set correctly.")
                            }
                            this.sprites = json.sprites;
                            this.connections = json.connections;
                            break;
                        default:
                            this.printSceneErrMessage("Unknown type of scene. Cannot import JSON object.")
                    }
                } else {
                    this.printSceneErrMessage("Please check if scene type is set correctly.")
                }
            };

            private  tryToFindNodeInSceneById = (nodeId, investigatedNode) => {
                if (investigatedNode.id != nodeId) {
                    if (investigatedNode.nodes != undefined && investigatedNode.nodes != null) {
                        var candidate = this.tryToFindNodeInSceneById(nodeId);
                        if (candidate != null) {
                            return candidate;
                        }
                    }
                }

                return null;
            };

            private  printSceneErrMessage = (msg) => {
                console.log("Defined JSON of scene is not valid. " + msg)
            }
        }
    }
}