///<reference path="../render/Point" />
///<reference path="./ConnectionType" />
///<reference path="../utils/Guid" />
///<reference path="../render/base/Color.ts" />


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

    export class BasicConnectionPrototype {
        private id:string;
        private type:ConnectionType;
        private properties:BasicConnectionProperties;
        private onClickCallback:() => void;
        private bindings:ConnectionBinding;
        private temporaryEnd:Point;

        constructor() {
            this.type = null;
            this.id = Guid.generate();
            this.properties = null;
            this.onClickCallback = null;
            this.bindings = {entry: null, end: null};
            this.temporaryEnd = null;
        }

        public getId = () => {
            return this.id;
        };

        public getType = ():ConnectionType => {
            return this.type;
        };

        protected setType = (type:ConnectionType) => {
            this.type = type;
        };

        protected getBaseProperties = ():BasicConnectionProperties => {
            return this.properties;
        };

        protected setBaseProperties = (properties:BasicConnectionProperties) => {
            this.properties = properties;
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