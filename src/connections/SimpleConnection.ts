///<reference path="./ConnectionType" />
///<reference path="./BasicConnectionPrototype" />
///<reference path="./BasicConnection" />

module CanvasBag {
    export module Connections {
        export interface SimpleConnectionProperties extends BasicConnectionProperties {
        }

        export class SimpleConnection extends BasicConnectionPrototype implements BasicConnection {

            constructor() {
                super();
                this.setType(ConnectionType.SIMPLE);
            }

            public getProperties = ():SimpleConnectionProperties => {
                return <SimpleConnectionProperties>this.getBaseProperties();
            };

            public setProperties = (properties:SimpleConnectionProperties) => {
                this.setBaseProperties(properties);
            };

            public contains = (point:Point):boolean => {
                console.log("Simple connection doesnt support 'contain' method.");
                return false;
            }
        }
    }
}