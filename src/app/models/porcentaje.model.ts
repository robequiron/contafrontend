/**
 * Model Percentage taxes
 */
export class Porcentaje {
    /**
     * Constructor
     * 
     * @param name Name of the percentage applied
     * @param percentage Percentage
     */
    constructor(
        public name:String,
        public percentage: Number,
        public _id?:String
    ){}

    public setPorcentaje(name:String, porcentaje:Number, _id:String) {
        this.name = name;
        this.percentage = porcentaje;
        this._id = _id;
    }
}

/**
 * Interfaze percentage
 */
export interface _iPorcentaje extends Porcentaje {
  length?: number;
};