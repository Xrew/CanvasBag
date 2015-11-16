///<reference path="../../render/Point" />
///<reference path="./ConnectionType" />
///<reference path="../../utils/Guid" />
///<reference path="../../render/base/Color.ts" />
///<reference path="../../render/Node.ts" />


module CanvasBag {
        export interface BasicConnectionProperties {
            position: Point;
            width: number;
            height: number;
            borderColor: Base.Color;
            backgroundColor: Base.Color;
            borderWidth: number;
            draggable: boolean;
            joinable: boolean;
        }

        export interface ConnectionBinding {
            entry:Point;
            end:Point;
        }

        export abstract class BasicConnectionPrototype implements CanvasBag.Node {
            protected id:string;
            protected type:ConnectionType;
            protected properties:BasicConnectionProperties;
            protected onClickCallback:() => void;
            protected bindings:ConnectionBinding;
            protected temporaryEnd:Point;

            constructor() {
                this.type = null;
                this.id = Guid.generate();
                this.properties = null;
                this.onClickCallback = null;
                this.bindings = {entry: null, end: null};
                this.temporaryEnd = null;
            }

            public abstract getProperties():BasicConnectionProperties;
            public abstract setProperties(properties:BasicConnectionProperties);
            public abstract contains(point:Point):boolean;
            public abstract move(offsetX:number, offsetY:number);

            public getId = () => {
                return this.id;
            };

            public getType = ():ConnectionType => {
                return this.type;
            };

            public click() {
                this.onClickCallback();
            }

            public setOnClickListener(callback) {
                this.onClickCallback = callback;
            }

            public getBindings():ConnectionBinding {
                return this.bindings;
            }

            public setBindings(bindings:ConnectionBinding) {
                this.bindings = bindings;
            }

            public getTemporaryEnd() {
                return this.temporaryEnd;
            }

            public setTemporaryEnd = (pemporaryEnd) => {
                this.temporaryEnd = pemporaryEnd;
            };

            public setEntryBinding = (entryBinding:Point) => {
                this.bindings.entry = entryBinding;
            };

            public setEndBinding = (entryBinding:Point) => {
                this.bindings.end = entryBinding;
            };

            public toJSON = () => {
                return {
                    id: this.id,
                    type: this.type,
                    properties: this.properties,
                    bindings: this.bindings
                };
            }
        }
}