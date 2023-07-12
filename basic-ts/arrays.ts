// const heros = [];
// heros.push("hff"); //wont work

const heros: string[] = [];
heros.push("jeevan");
heros.push("siddu");

//both declarations are completely valid
const power: number[] = [];
const pow: Array<number> = [];

type User = {
    name: string,
    id: number
} 

const allUsers: User[] = [];
// allUsers.push({}); error
allUsers.push({name: "jeev",id: 12});

//to denote a 2dimensional array
const twoDArray: number[][] = [
    [5,3,1],
    [1,3.5,3]
]
export {}