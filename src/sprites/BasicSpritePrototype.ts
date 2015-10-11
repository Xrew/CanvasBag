///<reference path="../utils/Guid" />
///<reference path="../utils/ObjectUtils" />

module CanvasBag {
    export class BasicSpritePrototype {

        private type;
        private id;
        private renderOffset;
        private onClickCallback;
        private properties;

        constructor() {
            this.type = null;
            this.id = Guid.generate();
            this.renderOffset = {x: 0, y: 0};
            this.onClickCallback = null;
            this.properties = null;
        }


        public  getId = () => {
            return this.id;
        };

        public getType = () => {
            return this.type;
        };

        public  setType = (type) => {
            this.type = type;
        };

        public getProperties = () => {
            return this.properties;
        };

        public setProperties = (properties) => {
            this.properties = properties;
        };

        public click = () => {
            this.onClickCallback();
        };

        public setOnClickListener = (callback) => {
            this.onClickCallback = callback;
        };

        public setRenderOffset = (offset) => {
            this.renderOffset = offset;
        };

        public getRenderOffset = () => {
            return this.renderOffset;
        };

        public isDraggable = () => {
            return this.properties.draggable;
        };

        public setDraggable = (able) => {
            this.properties.draggable = able;
        };

        public setBackgroundImage = (imageData) => {
            this.properties.imageData = imageData;
        };

        public toJSON = () => {
            return {
                id: this.id,
                type: this.type,
                renderOffset: this.renderOffset,
                properties: this.properties
            };
        };

        public fromJSON = (json) => {
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