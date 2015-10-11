///<reference path="./ConnectionType" />
///<reference path="./BasicConnectionPrototype" />
///<reference path="./BasicConnection" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CanvasBag;
(function (CanvasBag) {
    (function (Connections) {
        var SimpleConnection = (function (_super) {
            __extends(SimpleConnection, _super);
            function SimpleConnection() {
                _super.call(this);
                this.contains = function (point) {
                    console.log("Simple connection doesnt support 'contain' method.");
                    return false;
                };
                this.setType(0 /* SIMPLE */);
            }
            return SimpleConnection;
        })(CanvasBag.BasicConnectionPrototype);
        Connections.SimpleConnection = SimpleConnection;
    })(CanvasBag.Connections || (CanvasBag.Connections = {}));
    var Connections = CanvasBag.Connections;
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=SimpleConnection.js.map
