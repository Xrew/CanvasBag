window.onload = function () {
    var canvas = document.getElementById("containerBasic1");
    var render = new  CanvasBag.Render();
    render.setCanvas(canvas);

    var scene = new  CanvasBag.Scene.Basic();
    render.addScene(scene);

    var rectangle = new CanvasBag.BasicShapes.Rectangle();
    rectangle.setProperties({
        position: {x: 0, y: 0},
        width: 100,
        height: 100,
        borderColor: 'black',
        backgroundColor: 'yellow',
        borderWidth: 1,
        draggable: true
    });

    var circleLeft = new CanvasBag.BasicShapes.Circle();
    circleLeft.setBaseProperties({
        position: {x: -60, y: 0},
        radius: 5,
        borderColor: 'green',
        borderWidth: 1,
        backgroundColor: 'blue',
        draggable: true
    });

    var circleRight = new CanvasBag.BasicShapes.Circle();
    circleRight.setProperties({
        position: {x: 60, y: 0},
        radius: 5,
        borderColor: 'green',
        borderWidth: 1,
        backgroundColor: 'blue',
        draggable: true
    });

    var containerBasic = new  CanvasBag.BasicContainer.SimpleContainer();
    containerBasic.setProperties({
        name: "containerBasic1",
        position: {x: 500, y: 200}
    });

    containerBasic
        .addElement(rectangle)
        .addElement(circleRight)
        .addElement(circleLeft);


    scene.addContainer(containerBasic);
};