/**
 * Model grupo
 */
export class Grupo {
    /**
     * Model user
     * 
     * @param name Name accounting group
     * @param grupo Number group
     * @param _id Identifier accounting group
     */
    constructor(
        public name:String,
        public grupo: Number,
        public _id?: String,
    ){}
}

