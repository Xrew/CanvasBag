///<reference path="./render/RenderedPoint.ts" />
///<reference path="./containers/ContainerType" />
///<reference path="./sprites/SpriteType" />
///<reference path="./shapes/ShapeType.ts" />
///<reference path="./connections/ConnectionType" />
///<reference path="./connections/SimpleConnection" />
var CanvasBag;
(function (CanvasBag) {
    var Render = (function () {
        function Render() {
            var _this = this;
            this.newConnection = null;
            this.setRenderingInterval = function (interval) {
                if (interval > 0) {
                    Render.RENDERING_INTERVAL = interval;
                }
                else {
                    console.log("Invalid RENDERING_INTERVAL has been set for canvas render.");
                }
            };
            this.setCanvas = function (canvas) {
                _this.canvas = canvas;
                _this.context = canvas.getContext('2d');
                _this.initCanvasBehaviour();
            };
            this.render = function () {
                if (!_this.scene.isValid()) {
                    _this.invalidateCanvas();
                }
                if (!_this.canvasValid) {
                    _this.clearCanvas();
                    if (_this.scene == null) {
                        console.log("No scene has been added yet to render.");
                        return;
                    }
                    var nodes = _this.scene.getAllNodes();
                    nodes.forEach(function (node) {
                        _this.renderNode(node);
                    });
                    var connections = _this.scene.getAllConnections();
                    connections.forEach(function (connection) {
                        _this.renderConnection(connection);
                    });
                    _this.validateCanvas();
                }
            };
            this.addScene = function (pScene) {
                _this.scene = pScene;
            };
            this.finalizeRender = function (properties) {
                if (properties.backgroundColor !== undefined && properties.backgroundColor !== null) {
                    _this.context.fillStyle = properties.backgroundColor;
                    _this.context.fill();
                }
                if (properties.borderWidth !== undefined && properties.borderColor !== null) {
                    _this.context.lineWidth = properties.borderWidth;
                    _this.context.strokeStyle = properties.borderColor;
                    _this.context.stroke();
                }
            };
            this.renderText = function (text) {
                var properties = text.getProperties();
                var renderOffset = text.getRenderOffset();
                _this.context.font = properties.fontSize + " " + properties.fontFamily;
                text.getProperties().width = _this.context.measureText(properties.content).width;
                text.getProperties().height = parseInt(properties.fontSize);
                properties = text.getProperties();
                _this.context.fillText(properties.content, properties.position.x - (properties.width / 2) + renderOffset.x, properties.position.y - (properties.height / 2) + renderOffset.y);
            };
            this.renderImage = function (image) {
                var properties = image.getProperties();
                var renderOffset = image.getRenderOffset();
                var halfWidth = properties.width / 2;
                var halfHeight = properties.height / 2;
                _this.context.beginPath();
                _this.context.rect(Math.floor(properties.position.x + renderOffset.x - halfWidth) + 0.5, Math.floor(properties.position.y + renderOffset.y - halfHeight) + 0.5, properties.width, properties.height);
                var _context = _this.context;
                if (properties.imageData !== undefined && properties.imageData !== null) {
                    var img = new Image();
                    img.onload = function () {
                        _context.drawImage(this, properties.position.x + renderOffset.x - halfWidth, properties.position.y + renderOffset.y - halfHeight, properties.width, properties.height);
                    };
                    img.src = "data:image/gif;base64," + properties.imageData;
                }
                _this.finalizeRender(properties);
            };
            this.renderRectangle = function (shape) {
                var properties = shape.getProperties();
                var renderOffset = shape.getRenderOffset();
                var halfWidth = properties.width / 2;
                var halfHeight = properties.height / 2;
                _this.context.beginPath();
                _this.context.rect(Math.floor(properties.position.x + renderOffset.x - halfWidth) + 0.5, Math.floor(properties.position.y + renderOffset.y - halfHeight) + 0.5, properties.width, properties.height);
                var _context = _this.context;
                if (properties.base64Background !== undefined && properties.base64Background !== null) {
                    var img = new Image();
                    img.onload = function () {
                        _context.drawImage(this, properties.position.x + renderOffset.x - halfWidth, properties.position.y + renderOffset.y - halfHeight, properties.width, properties.height);
                    };
                    img.src = "data:image/gif;base64," + properties.base64Background;
                }
                _this.finalizeRender(properties);
            };
            this.renderCircle = function (shape) {
                var properties = shape.getProperties();
                var renderOffset = shape.getRenderOffset();
                _this.context.beginPath();
                _this.context.arc(properties.position.x + renderOffset.x, properties.position.y + renderOffset.y, properties.radius, 0, 2 * Math.PI, false);
                _this.finalizeRender(properties);
            };
            this.renderTriangle = function (shape) {
                if (shape.getProperties().points.length != 3) {
                    console.log("Shape is not a triangle. Cannot render.", shape);
                }
                _this.renderCustomShape(shape);
            };
            this.renderCustomShape = function (shape) {
                var properties = shape.getProperties();
                var renderOffset = shape.getRenderOffset();
                var first;
                properties.points.forEach(function (point, index) {
                    if (index == 0) {
                        _this.context.beginPath();
                        _this.context.moveTo(point.x + renderOffset.x, point.y + renderOffset.y);
                        first = { x: point.x + renderOffset.x, y: point.y + renderOffset.y };
                    }
                    else {
                        _this.context.lineTo(point.x + renderOffset.x, point.y + renderOffset.y);
                    }
                });
                if (first != null) {
                    _this.context.lineTo(first.x + renderOffset.x, first.y + renderOffset.y);
                }
                _this.finalizeRender(properties);
            };
            this.renderContainerBasic = function (container) {
                var containerCenter = container.getProperties().position;
                var nodes = container.getElements();
                for (var i = 0; i < nodes.length; i++) {
                    nodes[i].setRenderOffset(containerCenter);
                    _this.renderNode(nodes[i]);
                }
            };
            this.renderSimpleConnection = function (connection) {
                var connectionBindings = connection.getBindings();
                var entryShape = connectionBindings.entry;
                var entryShapeRenderOffset = entryShape.getRenderOffset();
                var startCoord = {
                    x: entryShape.getProperties().position.x + entryShapeRenderOffset.x,
                    y: entryShape.getProperties().position.y + entryShapeRenderOffset.y
                };
                var endShape = connectionBindings.end;
                var endCoord;
                if (connectionBindings.end != null) {
                    var endShapeRenderOffset = endShape.getRenderOffset();
                    endCoord = {
                        x: connectionBindings.end.getProperties().position.x + endShapeRenderOffset.x,
                        y: connectionBindings.end.getProperties().position.y + endShapeRenderOffset.y
                    };
                }
                else {
                    endCoord = connection.getTemporaryEnd();
                }
                _this.context.beginPath();
                _this.context.moveTo(startCoord.x, startCoord.y);
                _this.context.lineTo(endCoord.x, endCoord.y);
                _this.context.stroke();
            };
            this.renderNode = function (node) {
                switch (node.getType()) {
                    case CanvasBag.ShapeType.RECTANGLE:
                        _this.renderRectangle(node);
                        break;
                    case CanvasBag.ShapeType.CIRCLE:
                        _this.renderCircle(node);
                        break;
                    case CanvasBag.ShapeType.TRIANGLE:
                        _this.renderTriangle(node);
                        break;
                    case CanvasBag.ShapeType.CUSTOM_SHAPE:
                        _this.renderCustomShape(node);
                        break;
                    case CanvasBag.ContainerType.BASIC:
                        _this.renderContainerBasic(node);
                        break;
                    case CanvasBag.SpriteType.IMAGE:
                        _this.renderImage(node);
                        break;
                    case CanvasBag.SpriteType.TEXT:
                        _this.renderText(node);
                        break;
                    default:
                        console.log("Unknown shape " + node.getType() + ". Cannot render.");
                        break;
                }
            };
            this.renderConnection = function (connection) {
                switch (connection.getType()) {
                    case CanvasBag.ConnectionType.SIMPLE:
                        _this.renderSimpleConnection(connection);
                        break;
                    default:
                        console.log("Unknown connection " + connection.getType() + ". Cannot render.");
                        break;
                }
            };
            this.validateCanvas = function () {
                _this.canvasValid = true;
                if (_this.scene != null) {
                    _this.scene.validateScene();
                }
                else {
                    console.log("No scene has been added to render.");
                }
            };
            this.invalidateCanvas = function () {
                _this.canvasValid = false;
            };
            this.clearCanvas = function () {
                _this.context.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
            };
            this.detectElement = function (point) {
                var nodes = _this.scene.getAllNodes();
                var sprites = _this.scene.getAllSprites();
                // TODO should we search in sprites too? Should be sprites draggable?
                var elements = nodes.concat(sprites);
                var highestIndex = -1;
                for (var i = 0; i < elements.length; i++) {
                    if (elements[i].contains(point)) {
                        highestIndex = i;
                    }
                }
                if (highestIndex !== -1) {
                    return elements[highestIndex];
                }
                return null;
            };
            this.isBasicContainer = function (element) {
                return element !== null && element.getType() == CanvasBag.ContainerType.BASIC;
            };
            this.initCanvasBehaviour = function () {
                // Prevent selection of text in canvas
                _this.canvas.addEventListener('selectstart', function (e) {
                    e.preventDefault();
                    return false;
                }, false);
                _this.canvas.addEventListener('click', function (e) {
                    if (!_this.isDragging && !_this.isJoining) {
                        var mousePosition = _this.getMousePosition(e);
                        var shape = _this.detectElement(mousePosition);
                        if (shape != null) {
                            shape.click();
                        }
                    }
                });
                _this.canvas.addEventListener('mousedown', function (e) {
                    var mousePosition = _this.getMousePosition(e);
                    var element = _this.detectElement(mousePosition);
                    var hotElement = null;
                    if (element == null) {
                        return;
                    }
                    if (_this.isBasicContainer(element)) {
                        hotElement = element.detectInnerElement(mousePosition);
                    }
                    else {
                        hotElement = element;
                    }
                    if (hotElement.isDraggable()) {
                        _this.draggingElement = element;
                        _this.draggingMousePositionPrevious = mousePosition;
                    }
                    else if (hotElement.isJoinAble()) {
                        _this.joiningElementStart = hotElement;
                        _this.newConnection = new CanvasBag.Connections.SimpleConnection();
                        _this.newConnection.setBindings({ entry: _this.joiningElementStart, end: null });
                        _this.newConnection.setTemporaryEnd(mousePosition);
                        _this.joiningMousePosition = mousePosition;
                        _this.scene.addConnection(_this.newConnection);
                    }
                });
                _this.canvas.addEventListener('mousemove', function (e) {
                    var mousePosition = _this.getMousePosition(e);
                    if (_this.draggingElement !== null) {
                        _this.isDragging = true;
                        var offsetX = mousePosition.x - _this.draggingMousePositionPrevious.x;
                        var offsetY = mousePosition.y - _this.draggingMousePositionPrevious.y;
                        _this.draggingMousePositionPrevious = mousePosition;
                        _this.draggingElement.move(offsetX, offsetY);
                        _this.invalidateCanvas();
                    }
                    else if (_this.joiningElementStart != null) {
                        _this.isJoining = true;
                        _this.newConnection.setTemporaryEnd(mousePosition);
                        _this.invalidateCanvas();
                    }
                });
                _this.canvas.addEventListener('mouseup', function (e) {
                    if (_this.draggingElement !== null) {
                        // To prevent click listener when ending dragging
                        setTimeout(function () {
                            this.isDragging = false;
                        }, 0);
                        _this.draggingElement = null;
                        _this.draggingMousePositionPrevious = null;
                        _this.invalidateCanvas();
                    }
                    else if (_this.joiningElementStart !== null) {
                        var mousePosition = _this.getMousePosition(e);
                        var joiningShapeEnd = _this.detectElement(mousePosition);
                        if (_this.isBasicContainer(joiningShapeEnd)) {
                            joiningShapeEnd = joiningShapeEnd.detectInnerElement(mousePosition);
                        }
                        if (joiningShapeEnd !== null && joiningShapeEnd.isJoinAble()) {
                            if (_this.newConnection != null) {
                                _this.newConnection.setBindings({ entry: _this.joiningElementStart, end: joiningShapeEnd });
                                // To prevent click listener when ending dragging
                                setTimeout(function () {
                                    this.isJoining = false;
                                }, 0);
                                _this.joiningElementStart = null;
                            }
                        }
                        else {
                            _this.scene.removeConnectionById(_this.newConnection.getId());
                            _this.joiningElementStart = null;
                            _this.newConnection = null;
                        }
                        _this.invalidateCanvas();
                    }
                });
            };
            this.getMousePosition = function (e) {
                var element = _this.canvas;
                var offsetX = 0;
                var offsetY = 0;
                var mx, my;
                // Compute the total offset
                if (element.offsetParent !== undefined) {
                    do {
                        offsetX += element.offsetLeft;
                        offsetY += element.offsetTop;
                    } while ((element = element.offsetParent));
                }
                mx = e.pageX - offsetX;
                my = e.pageY - offsetY;
                // We return a simple javascript object (a hash) with x and y defined
                return { x: mx, y: my };
            };
            window.setInterval(this.render, Render.RENDERING_INTERVAL);
            this.context = null;
            this.canvas = null;
            this.scene = null;
            this.canvasValid = false;
            this.isDragging = false;
            this.draggingElement = null;
            this.draggingMousePositionPrevious = null;
            this.isJoining = false;
            this.joiningElementStart = null;
            this.joiningMousePosition = null;
            this.newConnection = null;
        }
        Render.RENDERING_INTERVAL = 40;
        return Render;
    })();
    CanvasBag.Render = Render;
})(CanvasBag || (CanvasBag = {}));
//# sourceMappingURL=Render.js.map