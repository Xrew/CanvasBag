///<reference path="BasicContainerPrototype.ts" />
///<reference path="ContainerType.ts" />
///<reference path="../shapes/Circle.ts"/>
///<reference path="../shapes/Rectangle.ts"/>
///<reference path="../shapes/Triangle.ts"/>
///<reference path="../shapes/Custom.ts"/>



module CanvasBag {
    export module BasicContainer {
        export interface SimpleContainerProperties extends BasicContainerProperties {
        }

        export class SimpleContainer extends BasicContainerPrototype {
            constructor() {
                super();
                this.type = ContainerType.BASIC;
            }

            getProperties():SimpleContainerProperties {
                return <SimpleContainerProperties>this.properties;
            }

            setProperties(properties:SimpleContainerProperties) {
                this.properties = properties;
            }

            contains(point:Point):boolean {
                return this.detectInnerElement(point) !== null;
            }

            move(offsetX:number, offsetY:number) {
                this.properties.position.x += offsetX;
                this.properties.position.y += offsetY;
            }

            toJSON() {
                return {
                    id: this.id,
                    type: this.type,
                    elements: this.elements,
                    properties: this.properties
                };
            };

            fromJSON(json) {
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
                            imported = new BasicContainer.SimpleContainer();
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
        }
    }
}