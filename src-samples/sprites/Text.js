window.onload = function () {
    var canvas = document.getElementById("text");
    var render = new CanvasBag.Render();
    render.setCanvas(canvas);

    var scene = new CanvasBag.Scene.Simple();
    render.addScene(scene);


    // Module 1
    var text = new CanvasBag.Sprites.Text();
    text.setProperties({
        fontSize: "50px",
        fontFamily: "Arial",
        position: {x: 600, y: 100},
        content: "Ahoj svete",
        draggable: true
    });


    scene.addSprite(text);

    setInterval(function() {
        document.getElementById("sceneJSON").innerHTML = JSON.stringify(scene, undefined, 2);
    }, 100);

};