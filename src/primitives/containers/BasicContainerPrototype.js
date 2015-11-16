///<reference path="../../render/Point" />
///<reference path="../../utils/ObjectUtils" />
///<reference path="../../utils/Guid" />
///<reference path="../sprites/Image" />
///<reference path="../sprites/Text" />
///<reference path="../shapes/ShapeType" />
///<reference path="ContainerType.ts" />
///<reference path="../../render/Node.ts" />
var CanvasBag;
(function (CanvasBag) {
    var BasicContainerPrototype = (function () {
        function BasicContainerPrototype() {
            var _this = this;
            this.getType = function () {
                return _this.type;
            };
            this.getId = function () {
                return _this.id;
            };
            this.detectInnerElement = function (point) {
                for (var i = 0; i < _this.elements.length; i++) {
                    if (_this.elements[i].contains(point)) {
                        return _this.elements[i];
                    }
                }
                return null;
            };
            this.addElement = function (element) {
                _this.elements.push(element);
                return _this;
            };
            this.getElements = function () {
                return _this.elements;
            };
            this.printWarningBasicContainer = function (msg) {
                console.log("WARNING: " + " should be defined. Object is loaded from JSON, be careful.");
            };
            this.printErrorBasicContainer = function (msg) {
                console.log("ERROR: " + " must be defined. Object is loaded from JSON.");
            };
            this.id = CanvasBag.Guid.generate();
            this.type = null;
            this.elements = [];
            this.properties = null;
        }
        return BasicContainerPrototype;
    })();
    CanvasBag.BasicContainerPrototype = BasicContainerPrototype;
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=BasicContainerPrototype.js.map