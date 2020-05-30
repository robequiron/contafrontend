import { Subcuenta } from '../subcuenta.model';
/**
 * Table model of subaccount
 */
export class SubcuentaTable {
    /**
     * Model table subaccount
     * 
     * @param count Total number of records
     * @param subcuentas Model subaccount
     * @param ok State
     * @param orderSubcuenta Order default
     * @param orderName Order default
     */
    constructor(
        public count:number,
        public subcuentas: Subcuenta,
        public ok: boolean,
        public orderSubcuenta: number = 1,
        public orderName: number = 0,
    ){}
}