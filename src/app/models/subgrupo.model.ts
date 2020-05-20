/**
 * Model subgrupo
 */
 export class Subgrupo {
    /**
     * Model subgroup
     * 
     * @param grupo Id Accounting group
     * @param subgrupo Number subgroup
     * @param name Name accounting subgroup
     * @param _id Identifier accounting subgroup
     */
    constructor(
        public grupo: String,
        public subgrupo: Number,
        public name: String,
        public _id?: String,
    ){}
 }