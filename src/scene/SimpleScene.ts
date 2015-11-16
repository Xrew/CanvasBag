///<reference path="../render/Point" />
///<reference path="../primitives/containers/ContainerType" />
///<reference path="../utils/ObjectUtils" />
///<reference path="../utils/Guid" />
///<reference path="../primitives/sprites/Image" />
///<reference path="../primitives/sprites/Text" />
///<reference path="../primitives/shapes/ShapeType" />
///<reference path="../primitives/shapes/Circle" />
///<reference path="../primitives/shapes/Custom" />
///<reference path="../primitives/shapes/Rectangle" />
///<reference path="../primitives/shapes/Triangle" />
///<reference path="./SceneType" />
///<reference path="../render/Node" />
///<reference path="../primitives/containers/BasicContainerPrototype.ts" />
///<reference path="../primitives/shapes/BasicShapePrototype.ts" />
///<reference path="../primitives/connections/BasicConnectionPrototype.ts" />
///<reference path="./BasicScenePrototype.ts" />

module CanvasBag {
    export module Scene {
        export interface SimpleSceneProperties extends BasicSceneProperties {
        }


        export class Simple extends BasicScenePrototype {
            constructor() {
                super();
                this.type = SceneType.BASIC;
            }
        }
    }
}