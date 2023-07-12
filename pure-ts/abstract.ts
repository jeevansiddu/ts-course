abstract class Vehicle {
    constructor(
        public wheels: number,
        public type: string
    ){}
    getWheels():  number{
        return this.wheels;
    }

    abstract getModel(): string;
}

class Car extends Vehicle {
    model: string;
    constructor(wheels: number,type: string,model :string){
        super(wheels,type);
        this.model=model;
    }
    getModel(): string {
        return this.model;
    }
}

const car = new Car(4,"sedan","maruti");