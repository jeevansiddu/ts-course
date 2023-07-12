const arr: Array<string> = [];

//can accept only number and return only number
function identityOne(arg: number): number{
    return arg;
};


function identityTwo(arg: any): any{
    return arg;
}


interface person{
    age: number,
    sex: string
}

function identity<Type>(arg: Type): number {
    if("age" in arg){
        return arg.age;
    }
    return 5;
}

identity<person>({age: 5,sex: "male"});
// identity({age: 5,sex: "male"});

function identityFive<t>(arg: t[]): t{
    return arg[2];
}

//generics in arrow function
const identitySix = <T>(arg: T[]): T=>{
    console.log(arg.length); //will work here    
    return arg[0];
}

interface DB {
    name: string,
    id: string
}

function identitySeven<T, U extends number /*(or) U extends DB */>(arg1: T, arg2: U): object{
    return{ 
        arg1,arg2
    }
}

// identitySeven(55,"65"); //"65" throws error as we said U extends number that arguments must be some type of number
identitySeven("hello",90.76);

//Generics class
class Sellable<T>{
    public cart: T[]=[];
    addToCart(products: T){
        this.cart.push(products);
    }
}
  