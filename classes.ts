class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return name
  }
}

class Car {
  readonly model: string
  readonly  numberOfWheels: number = 3

  constructor(theModel: string) {
    this.model = theModel // можем перезаписать только в конструкторе
  }
}

// Короткая запись (выше кода) принятия параметра конструктором
class Car2 {
  readonly numberOfWheels: number = 4

  constructor(readonly model: string) {
    this.model = model;
  }
}



// Модификаторы - три вида protected, private, public(по умолчанию)
// Protected - доступен всем прямым наследникам класса
// Private - доступны только в том классе где были определены

class Animal {
  protected voice: string = ''
  public color: string = 'black'

  private go() {
    console.log('GO')
  }
}

class Cat extends Animal {
  setVoice(voice: string): void {
    this.voice = voice
  }
 }

// !!!! у инстанса  класса (cat), уже нет доступа к св-ам Protected
const cat = new Cat();


//  абстрактные классы - они не компилируются но от них можно наследоваться
abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AddComponent extends Component {
  render(): void {
    console.log('JBIYGIGI')
  }

  info(): string {
    return "INFO";
  }
}





















