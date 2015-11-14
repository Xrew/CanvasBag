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
            protected  id:string;
            protected properties:BasicContainerProperties;
            protected type:ContainerType;
            protected elements:Array<Node>;

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
            public abstract fromJSON(json:any);
            public abstract toJSON():any;

            public  getType = ():ContainerType=> {
                return this.type;
            };

            public  getId = ():string => {
                return this.id;
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

            protected printWarningBasicContainer = (msg:string) => {
                console.log("WARNING: " + " should be defined. Object is loaded from JSON, be careful.")
            };

            protected printErrorBasicContainer = (msg:string) => {
                console.log("ERROR: " + " must be defined. Object is loaded from JSON.")
            };
        }
}