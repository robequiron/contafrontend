import { Grupo } from '../grupo.model';

export class GrupoTable {
    /**
    * @Ignore 
    * */
    constructor(
        public count:number,
        public grupos:Grupo,
        public ok: boolean,
        public orderGrupo: number =1,
        public orderName: number = 0,
    ) {}
    
}