///<reference path="../render/Point" />
///<reference path="../utils/ObjectUtils" />
///<reference path="../utils/Guid" />
///<reference path="../sprites/Image" />
///<reference path="../sprites/Text" />
///<reference path="../shapes/ShapeType" />
///<reference path="ContainerType.ts" />
///<reference path="../render/Node.ts" />


module CanvasBag {
        export interface BasicContainerProperties {
            name: string;
            position: Point;
        }

        export abstract class BasicContainerPrototype implements Node {
            public  id:string;
            private properties:BasicContainerProperties;
            private type:ContainerType;
            private elements:Array<Node>;


            constructor() {
                this.id = Guid.generate();
                this.type = null;
                this.elements = [];
                this.properties = null
            }

            public abstract getProperties():BasicContainerProperties;
            public abstract setProperties(properties: BasicContainerProperties);
            public abstract contains(point: Point) : boolean;
            public abstract move(offsetX: number, offsetY: number);

            public setType(type:ContainerType) {
                this.type = type;
            }

            public  getType = ():ContainerType=> {
                return this.type;
            };

            public  getId = ():string => {
                return this.id;
            };

            public setBaseProperties = (properties:BasicContainerProperties) => {
                this.properties = properties;
            };

            public getBaseProperties = ():BasicContainerProperties => {
                return this.properties;
            };


            public detectInnerElement = (point:Point) : Node  => {
                for (var i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].contains(point)) {
                        return this.elements[i];
                    }
                }
                return null;
            };



            public addElement = (element:CanvasBag.Node) => {
                this.elements.push(element);
                return this;
            };

            public getElements = ():Array< CanvasBag.Node>=> {
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

            private printWarningBasicContainer = (msg:string) => {
                console.log("WARNING: " + " should be defined. Object is loaded from JSON, be careful.")
            };

            private printErrorBasicContainer = (msg:string) => {
                console.log("ERROR: " + " must be defined. Object is loaded from JSON.")
            };
        }
}