 interface User {
    readonly _id: number,
    name: string,
    isActive: boolean,
    emailId?: string, //optional
    getId(): string,
    getCoupon(name: string): number
 }

 //reopening of interface
//this is not possible in type
 interface User { // can add new properties later
    price: number,
    gitId?: string,
 }

 interface Admin extends User{
    AdminId: number,
    role: "admin"|"tl"|"beginner",
 }
 let user: User = {
    _id: 1,
    emailId: "j@j.com", // changing order while initializing is also allowed
    name: "jeevan",
    isActive: true,
    getId() {
        return "this is id";
    },
    getCoupon(couponName: "siddu"){
        return 20;
    },
    price: 500,
    gitId: "50",
 }

 let admin:Admin ={
     _id: 2,
    emailId: "j@j.com", // changing order while initializing is also allowed
    name: "siddu",
    isActive: true,
    getId() {
        return "this is id";
    },
    getCoupon(couponName: "siddu"){
        return 20;
    },
    price: 500,
    gitId: "50",
    AdminId: 101,
    role: "beginner"
 }