import {Subgrupo} from '../subgrupo.model';
/**
 * Table model of accounting subgroup
 */
export class SubgrupoTable {
    /**
     * Model table subgroup
     * 
     * @param count Total number of records
     * @param subgrupos Model subgroup
     * @param ok State
     * @param orderSubgrupo Order default
     * @param orderName Order default
     */
    constructor(
        public count:number,
        public subgrupos: Subgrupo,
        public ok: boolean,
        public orderSubgrupo: number = 1,
        public orderName: number = 0,
    ){}

}