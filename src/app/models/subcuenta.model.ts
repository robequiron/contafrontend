import { Subgrupo } from './subgrupo.model';
/**
 * Model subaccount
 */
export class Subcuenta {

    /**
     * Model subcuenta
     * 
     * @param name Name subaccount
     * @param subcuenta Number subaccount
     * @param balance Accounting balance to which it belongs
     * @param subgrupo Subgroup account
     * @param _id  Identifier accounting group
     */
    constructor(
        public name:String,
        public subcuenta:Number,
        public subgrupo: Subgrupo,
        public _id?: String,
    ){}

}