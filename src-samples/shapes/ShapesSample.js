window.onload = function () {
    var canvas = document.getElementById("sample1");
    var render = new  CanvasBag.Render();
    render.setCanvas(canvas);

    var scene = new  CanvasBag.Scene.Basic();
    render.addScene(scene);

    var rectangle = new CanvasBag.BasicShapes.Rectangle();
    rectangle.setProperties({
        position: {x: 250, y: 250},
        width: 300,
        height: 100,
        borderColor: 'black',
        backgroundColor: 'yellow',
        borderWidth: 5
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
        borderWidth: '3',
        backgroundColor: 'blue'
    });
    circle.setOnClickListener(function () {
        console.log("You have clicked on CIRCLE");
    });
    scene.addShape(circle);

    var triangle = new CanvasBag.BasicShapes.Triangle();
    triangle.setProperties({
        points: [{x: 80, y: 80}, {x: 160, y: 80}, {x: 160, y: 180}],
        borderColor: 'black',
        borderWidth: '3',
        backgroundColor: 'red'
    });
    triangle.setOnClickListener(function () {
        console.log("You have clicked on CIRCLE");
    });
    scene.addShape(triangle);

    var customShape = new CanvasBag.BasicShapes.Custom();
    customShape.setProperties({
        points: [{x: 180, y: 80}, {x: 260, y: 80}, {x: 260, y: 160}, {x: 180, y: 160}, {x: 390, y: 100}],
        borderColor: 'blue',
        borderWidth: '1',
        backgroundColor: 'green'
    });
    customShape.setOnClickListener(function () {
        alert("Change my color please, it is horrible!");
    });
    scene.addShape(customShape);
};