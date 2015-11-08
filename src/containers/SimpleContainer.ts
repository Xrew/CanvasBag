///<reference path="BasicContainerPrototype.ts" />
///<reference path="ContainerType.ts" />

module CanvasBag {
    export module BasicContainer {

        export interface SimpleContainerProperties extends BasicContainerProperties {
        }

        export class SimpleContainer extends BasicContainerPrototype {

            constructor() {
                super();
                this.setType(ContainerType.BASIC);
            }

            getProperties():SimpleContainerProperties {
                return <SimpleContainerProperties>this.getBaseProperties();
            };

            setProperties(properties:SimpleContainerProperties) {
                this.setBaseProperties(properties);
            };

            contains(point:Point):boolean {
                return this.detectInnerElement(point) !== null;
            };

            move(offsetX:number, offsetY:number) {
                this.getBaseProperties().position.x += offsetX;
                this.getBaseProperties().position.y += offsetY;
            };
        }
    }
}