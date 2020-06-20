/**
 * Model account
 */
export class Cuenta {
    /**
     * Model account
     * 
     * @param name Name accounting account
     * @param cuenta Number account
     * @param _id Identifier accounting account
     */
    constructor(
        public name:String,
        public cuenta: number,
        public _id?: String,
    ){}
}

