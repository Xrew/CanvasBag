///<reference path="../utils/Guid" />
///<reference path="./ShapeType" />
///<reference path="../utils/ObjectUtils" />
///<reference path="../render/RenderOffset.ts" />
///<reference path="../render/base/Color.ts" />
///<reference path="../render/Point.ts" />
///<reference path="../render/Node.ts" />

module CanvasBag {
    export interface BasicShapeProperties {
        position: Point;
        width: number;
        height: number;
        borderColor: Base.Color;
        borderWidth: number;
        draggable: boolean;
        joinable: boolean;
        base64Background: string;
    }

    export abstract class BasicShapePrototype implements CanvasBag.Node {
        private type: ShapeType;
        public id: string;
        private renderOffset: RenderOffset;
        private onClickCallback: () => void;
        private properties: BasicShapeProperties;

        public abstract getProperties():BasicShapeProperties;
        public abstract setProperties(properties: BasicShapeProperties);
        public abstract contains(point: Point) : boolean;
        public abstract move(offsetX: number, offsetY: number);

        constructor() {
            this.id = Guid.generate();
            this.renderOffset = {x: 0, y: 0};
            this.onClickCallback = null;
            this.properties = null;
        }

        public getId = () : string => {
            return this.id;
        };

        public getType = () : ShapeType => {
            return this.type;
        };

        protected setType = (type: ShapeType) => {
            this.type = type;
        };

        protected getBaseProperties = () : BasicShapeProperties => {
            return this.properties;
        };

        protected setBaseProperties = (pProperties: BasicShapeProperties) => {
            this.properties = pProperties;
        };

        public click = () => {
            this.onClickCallback();
        };

        public setOnClickListener = (callback : () => void) => {
            this.onClickCallback = callback;
        };

        public setRenderOffset = (offset: RenderOffset) => {
            this.renderOffset = offset;
        };

        public getRenderOffset = () : RenderOffset => {
            return this.renderOffset;
        };

        public isDraggable = () : boolean => {
            return this.properties.draggable;
        };

        public setDraggable = (able: boolean) => {
            this.properties.draggable = able;
        };

        public isJoinAble = () : boolean  => {
            return this.properties.joinable;
        };

        public setJoinAble = (able : boolean) => {
            this.properties.joinable = able;
        };

        public setBackgroundImage = (base64String : string) => {
            this.properties.base64Background = base64String;
        };

        // TODO not sure what type is returned type
        public toJSON() : any {
            return {
                id: this.id,
                type: this.type,
                renderOffset: this.renderOffset,
                properties: this.properties
            };
        }

        // TODO not sure what type is incoming type
        public fromJSON = (json: any) : BasicShapePrototype => {
            if (!ObjectUtils.hasDefinedProperty(json, 'id')) {
                json.id = Guid.generate();
                this.printWarningBasicShape("ID");
            }
            this.id = json.id;
            this.type = json.type;

            if (!ObjectUtils.hasDefinedProperty(json, 'renderOffset')) {
                json.renderOffset = {x: 0, y: 0};
                this.printWarningBasicShape("renderOffset");
            }
            this.renderOffset = json.renderOffset;

            if (!ObjectUtils.hasDefinedProperty(json, 'properties')) {
                json.properties = {};
                this.printErrorBasicShape("properties");
            }
            this.properties = json.properties;

            if (!ObjectUtils.hasDefinedProperty(json, 'onClickCallback')) {
                json.onClickCallback = null;
                this.printWarningBasicShape("onClickCallback");
            }
            this.onClickCallback = json.onClickCallback;

            return this;
        };

        private printWarningBasicShape = (msg: any) => {
            console.log("WARNING: " + " should be defined. Object is loaded from JSON, be careful.")
        };

        private printErrorBasicShape = (msg: any) => {
            console.log("ERROR: " + " must be defined. Object is loaded from JSON.")
        };
    }
}