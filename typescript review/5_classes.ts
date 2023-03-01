class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

const clssObjectTypescript = new Typescript("ts");
const info: string = clssObjectTypescript.info("some text");
console.log(info);
console.log(clssObjectTypescript);

// class Car {
//   readonly model: string
//   readonly numberOfWheels: number = 4
//
//   constructor(theModel: string) {
//     this.model = theModel
//   }
// }

class Car {
  constructor(readonly model: string, readonly numberOfWheels: number) {}
}

const classObjectCar = new Car("ford", 4);
console.log(classObjectCar);

// ==============

class Animal {
  protected voice: string = "hello";
  public color: string = "black";

  constructor() {
    this.go();
  }

  private go() {
    console.log("Go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const animal = new Animal();

const cat = new Cat();
cat.setVoice("test");
console.log(cat.color);
// cat.voice

// =====================

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log("Component on render");
  }

  info(): string {
    return "This is info";
  }
}
