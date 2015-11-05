///<reference path="./ConnectionType" />
///<reference path="./BasicConnectionPrototype" />
///<reference path="./BasicConnection" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CanvasBag;
(function (CanvasBag) {
    var Connections;
    (function (Connections) {
        var SimpleConnection = (function (_super) {
            __extends(SimpleConnection, _super);
            function SimpleConnection() {
                _super.call(this);
                this.contains = function (point) {
                    console.log("Simple connection doesnt support 'contain' method.");
                    return false;
                };
                this.setType(CanvasBag.ConnectionType.SIMPLE);
            }
            return SimpleConnection;
        })(CanvasBag.BasicConnectionPrototype);
        Connections.SimpleConnection = SimpleConnection;
    })(Connections = CanvasBag.Connections || (CanvasBag.Connections = {}));
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=SimpleConnection.js.map