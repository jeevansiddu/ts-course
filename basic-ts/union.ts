 let score: number | string = 5;
 score="5"; //a;\llowed

 type User = {
    name: string,
    id: number
 }

 type Admin = {
    username: string,
    accessible: boolean
 }

 let user1: User | Admin = {name: "jeevan",id: 1};
 user1 = {username: "siddu",accessible: true ,id:1} //also allowed

 function getId(id : number | string){
    // console.log(id.toUpperCase()); // only comman attributs for both number and string will work
    if(typeof id === "string"){
        console.log(id.toLowerCase()); //now will work
    }
    else{
        console.log(id.toString());
    }
}

let arr1: number[] =[1,2,3];
let arr2: string[] =["1","2","3"];
let arr3: (string | number)[] = [1,"2","3"]; //can be a combination of both number and string array

let seat: "window" | "aisle"
seat="window"; //allowed
// seat="middle"; // not allowed

 export {}
