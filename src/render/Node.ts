///<reference path="Point.ts" />


module CanvasBag {
    export interface Node {
        id: string;
        getType():any;
        setProperties(properties: any);
        getProperties(): any;
        contains(point: Point) : boolean;
        move(offsetX:number, offsetY:number);
        click?: () => void;
        isJoinAble?: () => boolean;
        isDraggable?: () => boolean;
    }
}