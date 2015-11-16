///<reference path="./ConnectionType" />
///<reference path="./BasicConnectionPrototype" />

module CanvasBag {
    export module Connections {
        export interface SimpleConnectionProperties extends BasicConnectionProperties {
        }

        export class SimpleConnection extends BasicConnectionPrototype {

            constructor() {
                super();
                this.setType(ConnectionType.SIMPLE);
            }

            getProperties():SimpleConnectionProperties {
                return <SimpleConnectionProperties>this.getBaseProperties();
            };

            setProperties(properties:SimpleConnectionProperties) {
                this.setBaseProperties(properties);
            };

            contains(point:Point):boolean {
                console.log("Simple connection doesnt support 'contain' method.");
                return false;
            }

            move(offsetX:number, offsetY:number) {
                throw "Method move is not supported in SimpleConnection yet."
            }
        }
    }
}