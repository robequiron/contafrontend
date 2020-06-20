import { Porcentaje } from './porcentaje.model';
/**
 * Model tax 
 */
export class Tax {
    /**
     * Constructor
     * 
     * @param taxnumber Number identifier tax
     * @param name Name tax
     * @param _id Identifier tax
     * @param porcentaje Array list percentage
     */
    constructor(
        public taxnumber:Number,
        public name:String,
        public _id?:String,
        public porcentaje?:Porcentaje,
    ){}
}

