import { Sorter } from "./sorter";

export class NumbersCollection extends Sorter{
    collection: number[];
    constructor(collection: number[]){
        super();
        this.collection= collection;
    }
    get length() {
        return this.collection.length;
    }
    compare(left: number,right: number): boolean{
        return this.collection[left]>this.collection[right];

    }
    swap(left: number,right: number): void{
        let temp = this.collection[left];
        this.collection[left]=this.collection[right];
        this.collection[right]=temp;
    }
}