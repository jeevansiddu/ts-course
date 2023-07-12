interface Animal {
    legs: number;
    breed: string;
    getType() : string;

}

interface petAnimal{
    isPet: boolean;
}

class lion implements Animal{
    legs: number;
    breed: string;
    constructor(legs: number, breed: string){
        this.legs=legs;
        this.breed=breed;
    }
    getType(): string {
        return "Sheperd";
    }
}

class Dog implements Animal,petAnimal{
    isPet=true;
    constructor(public legs: number, public breed: string){
    }
    getType(): string {
        return "Sheperd";
    }
}

