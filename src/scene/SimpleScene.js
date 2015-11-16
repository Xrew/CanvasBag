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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CanvasBag;
(function (CanvasBag) {
    var Scene;
    (function (Scene) {
        var Simple = (function (_super) {
            __extends(Simple, _super);
            function Simple() {
                _super.call(this);
                this.type = CanvasBag.SceneType.BASIC;
            }
            return Simple;
        })(Scene.BasicScenePrototype);
        Scene.Simple = Simple;
    })(Scene = CanvasBag.Scene || (CanvasBag.Scene = {}));
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=SimpleScene.js.map