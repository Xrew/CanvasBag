module CanvasBag {
    export class ObjectUtils {
        public static  hasDefinedProperty = (object, key) => {
            return object[key] !== undefined && object[key] !== null
        }
    }
}