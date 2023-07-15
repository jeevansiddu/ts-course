import { Sorter } from "./sorter";

export class CharacterCollection extends Sorter{
    constructor(public collection: string){
        super();
    }
    get length(){
        return this.collection.length;
    }
    compare(i: number,j: number): boolean{
        return this.collection[i].toUpperCase()>this.collection[j].toUpperCase();
    }
    swap(i:number,j: number): void{
        let characters = this.collection.split("");
        let temp=characters[i];
        characters[i]=characters[j];
        characters[j]=temp;
        this.collection=characters.join("");

    }
}