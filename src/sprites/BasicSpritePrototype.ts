///<reference path="../utils/Guid" />
///<reference path="../utils/ObjectUtils" />
///<reference path="SpriteType.ts" />
///<reference path="../render/Point.ts" />
///<reference path="../render/RenderOffset.ts" />

module CanvasBag {
    export interface BasicSpriteProperties {
        position: Point;
        draggable: boolean;
    }

    export class BasicSpritePrototype {
        private type:SpriteType;
        private id:string;
        private renderOffset:RenderOffset;
        private onClickCallback:()=> void;
        private properties:BasicSpriteProperties;

        constructor() {
            this.type = null;
            this.id = Guid.generate();
            this.renderOffset = {x: 0, y: 0};
            this.onClickCallback = null;
            this.properties = null;
        }


        public  getId = ():string => {
            return this.id;
        };

        public getType = ():SpriteType => {
            return this.type;
        };

        public  setType = (type:SpriteType) => {
            this.type = type;
        };

        public getBaseProperties = ():BasicSpriteProperties => {
            return this.properties;
        };

        public setBaseProperties = (properties:BasicSpriteProperties) => {
            this.properties = properties;
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

        public setBackgroundImage = (imageData:string) => {
            this.properties.imageData = imageData;
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