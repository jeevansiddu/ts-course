 function addFive(num: number) {
    return num+5;
 }

 console.log(addFive(10)+5);
 
 function signIn(email: string,pass: string,valid: boolean){}
 let login = (email: string,otp: number = 30): number=>{ // must return a number
    return otp;                          // here for otp 30 is passed as the default value
 }

 const k= login("jeevan",100);
 console.log(k);
 
 signIn("jeevan","siddu",true);

 let arr = ["thor","ironMan",1];

 console.log(arr.map((item): string=>{
    return `the item is ${item}`;
 }).join(" && "));

 function printError(errMsg: string):void{
    console.log(errMsg);
 } 

 function handleError(errMsg: string): never{
    throw new Error(errMsg); // best practice to use never return type while throwing errors 
 }