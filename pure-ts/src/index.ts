console.log("Typescript checking");

class User{
    public name: string;
    //private accessible only within this class
    private id: number; //not accessible from outside
    protected courseCount=1;
    private city="";
    readonly _role="sde";
    constructor(name: string,id: number){
        this.name=name;
        this.id=id;
    }
    get getId(): number{
        return this.id;
    }
    private deleteUser(): void{
        console.log("user deleted");
        
    }
    set setCity(value: string){ // set function don't have a return type
        this.city=value;
    }

    get getCity(): string{
        return this.city;
    }

}

class SubUser extends User{
    isFamily: boolean=true;
    changeCount(): void{
        this.courseCount++; 
    }

    getCount(): number{
        return this.courseCount;
    }

}
class User1{
    // public name: string;
    // private id: number; //not accessible from outside
    // city="";
    readonly _role="sde";

    //much shorter way alternate way to use this
    constructor(public name: string,private id: number){

    }
    get getId(): number{
        return this.id;
    }
}

let user = new User("jeevan",90);
user.setCity="chennai";
// user._role=""; //wont work
console.log(user.getId);
console.log(user.getCity);

let subUser = new SubUser("jeevan",90);
subUser.changeCount();
console.log(subUser.getCount());

// console.log(user.id);; can access it as it is a private variable

 
let user1 = new User1("jeevan",5);
console.log(user1.name);
