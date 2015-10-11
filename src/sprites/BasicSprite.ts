module CanvasBag {
    export interface BasicSprite {
        contains(point) : boolean;
        move(offsetX, offsetY);
    }
}