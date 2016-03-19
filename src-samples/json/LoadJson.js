var jsonDefinition = {
    "id": "32d305da-3f43-eb33-0824-5a8d18d39593",
    "type": "SCENE_BASIC",
    "nodes": [
        {
            "id": "f0137c28-366a-c54b-ce64-b471f5ba8390",
            "type": "CONTAINER_BASIC",
            "elements": [
                {
                    "id": "b867f836-6386-3fd8-149a-4af358199161",
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
                    "id": "6983f57c-4eb3-74d7-200d-c55603caefdf",
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
                    "id": "4786fec5-5321-6f72-11df-ef498c482ff7",
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
    var render = new CanvasBag.Render();
    render.setCanvas(canvas);

    var scene = new CanvasBag.Scene.Simple();
    render.addScene(scene);

    scene.fromJSON(jsonDefinition);

    //Print scene JSON to textarea
    document.getElementById("sceneJSON").innerHTML = JSON.stringify(scene, undefined, 2);

};