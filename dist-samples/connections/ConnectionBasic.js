
function renderSample() {
    var canvas = document.getElementById("connectionBasic1");
    var render = new CanvasBag.Render();
    render.setCanvas(canvas);

    var scene = new CanvasBag.Scene.Basic();
    render.addScene(scene);


    // Module 1
    var moduleBody1 = new CanvasBag.BasicShapes.Rectangle();
    moduleBody1.setProperties({
        position: {x: 0, y: 0},
        width: 100,
        height: 100,
        borderColor: 'black',
        backgroundColor: 'green',
        borderWidth: 1,
        draggable: true,
        joinable: false
    });

    var entryConnector1 = new CanvasBag.BasicShapes.Circle();
    entryConnector1.setProperties({
        position: {x: -60, y: 0},
        radius: 5,
        borderColor: 'green',
        borderWidth: 1,
        backgroundColor: 'blue',
        draggable: false,
        joinable: true
    });

    var endConnector1 = new CanvasBag.BasicShapes.Circle();
    endConnector1.setProperties({
        position: {x: 60, y: 0},
        radius: 5,
        borderColor: 'green',
        borderWidth: 1,
        backgroundColor: 'blue',
        draggable: false,
        joinable: true
    });

    var moduleContainer1 = new CanvasBag.BasicContainer.SimpleContainer()
    moduleContainer1.setProperties({
        name: "containerBasic1",
        position: {x: 300, y: 200}
    });

    moduleContainer1
        .addElement(moduleBody1)
        .addElement(entryConnector1)
        .addElement(endConnector1);

    scene.addContainer(moduleContainer1);

    // Module 2
    var moduleBody2 = new CanvasBag.BasicShapes.Rectangle();
    moduleBody2.setProperties({
        position: {x: 0, y: 0},
        width: 100,
        height: 100,
        borderColor: 'black',
        backgroundColor: 'yellow',
        borderWidth: 1,
        draggable: true,
        joinable: false
    });

    var entryConnector2 = new CanvasBag.BasicShapes.Circle();
    entryConnector2.setProperties({
        position: {x: -60, y: 0},
        radius: 5,
        borderColor: 'green',
        borderWidth: 1,
        backgroundColor: 'blue',
        draggable: false,
        joinable: true
    });

    var endConnector2 = new CanvasBag.BasicShapes.Circle();
    endConnector2.setProperties({
        position: {x: 60, y: 0},
        radius: 5,
        borderColor: 'green',
        borderWidth: 1,
        backgroundColor: 'blue',
        draggable: false,
        joinable: true
    });

    var moduleContainer2 = new CanvasBag.BasicContainer.SimpleContainer()
    moduleContainer2.setProperties({
        name: "containerBasic1",
        position: {x: 700, y: 200}
    });

    moduleContainer2
        .addElement(moduleBody2)
        .addElement(entryConnector2)
        .addElement(endConnector2);

    scene.addContainer(moduleContainer2);

    var connection1 = new CanvasBag.Connections.SimpleConnection();
    connection1.setBindings({
        entry: endConnector1,
        end: entryConnector2
    });

    scene.addConnection(connection1);

    setInterval(function() {
        document.getElementById("sceneJSON").innerHTML = JSON.stringify(scene, undefined, 2);
    }, 100);

};