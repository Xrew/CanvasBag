///<reference path="../utils/Guid" />
///<reference path="./ShapeType" />
///<reference path="../utils/ObjectUtils" />

module CanvasBag {
    export class BasicShapePrototype {
        private type;
        private id;
        private renderOffset;
        private onClickCallback;
        private properties;

        constructor() {
            this.id = Guid.generate();
            this.renderOffset = {x: 0, y: 0};
            this.onClickCallback = null;
            this.properties = null;
        }

        public getId = () => {
            return this.id;
        };

        public getType = () => {
            return this.type;
        };

        public setType = (type: ShapeType) => {
            this.type = type;
        };

        public getProperties = () => {
            return this.properties;
        };

        public setProperties = (pProperties) => {
            this.properties = pProperties;
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

        public isJoinAble = () => {
            return this.properties.joinable;
        };

        public setJoinAble = (able) => {
            this.properties.joinable = able;
        };

        public setBackgroundImage = (base64String) => {
            this.properties.base64Background = base64String;
        };

        public toJSON() {
            return {
                id: this.id,
                type: this.type,
                renderOffset: this.renderOffset,
                properties: this.properties
            };
        }

        public fromJSON = (json) => {
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

        private printWarningBasicShape = (msg) => {
            console.log("WARNING: " + " should be defined. Object is loaded from JSON, be careful.")
        };

        private printErrorBasicShape = (msg) => {
            console.log("ERROR: " + " must be defined. Object is loaded from JSON.")
        };
    }
}