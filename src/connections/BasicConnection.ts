///<reference path="../render/Point" />
///<reference path="BasicConnectionPrototype.ts" />

module CanvasBag {
    export interface BasicConnection {
        contains(point:Point) : boolean;
        setProperties(properties:BasicConnectionProperties);
        getProperties(): BasicConnectionProperties;
    }
}