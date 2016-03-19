window.onload = function () {
    var canvas = document.getElementById("sample1");
    var render = new  CanvasBag.Render();
    render.setCanvas(canvas);

    var scene = new  CanvasBag.Scene.Simple();
    render.addScene(scene);

    var rectangle = new CanvasBag.BasicShapes.Rectangle();
    rectangle.setProperties({
        position: {x: 250, y: 250},
        width: 300,
        height: 100,
        borderColor: 'black',
        backgroundColor: 'yellow',
        borderWidth: 5,
        draggable:false,
        joinable:false
    });
    rectangle.setOnClickListener(function () {
        alert("You have clicked RECTANGLE and it is much more funny! :) ");
    });
    scene.addShape(rectangle);

    var circle = new CanvasBag.BasicShapes.Circle();
    circle.setProperties({
        position: {x: 50, y: 50},
        radius: 20,
        borderColor: 'green',
        backgroundColor: 'blue',
        borderWidth: 3,
        draggable:false,
        joinable:false
    });
    circle.setOnClickListener(function () {
        console.log("You have clicked on CIRCLE");
    });
    scene.addShape(circle);

    var triangle = new CanvasBag.BasicShapes.Triangle();
    triangle.setProperties({
        points: [{x: 80, y: 80}, {x: 160, y: 80}, {x: 160, y: 180}],
        borderColor: 'black',
        borderWidth: 3,
        backgroundColor: 'red',
        draggable:false,
        joinable:false
    });
    triangle.setOnClickListener(function () {
        console.log("You have clicked on TRIANGLE");
    });
    scene.addShape(triangle);

    var customShape = new CanvasBag.BasicShapes.Custom();
    customShape.setProperties({
        points: [{x: 180, y: 80}, {x: 260, y: 80}, {x: 260, y: 160}, {x: 180, y: 160}, {x: 390, y: 100}],
        borderColor: 'blue',
        borderWidth: 1,
        backgroundColor: 'green',
        draggable:false,
        joinable:false
    });
    customShape.setOnClickListener(function () {
        alert("Change my color please, it is horrible!");
    });
    scene.addShape(customShape);
};