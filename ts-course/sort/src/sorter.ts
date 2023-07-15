import { Mappable } from "./Mappable";
import { NumbersCollection } from "./NumbersCollection"

export abstract class Sorter{
    abstract length: number;
    abstract compare(i: number,j: number): boolean;
    abstract swap(i: number,j: number): void;


    // constructor(public collection: Mappable){

    //     this.length= this.collection.length;
    // }
    sort(): void{
        for(let i=0;i<this.length-1;i++){
            for(let j=i+1;j<this.length;j++){
                if(this.compare(i,j)){
                    this.swap(i,j);
                }
            }
        }
    }
}