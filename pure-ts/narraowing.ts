
//type narrowing
function countTruthy(arg: null | string | number): boolean {
    if(arg){ 
        if(typeof arg==="string"){
            if(arg!="") return true;
            else return false;
        }
        else{
            return arg==0?false:true;
        }
    }
    else return false;
}

//the in operator narrowing

interface WildAnimal{
    name: string,
    isWild: boolean;
}
interface PetAnimal{
    name: string,
    isPet: boolean
}

function isPet(arg: WildAnimal | PetAnimal): boolean{
    if("isPet" in arg) return true;
    return false;
}

//instanceof narrowing

type Fish = {swim():void}
type Dog = {bark():void}
function isDog(pet: Fish | Dog): pet is Dog{ //here if true is returned then it will be converted to dog
    return (pet as Dog).bark!==undefined;
            //typecasting pet as Dog
}

function getPet(animal: Fish | Dog):string{
    if(isDog(animal)){
        
        return "It is dog";
    } 
     
    return "It is fish";
}

//discriminated union
 
//have a common property kind in all the interfaces to identify the interface
interface Square{
    kind: "square",
    side: number;
}

interface Circle{
    kind: "circle",
    radius: number;
}

interface Rectangle{
    kind: "rectangle",
    length: number,
    breadth: number
}

type Shape= Square | Circle;

function getTrueShape(shape: Shape):string{
    if(shape.kind=="circle") return "It is circle";
    else return "it is square";
}

//exhaustive check - just use switch case instead of if else so that if in future new Shape is added the flow wont break

//this type is future proof
function getTrueShape2(shape: Shape):string{
    switch(shape.kind){
        case "circle":
            return "It is circle";
        case "square":
            return "It is square";
        default: // best for future proof 
            const _futureProof: never = shape;
            return _futureProof;
    }
}
export {};