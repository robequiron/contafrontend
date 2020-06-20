import {Cuenta} from "../cuenta.model";
/**
 * Table model of accounting account
 */
export class CuentaTable {
    /**
     * Model table group
     * 
     * @param count Total number of records
     * @param cuentas Model groups
     * @param ok State
     * @param orderCuenta Order default
     * @param orderName Order default
     */
    constructor(
        public count:number,
        public cuentas:Cuenta,
        public ok: boolean,
        public orderCuenta: number =1,
        public orderName: number = 0,
    ) {}
    
}