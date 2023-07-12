//to accept an object

function createUser({name: string,dob: number}){

}
// createUser(); throws error
createUser({name: "jeevan",dob: 2612});

//functions returning an empty object
function getUser():{} /*Same as object */{
    return {};
}

//function returning object with properties
function getHello():{msg: string}{
    return {msg: "hello"};
}

//aliases
type User ={
    name: string,
    id: number,
    isActive: boolean
}

function updateUser(user: User): User{
    return {name: "jeev",id: 1,isActive: false};
}
updateUser({name: "jeev",id: 1,isActive: false});

type cardName = {
    name: string
}

type cardNumber ={
    num: number
}

type cardDetail = cardName & cardNumber & { //create new type based on previous type
    cvv: number
}
type Gamer ={
    readonly _id: number, //once set then cant be changed
    name: string,
    phNo: number,
    cardDetail?: cardDetail //? -> means optional
}

//valid
var g: Gamer= {
    _id: 1,
    name: "jeevan",
    phNo: 9999,
}

//Also valid
var g1: Gamer= {
    _id: 1,
    name: "jeevan",
    phNo: 9999,
    cardDetail:{
        name: "jeev",
        num: 9888,
        cvv: 99890
    }
}

// g1._id=5; Not possible