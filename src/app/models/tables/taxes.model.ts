import { Tax } from '../tax.model';

/**
 * Table model tax
 */
export class TaxTable {
    
    constructor(
        public count:number,
        public taxes: Tax,
        public ok:boolean
    ){}
}