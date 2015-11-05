var jsonDefinition = {
    "id": "9c73efee-574e-1986-b399-08c347338c53",
    "type": "SCENE_BASIC",
    "nodes": [
    {
        "id": "3d64c3d5-7469-f0fe-212a-fe59a95d79ef",
        "type": "CONTAINER_BASIC",
        "elements": [
            {
                "id": "1140101b-5259-bcac-308f-2b5a4a080b5d",
                "type": "SHAPE_RECTANGLE",
                "renderOffset": {
                    "x": 0,
                    "y": 0
                },
                "properties": {
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "width": 100,
                    "height": 100,
                    "borderColor": "black",
                    "backgroundColor": "yellow",
                    "borderWidth": 1,
                    "draggable": true
                }
            },
            {
                "id": "8dd3c0ce-5388-497b-4bd5-e7bd5612277d",
                "type": "SHAPE_CIRCLE",
                "renderOffset": {
                    "x": 0,
                    "y": 0
                },
                "properties": {
                    "position": {
                        "x": 60,
                        "y": 0
                    },
                    "radius": 5,
                    "borderColor": "green",
                    "borderWidth": 1,
                    "backgroundColor": "blue",
                    "draggable": false
                }
            },
            {
                "id": "64541738-65aa-316f-b3aa-bca55e536d90",
                "type": "SHAPE_CIRCLE",
                "renderOffset": {
                    "x": 0,
                    "y": 0
                },
                "properties": {
                    "position": {
                        "x": -60,
                        "y": 0
                    },
                    "radius": 5,
                    "borderColor": "green",
                    "borderWidth": 1,
                    "backgroundColor": "blue",
                    "draggable": false
                }
            }
        ],
        "properties": {
            "name": "containerBasic1",
            "position": {
                "x": 200,
                "y": 100
            }
        }
    }
],
    "connections": [],
    "sprites": []
};

window.onload = function () {
    var canvas = document.getElementById("LoadJson");
    var render = CanvasBag.Render;
    render.setCanvas(canvas);

    var scene = CanvasBag.Scene();
    render.addScene(scene);

    scene.fromJSON(jsonDefinition);

    //Print scene JSON to textarea
    document.getElementById("sceneJSON").innerHTML = JSON.stringify(scene, undefined, 2);

};