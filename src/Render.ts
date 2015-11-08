///<reference path="./render/RenderedPoint.ts" />
///<reference path="./containers/ContainerType" />
///<reference path="./sprites/SpriteType" />
///<reference path="./shapes/ShapeType.ts" />
///<reference path="./connections/ConnectionType" />
///<reference path="./connections/SimpleConnection" />
///<reference path="sprites/Text.ts" />
///<reference path="scene/Scene.ts" />
///<reference path="containers/BasicContainerPrototype.ts" />

module CanvasBag {
    export class Render {
        private static RENDERING_INTERVAL = 40;
        private context:CanvasRenderingContext2D;
        private canvas: HTMLCanvasElement;
        private scene: CanvasBag.Scene.Basic;
        private canvasValid: boolean;

        // Keep track when we are dragging
        private isDragging: boolean;
        private draggingElement: CanvasBag.Node;
        private draggingMousePositionPrevious: Point;

        // Keep track when we are joining
        private isJoining:boolean;
        private joiningElementStart: CanvasBag.Node;
        private joiningMousePosition: Point;
        private newConnection = null;

        constructor() {
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

        public setRenderingInterval = (interval) => {
            if (interval > 0) {
                Render.RENDERING_INTERVAL = interval;
            } else {
                console.log("Invalid RENDERING_INTERVAL has been set for canvas render.");
            }
        };

        public setCanvas = (canvas) => {
            this.canvas = canvas;
            this.context = canvas.getContext('2d');
            this.initCanvasBehaviour();
        };

        public render = () => {
            if (!this.scene.isValid()) {
                this.invalidateCanvas();
            }

            if (!this.canvasValid) {
                this.clearCanvas();
                if (this.scene == null) {
                    console.log("No scene has been added yet to render.");
                    return;
                }

                var nodes = this.scene.getAllNodes();
                nodes.forEach((node) => {
                    this.renderNode(node);
                });
                var connections = this.scene.getAllConnections();
                connections.forEach((connection) => {
                    this.renderConnection(connection);
                });

                this.validateCanvas();
            }
        };

        public addScene = (pScene) => {
            this.scene = pScene;
        };

        private finalizeRender = (properties) => {
            if (properties.backgroundColor !== undefined && properties.backgroundColor !== null) {
                this.context.fillStyle = properties.backgroundColor;
                this.context.fill();
            }


            if (properties.borderWidth !== undefined && properties.borderColor !== null) {
                this.context.lineWidth = properties.borderWidth;
                this.context.strokeStyle = properties.borderColor;
                this.context.stroke();
            }
        };

        private  renderText = (text:CanvasBag.Sprites.Text) => {
            var properties = text.getProperties();
            var renderOffset = text.getRenderOffset();

            this.context.font = properties.fontSize + " " + properties.fontFamily;
            text.getProperties().width = this.context.measureText(properties.content).width;
            text.getProperties().height = parseInt(properties.fontSize);
            properties = text.getProperties();
            this.context.fillText(properties.content, properties.position.x - (properties.width / 2) + renderOffset.x, properties.position.y - (properties.height / 2) + renderOffset.y);
        };

        private  renderImage = (image:CanvasBag.Sprites.Image) => {
            var properties = image.getProperties();
            var renderOffset = image.getRenderOffset();
            var halfWidth = properties.width / 2;
            var halfHeight = properties.height / 2;

            this.context.beginPath();
            this.context.rect(
                Math.floor(properties.position.x + renderOffset.x - halfWidth) + 0.5,
                Math.floor(properties.position.y + renderOffset.y - halfHeight) + 0.5,
                properties.width,
                properties.height
            );

            var _context = this.context;
            if (properties.imageData !== undefined && properties.imageData !== null) {
                var img = new Image();

                img.onload = function () {
                    _context.drawImage(this, properties.position.x + renderOffset.x - halfWidth, properties.position.y + renderOffset.y - halfHeight, properties.width, properties.height);
                };

                img.src = "data:image/gif;base64," + properties.imageData;
            }

            this.finalizeRender(properties);
        };

        private renderRectangle = (shape:CanvasBag.BasicShapes.Rectangle) => {
            var properties = shape.getProperties();
            var renderOffset = shape.getRenderOffset();
            var halfWidth = properties.width / 2;
            var halfHeight = properties.height / 2;

            this.context.beginPath();
            this.context.rect(
                Math.floor(properties.position.x + renderOffset.x - halfWidth) + 0.5,
                Math.floor(properties.position.y + renderOffset.y - halfHeight) + 0.5,
                properties.width,
                properties.height
            );

            var _context = this.context;

            if (properties.base64Background !== undefined && properties.base64Background !== null) {
                var img = new Image();

                img.onload = function () {
                    _context.drawImage(this, properties.position.x + renderOffset.x - halfWidth, properties.position.y + renderOffset.y - halfHeight, properties.width, properties.height);
                };

                img.src = "data:image/gif;base64," + properties.base64Background;
            }

            this.finalizeRender(properties);
        };

        private renderCircle = (shape:CanvasBag.BasicShapes.Circle) => {
            var properties = shape.getProperties();
            var renderOffset = shape.getRenderOffset();

            this.context.beginPath();
            this.context.arc(properties.position.x + renderOffset.x, properties.position.y + renderOffset.y, properties.radius, 0, 2 * Math.PI, false);
            this.finalizeRender(properties);
        };

        private  renderTriangle = (shape:CanvasBag.BasicShapes.Triangle) => {
            if (shape.getProperties().points.length != 3) {
                console.log("Shape is not a triangle. Cannot render.", shape);
            }
            this.renderCustomShape(shape);
        };

        private renderCustomShape = (shape:CanvasBag.BasicShapes.Custom) => {
            var properties = shape.getProperties();
            var renderOffset = shape.getRenderOffset();

            var first:RenderedPoint;
            properties.points.forEach((point, index) => {
                if (index == 0) {
                    this.context.beginPath();
                    this.context.moveTo(point.x + renderOffset.x, point.y + renderOffset.y);
                    first = {x: point.x + renderOffset.x, y: point.y + renderOffset.y};
                } else {
                    this.context.lineTo(point.x + renderOffset.x, point.y + renderOffset.y);
                }
            });
            if (first != null) {
                this.context.lineTo(first.x + renderOffset.x, first.y + renderOffset.y);
            }
            this.finalizeRender(properties);
        };

        private renderContainerBasic = (container) => {
            var containerCenter = container.getProperties().position;

            var nodes = container.getElements();
            for (var i = 0; i < nodes.length; i++) {
                nodes[i].setRenderOffset(containerCenter);
                this.renderNode(nodes[i]);
            }
        };

        private renderSimpleConnection = (connection) => {
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
                }
            } else {
                endCoord = connection.getTemporaryEnd();
            }

            this.context.beginPath();
            this.context.moveTo(startCoord.x, startCoord.y);
            this.context.lineTo(endCoord.x, endCoord.y);
            this.context.stroke();
        };

        private renderNode = (node:any) => {
            switch (node.getType()) {
                case ShapeType.RECTANGLE:
                    this.renderRectangle(<CanvasBag.BasicShapes.Rectangle>node);
                    break;
                case ShapeType.CIRCLE:
                    this.renderCircle(<CanvasBag.BasicShapes.Circle>node);
                    break;
                case ShapeType.TRIANGLE:
                    this.renderTriangle(<CanvasBag.BasicShapes.Triangle>node);
                    break;
                case ShapeType.CUSTOM_SHAPE:
                    this.renderCustomShape(<CanvasBag.BasicShapes.Custom>node);
                    break;
                case ContainerType.BASIC:
                    this.renderContainerBasic(<CanvasBag.BasicContainer.SimpleContainer>node);
                    break;
                case SpriteType.IMAGE:
                    this.renderImage(<CanvasBag.Sprites.Image>node);
                    break;
                case SpriteType.TEXT:
                    this.renderText(<CanvasBag.Sprites.Text>node);
                    break;
                default:
                    console.log("Unknown shape " + node.getType() + ". Cannot render.");
                    break;
            }
        };

        private renderConnection = (connection) => {
            switch (connection.getType()) {
                case ConnectionType.SIMPLE:
                    this.renderSimpleConnection(connection);
                    break;
                default:
                    console.log("Unknown connection " + connection.getType() + ". Cannot render.");
                    break;

            }
        };

        private  validateCanvas = () => {
            this.canvasValid = true;
            if (this.scene != null) {
                this.scene.validateScene()
            } else {
                console.log("No scene has been added to render.");
            }
        };

        private  invalidateCanvas = () => {
            this.canvasValid = false;
        };

        private clearCanvas = () => {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        };

        private detectElement = (point) : CanvasBag.Node => {
            var nodes = this.scene.getAllNodes();
            var sprites = this.scene.getAllSprites();

            // TODO should we search in sprites too? Should be sprites draggable?
            var elements = nodes.concat(<Array<CanvasBag.Node>>sprites);

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


        private isBasicContainer = (element):boolean => {
            return element !== null && element.getType() == CanvasBag.ContainerType.BASIC;
        }

        private initCanvasBehaviour = () => {
            // Prevent selection of text in canvas
            this.canvas.addEventListener('selectstart', (e) => {
                e.preventDefault();
                return false;
            }, false);

            this.canvas.addEventListener('click', (e) => {
                if (!this.isDragging && !this.isJoining) {
                    var mousePosition = this.getMousePosition(e);
                    var shape = this.detectElement(mousePosition);
                    if (shape != null) {
                        shape.click();
                    }
                }
            });


            this.canvas.addEventListener('mousedown', (e) => {
                var mousePosition = this.getMousePosition(e);
                var element = this.detectElement(mousePosition);
                var hotElement = null;

                if (element == null) {
                    return;
                }

                if (this.isBasicContainer(element)) {
                    hotElement = (<BasicContainer.BasicContainerPrototype>element).detectInnerElement(mousePosition)
                } else {
                    hotElement = element;
                }

                if (hotElement.isDraggable()) {
                    this.draggingElement = element;
                    this.draggingMousePositionPrevious = mousePosition;
                } else if (hotElement.isJoinAble()) {
                    this.joiningElementStart = hotElement;
                    this.newConnection = new Connections.SimpleConnection();
                    this.newConnection.setBindings({entry: this.joiningElementStart, end: null});
                    this.newConnection.setTemporaryEnd(mousePosition);
                    this.joiningMousePosition = mousePosition;
                    this.scene.addConnection(this.newConnection);
                }
            });

            this.canvas.addEventListener('mousemove', (e) => {
                var mousePosition = this.getMousePosition(e);
                if (this.draggingElement !== null) {
                    this.isDragging = true;
                    var offsetX = mousePosition.x - this.draggingMousePositionPrevious.x;
                    var offsetY = mousePosition.y - this.draggingMousePositionPrevious.y;
                    this.draggingMousePositionPrevious = mousePosition;
                    this.draggingElement.move(offsetX, offsetY);

                    this.invalidateCanvas();
                } else if (this.joiningElementStart != null) {
                    this.isJoining = true;
                    this.newConnection.setTemporaryEnd(mousePosition);
                    this.invalidateCanvas();
                }
            });

            this.canvas.addEventListener('mouseup', (e) => {
                if (this.draggingElement !== null) {
                    // To prevent click listener when ending dragging
                    setTimeout(() => {
                        this.isDragging = false;
                    }, 0);
                    this.draggingElement = null;
                    this.draggingMousePositionPrevious = null;
                    this.invalidateCanvas();
                } else if (this.joiningElementStart !== null) {
                    var mousePosition = this.getMousePosition(e);
                    var joiningShapeEnd = this.detectElement(mousePosition);
                    if (this.isBasicContainer(joiningShapeEnd)) {
                        joiningShapeEnd =  (<BasicContainer.BasicContainerPrototype>joiningShapeEnd).detectInnerElement(mousePosition);
                    }
                    if (joiningShapeEnd !== null && joiningShapeEnd.isJoinAble()) {
                        if (this.newConnection != null) {
                            this.newConnection.setBindings({entry: this.joiningElementStart, end: joiningShapeEnd})
                            // To prevent click listener when ending dragging
                            setTimeout(() => {
                                this.isJoining = false;
                            }, 0);
                            this.joiningElementStart = null;
                        }
                    } else {
                        this.scene.removeConnectionById(this.newConnection.getId());
                        this.joiningElementStart = null;
                        this.newConnection = null;
                    }
                    this.invalidateCanvas();
                }
            });

        };

        private getMousePosition = (e) => {
            var element = this.canvas;
            var offsetX = 0;
            var offsetY = 0;
            var mx, my;

            // Compute the total offset
            if (element.offsetParent !== undefined) {
                do {
                    offsetX += element.offsetLeft;
                    offsetY += element.offsetTop;
                } while ((element == element.offsetParent));
            }

            mx = e.pageX - offsetX;
            my = e.pageY - offsetY;

            // We return a simple javascript object (a hash) with x and y defined
            return {x: mx, y: my};
        }
    }
}