export class User {
    public userId: Number;
    public password: string;
    public userName: string;
    public isAdmin: Number;
    public createdBy: String;
    public modifiedBy: String;
    
   

    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }
}
