class ArrayOfNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}

//two classes are same but only the get return type is different for this we can use genrics

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

//now you can call a the array like
new ArrayOfAnything<string>(["a", "ffff", "fjfifj"]);
//or
new ArrayOfAnything(["a", "ffff", "fjfifj"]);
new ArrayOfAnything<number>([12, 444, 55664, 332]);

function printAnything<T>(arr: T[]): void {
  for (let item of arr) console.log(item);
}

printAnything<number>([1, 4, 5, 6]);
printAnything([1, 4, 5, 6]);

class House {
  print(): void {
    console.log("Im a House");
  }
}

class Car {
  print(): void {
    console.log("Im a car");
  }
}

interface Printable {
  print(): void;
}
function print<T extends Printable>(arr: T[]): void {
  for (let item of arr) {
    console.log(item.print());
  }
}

print<House>([new House(), new House()]);
print<Car>([new Car(), new Car()]);
print([new Car(), new Car()]);
// print<number>([2,4,56,5]); //this will throw error as number will not satisfy printable
