import { faker } from "@faker-js/faker";
import { Mappable } from "./mappable";
export class User implements Mappable{
    name: string;
    location: {
        lat: number;
        lng: number;
    }
    constructor(){
        this.name = faker.person.firstName();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude() 
        }
    }

    markerContent(): string{
        return `User name is : ${this.name}`;
    }
}

//faker package helps us to randomly generate a bunch of information