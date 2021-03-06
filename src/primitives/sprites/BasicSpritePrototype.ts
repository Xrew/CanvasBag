///<reference path="../../utils/Guid" />
///<reference path="../../utils/ObjectUtils" />
///<reference path="SpriteType.ts" />
///<reference path="../../render/Point.ts" />
///<reference path="../../render/RenderOffset.ts" />
///<reference path="../../render/Node.ts" />

module CanvasBag {
    export interface BasicSpriteProperties {
        position: Point;
        draggable: boolean;
    }

    export abstract class BasicSpritePrototype implements CanvasBag.Node {
        protected type:SpriteType;
        protected id:string;
        protected renderOffset:RenderOffset;
        protected onClickCallback:()=> void;
        protected properties:BasicSpriteProperties;

        constructor() {
            this.type = null;
            this.id = Guid.generate();
            this.renderOffset = {x: 0, y: 0};
            this.onClickCallback = null;
            this.properties = null;
        }

        public abstract getProperties():BasicSpriteProperties;
        public abstract setProperties(properties: BasicSpriteProperties);
        public abstract contains(point: Point) : boolean;
        public abstract move(offsetX: number, offsetY: number);

        public  getId = ():string => {
            return this.id;
        };

        public getType = ():SpriteType => {
            return this.type;
        };

        public click = () => {
            this.onClickCallback();
        };

        public setOnClickListener = (callback:()=> void) => {
            this.onClickCallback = callback;
        };

        public setRenderOffset = (offset:RenderOffset) => {
            this.renderOffset = offset;
        };

        public getRenderOffset = ():RenderOffset => {
            return this.renderOffset;
        };

        public isDraggable = ():boolean => {
            return this.properties.draggable;
        };

        public setDraggable = (able:boolean) => {
            this.properties.draggable = able;
        };

        public toJSON = ():any => {
            return {
                id: this.id,
                type: this.type,
                renderOffset: this.renderOffset,
                properties: this.properties
            };
        };

        public fromJSON = (json:any) => {
            if (!ObjectUtils.hasDefinedProperty(json, 'id')) {
                json.id = Guid.generate();
                this.printWarningBasicSprite("ID");
            }
            this.id = json.id;
            this.type = json.type;

            if (!ObjectUtils.hasDefinedProperty(json, 'renderOffset')) {
                json.renderOffset = {x: 0, y: 0};
                this.printWarningBasicSprite("renderOffset");
            }
            this.renderOffset = json.renderOffset;

            if (!ObjectUtils.hasDefinedProperty(json, 'properties')) {
                json.properties = {};
                this.printErrorBasicSprite("properties");
            }
            this.properties = json.properties;

            if (!ObjectUtils.hasDefinedProperty(json, 'onClickCallback')) {
                json.onClickCallback = null;
                this.printWarningBasicSprite("onClickCallback");
            }
            this.onClickCallback = json.onClickCallback;

            return this;
        };

        private printWarningBasicSprite = (msg) => {
            console.log("WARNING: " + " should be defined. Object is loaded from JSON, be careful.")
        };

        private printErrorBasicSprite = (msg) => {
            console.log("ERROR: " + " must be defined. Object is loaded from JSON.")
        }
    }
}