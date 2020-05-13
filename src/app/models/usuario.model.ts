/**
 * Model user
 */
export class Usuario {
    /**
     * Model user
     * 
     * @param name Name user
     * @param email Email user
     * @param password Passwor user
     * @param rol Rol user (SUPER_ROLE, ADMIN_ROLE, USER_ROLE)
     * @param _id Identifier user
     * @param img Image user 
     */
    constructor(
        public name:String,
        public email: String,
        public password: String,
        public rol: String = 'USER_ROLE',
        public _id?: String,
        public img?: String,
    ){}
}

