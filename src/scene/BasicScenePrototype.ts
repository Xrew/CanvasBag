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

module CanvasBag {
    export module Scene {
        export interface BasicSceneProperties {
        }

        export class BasicScenePrototype {
            protected id:string;
            protected properties: BasicSceneProperties;
            protected type:SceneType;
            protected nodes:Array<CanvasBag.Node>;
            protected connections:Array<BasicConnectionPrototype>;
            protected sprites:Array<BasicSpritePrototype>;
            protected valid:boolean;

            constructor() {
                this.id = Guid.generate();
                this.nodes = [];
                this.connections = [];
                this.sprites = [];
                this.valid = false;
            }


            public  getId = ():string => {
                return this.id;
            };

            public getType = ():SceneType => {
                return this.type;
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

            private addNode = (node: CanvasBag.Node) => {
                this.nodes.push(node);
                this.invalidateScene();
                return this;
            };

            public addShape = (shape: BasicShapePrototype) => {
                this.addNode((<CanvasBag.Node>shape));
                return this;
            };

            public addContainer = (container: BasicContainerPrototype) => {
                this.addNode(<CanvasBag.Node>container);
                return this;
            };

            public addSprite = (sprite: BasicSpritePrototype) => {
                this.addNode(sprite);
                return this;
            };

            public addConnection = (connection: BasicConnectionPrototype) => {
                this.connections.push(connection);
                this.invalidateScene();
                return this;
            };

            public removeConnectionById = (connectionId: string) => {
                for (var i = 0; i < this.connections.length; i++) {
                    if (this.connections[i].getId() == connectionId) {
                        this.connections.splice(i, 1);
                        break;
                    }
                }
            };

            public  getConnectionById = (connectionId: string):BasicConnectionPrototype => {
                for (var i = 0; i < this.connections.length; i++) {
                    if (this.connections[i].getId() == connectionId) {
                        return this.connections[i];
                    }
                }
            };

            public getAllNodes = ():Array<CanvasBag.Node>=> {
                return this.nodes;
            };

            public getAllConnections = () : Array<BasicConnectionPrototype>=> {
                return this.connections;
            };

            public  getAllSprites = () : Array<BasicSpritePrototype>=> {
                return this.sprites;
            };

            public getNodeById = (nodeId: string) => {
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
                                            imported = new BasicContainer.SimpleContainer();
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
                        investigatedNode.forEach((node) => {
                            var candidate = this.tryToFindNodeInSceneById(nodeId, node);
                            if (candidate != null) {
                                return candidate;
                            }
                        })
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