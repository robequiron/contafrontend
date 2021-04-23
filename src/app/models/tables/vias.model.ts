import { Via } from '../via.model';
/**
 * Table model way
 */
 export class  ViaTable {
    /**
     * 
     * @param count Total number of records
     * @param vias Model ways
     * @param ok State
     * @param orderName Order default
     */
    constructor(
        public count: number,
        public vias: Via,
        public ok:boolean,
        public orderName: number = 0,
     ) {}
 }
