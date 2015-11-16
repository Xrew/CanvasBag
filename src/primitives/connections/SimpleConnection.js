///<reference path="./ConnectionType" />
///<reference path="./BasicConnectionPrototype" />
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
                this.type = CanvasBag.ConnectionType.SIMPLE;
            }
            SimpleConnection.prototype.getProperties = function () {
                return this.properties;
            };
            ;
            SimpleConnection.prototype.setProperties = function (properties) {
                this.properties = properties;
            };
            ;
            SimpleConnection.prototype.contains = function (point) {
                console.log("Simple connection doesnt support 'contain' method.");
                return false;
            };
            SimpleConnection.prototype.move = function (offsetX, offsetY) {
                throw "Method move is not supported in SimpleConnection yet.";
            };
            return SimpleConnection;
        })(CanvasBag.BasicConnectionPrototype);
        Connections.SimpleConnection = SimpleConnection;
    })(Connections = CanvasBag.Connections || (CanvasBag.Connections = {}));
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=SimpleConnection.js.map