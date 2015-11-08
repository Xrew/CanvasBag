///<reference path="BasicShapePrototype.ts" />
module CanvasBag {
    export interface BasicShape {
        setProperties(properties: BasicShapeProperties);
        getProperties(): BasicShapeProperties;
        contains(point) : boolean;
        move(offsetX, offsetY);
    }
}