window.onload = function () {
    var canvas = document.getElementById("scene");
    var render = new CanvasBag.Render();
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
        draggable: false
    });

    var circleRight = new CanvasBag.BasicShapes.Circle();
    circleRight.setBaseProperties({
        position: {x: 60, y: 0},
        radius: 5,
        borderColor: 'green',
        borderWidth: 1,
        backgroundColor: 'blue',
        draggable: false
    });

    var containerBasic = new  CanvasBag.Container.Basic();
    containerBasic.setProperties({
        name: "containerBasic1",
        position: {x: 200, y: 100}
    });

    containerBasic
        .addElement(rectangle)
        .addElement(circleRight)
        .addElement(circleLeft);


    scene.addContainer(containerBasic);

    //Print scene JSON to textarea
    document.getElementById("sceneJSON").innerHTML = JSON.stringify(scene, undefined, 2);

};