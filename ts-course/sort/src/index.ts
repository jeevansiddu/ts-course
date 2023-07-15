import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedListCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./sorter";


const arr = new NumbersCollection([4,-1,9999,6,4,8]);
// let sorter = new Sorter(arr);
// sorter.sort();
//instead 
arr.sort();
console.log(arr.collection);

const strarr = new CharacterCollection("xkyqazxopaa");
// let sorter2= new Sorter(strarr);
strarr.sort();
console.log(strarr.collection);

// const linkedlist = new LinkedList();
// linkedlist.add(500);
// linkedlist.add(6);
// linkedlist.add(-90);
// linkedlist.add(223);

// const sorter3 = new Sorter(linkedlist);
// sorter3.sort();
// console.log((sorter3).print());
