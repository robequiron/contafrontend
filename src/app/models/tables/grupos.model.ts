import { Grupo } from '../grupo.model';
/**
 * Table model of accounting group
 */

export class GrupoTable {
    /**
     * Model table group
     * 
     * @param count Total number of records
     * @param grupos Model groups
     * @param ok State
     * @param orderGrupo Order default
     * @param orderName Order default
     */
    constructor(
        public count:number,
        public grupos:Grupo,
        public ok: boolean,
        public orderGrupo: number =1,
        public orderName: number = 0,
    ) {}
    
}