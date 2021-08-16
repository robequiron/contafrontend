import { Porcentaje } from './porcentaje.model';
/**
 * Model tax 
 * 
 * Modelo de impuesto
 */
export class Tax {
    /**
     * Constructor
     * 
     * @param code Number identifier tax
     * @param name Name tax
     * @param _id Identifier tax
     * @param percentages Array list percentage
     */
    constructor(
        public code:Number,
        public name:String,
        public _id?:String,
        public percentages?:Porcentaje,
    ){}
    
}

