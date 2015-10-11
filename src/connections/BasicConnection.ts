///<reference path="../render/Point" />

module CanvasBag {
    export interface BasicConnection {
        contains(point: Point) : boolean;
    }
}