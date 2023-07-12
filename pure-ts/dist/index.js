"use strict";
console.log("Typescript checking");
class User {
    constructor(name, id) {
        this.city = "";
        this._role = "sde";
        this.name = name;
        this.id = id;
    }
    get getid() {
        return this.id;
    }
}
let user = new User("jeevan", 90);
user.city = "10";
// user._role=""; //wont work
