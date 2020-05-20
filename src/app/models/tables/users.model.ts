/**
 * Model table user
 */
export class UserTable {
    /**
     * Model table user
     * 
     * @param count Number records
     * @param from From record
     * @param limit Limit records
     * @param users  Model user
     */
    constructor(
        public count:number,
        public from:number,
        public limit:number,
        public users:Users
    ){}
}

/**
 * Model user
 */

class Users {
    /**
     * @ignore
     */
    constructor(
    public rol:String,
    public _id:String,
    public name:String,
    public email:String,
    public img:String="",
    ){}
}