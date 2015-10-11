module CanvasBag {
    export interface BasicShape {
        contains(point) : boolean;
        move(offsetX, offsetY);
    }
}