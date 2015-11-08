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


module CanvasBag {
    export module Container {
        export interface BasicContainerProperties {
            name: string;
            position: Point;
        }

        export class Basic {
            private id;
            private properties:BasicContainerProperties;
            private type:ContainerType;
            private elements: Array<Node>;

            constructor() {
                this.id = Guid.generate();
                this.type = ContainerType.BASIC;
                this.elements = [];
                this.properties = null
            }

            public  getType = () => {
                return this.type;
            };

            public  getId = () => {
                return this.id;
            };

            public setProperties = (properties:BasicContainerProperties) => {
                this.properties = properties;
            };

            public getProperties = ():BasicContainerProperties => {
                return this.properties;
            };

            public contains = (point:Point):boolean => {
                return this.detectInnerElement(point) !== null;
            };

            private detectInnerElement = (point:Point)  => {
                for (var i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].contains(point)) {
                        return this.elements[i];
                    }
                }
                return null;
            };

            public move = (offsetX:number, offsetY:number) => {
                this.properties.position.x += offsetX;
                this.properties.position.y += offsetY;
            };

            public addElement = (element) => {
                this.elements.push(element);
                return this;
            };

            public getElements = () => {
                return this.elements;
            };

            public toJSON = () => {
                return {
                    id: this.id,
                    type: this.type,
                    elements: this.elements,
                    properties: this.properties
                };
            };

            public fromJSON = (json) => {
                if (!ObjectUtils.hasDefinedProperty(json, 'id')) {
                    json.id = Guid.generate();
                    this.printWarningBasicContainer("ID");
                }
                this.id = json.id;
                this.type = json.type;

                if (!ObjectUtils.hasDefinedProperty(json, 'elements')) {
                    json.elements = [];
                    this.printWarningBasicContainer("elements");
                }

                json.elements.forEach((element) => {
                    if (!ObjectUtils.hasDefinedProperty(element, 'type')) {
                        this.printErrorBasicContainer("Type of node is not defined");
                        throw "NodeType error"
                    }
                    var imported = null;
                    switch (element.type) {
                        case ShapeType.RECTANGLE:
                            imported = new BasicShapes.Rectangle();
                            break;
                        case ShapeType.CIRCLE:
                            imported = new BasicShapes.Circle();
                            break;
                        case ShapeType.TRIANGLE:
                            imported = new BasicShapes.Triangle();
                            break;
                        case ShapeType.CUSTOM_SHAPE:
                            imported = new BasicShapes.Custom();
                            break;
                        case ContainerType.BASIC:
                            imported = new Container.Basic();
                            break;
                        case SpriteType.IMAGE:
                            imported = new Sprites.Image();
                            break;
                        case SpriteType.TEXT:
                            imported = new Sprites.Text();
                            break;
                        default:
                            this.printErrorBasicContainer("Unknown shape type.");
                            throw "NodeType error";
                    }
                    imported.fromJSON(element);
                    this.elements.push(imported)
                });

                if (!ObjectUtils.hasDefinedProperty(json, 'properties')) {
                    json.properties = null;
                    this.printWarningBasicContainer("properties");
                }
                this.properties = json.properties;
                return this;
            };

            private printWarningBasicContainer = (msg:string) => {
                console.log("WARNING: " + " should be defined. Object is loaded from JSON, be careful.")
            };

            private printErrorBasicContainer = (msg:string) => {
                console.log("ERROR: " + " must be defined. Object is loaded from JSON.")
            };
        }
    }
}