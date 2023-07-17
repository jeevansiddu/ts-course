class Hero {
  //   constructor() {}
  @testDecorator2
  color: string = "red";

  get formattedColor(): string {
    return `the color is ${this.color}`;
  }

  @logError
  error(): never {
    throw new Error();
  }

  @logErrorWithMessage("Custom error message")
  errorwithmsg(): never {
    throw new Error();
  }
  @testDecorator
  pilot(): void {
    console.log(" hello Pilot");
  }
}

// function testDecorator(
//   target: any,
//   key: string,
//   desc: PropertyDescriptor
// ): void {
//   console.log(target, desc);
//   console.log(`Key: ${key}`);
// }

function testDecorator(
  target: any,
  key: string,
  desc: PropertyDescriptor
): void {
  let method = desc.value;
  method = () => {
    console.log("This method changed");
  };
  desc.value = () => {
    try {
      method();
    } catch (e) {
      console.log("Sorry this is a error");
    }
  };
}
function testDecorator2(target: any, key: string): void {
  console.log(target.color); //this will be undefined as color is an instance property which will be initialised only after object initialisation  and target is the prototype which wont contain instance properties
}
function logError(target: any, key: string, desc: PropertyDescriptor) {
  const method = desc.value;
  desc.value = () => {
    try {
      method();
    } catch (e) {
      console.log("Sorry this is error");
    }
  };
}

function logErrorWithMessage(errorMsg: string) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const method = desc.value;
    desc.value = () => {
      try {
        method();
      } catch (e) {
        console.log(errorMsg);
      }
    };
  };
}
new Hero().pilot();
new Hero().error();
new Hero().errorwithmsg();
