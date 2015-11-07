window.onload = function () {
    var canvas = document.getElementById("image");
    var render = new CanvasBag.Render();
    render.setCanvas(canvas);

    var scene = new CanvasBag.Scene.Basic();
    render.addScene(scene);


    // Module 1
    var image = new CanvasBag.Sprites.Image();
    image.setProperties({
        position: {x: 500, y: 100},
        width: 70,
        height: 70,
        draggable: true,
        imageData: "R0lGODlhDwAPAKECAAAAzMzM/////wAAACwAAAAADwAPAAACIISPeQHsrZ5ModrLlN48CXF8m2iQ3YmmKqVlRtW4MLwWACH+H09wdGltaXplZCBieSBVbGVhZCBTbWFydFNhdmVyIQAAOw=="
    });


    scene.addSprite(image);

    setInterval(function () {
        document.getElementById("sceneJSON").innerHTML = JSON.stringify(scene, undefined, 2);
    }, 100);

};