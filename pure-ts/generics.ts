const arr: Array<string> = [];

//can accept only number and return only number
function identityOne(arg: number): number{
    return arg;
};

//accepts argument and returns any argument
function identityTwo(arg: any): any{
    return arg;
}


interface person{
    kind: "person",
    age: number,
    sex: string
}

function identity<Type extends person>(arg: Type ): number {
    if((arg as person).kind!==undefined){
        // return 55;
        return arg.age;
    }
    return 5;
}

function identityEight(arg: person): number {
    // if((arg as person).kind!==undefined){
        
        return arg.age;
    // }
    // return arg;
}

identity<person>({kind: "person",age: 5,sex: "male"});
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
  