///<reference path="BasicSpritePrototype.ts" />

module CanvasBag {
    export interface BasicSprite {
        setProperties(properties:BasicSpriteProperties);
        getProperties():BasicSpriteProperties
        contains(point) : boolean;
        move(offsetX, offsetY);
    }
}