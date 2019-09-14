// Создаем тип для обьектов или классов

interface Rect {
  readonly id: string,
  color?: string,
  size: {
    width: number,
    height: number
  }
}

const rect1: Rect = {
  id: '123',
  size: {
    width: 20,
    height: 30
  },
  color: '#ccc'
}

const rect2: Rect = {
  id: '231',
  size: {
    width: 20,
    height: 30
  },
};
rect2.color = 'black';
// rect2.id = '5'; // read only

// Пустой обьект с интерфейсом Rect
const rect3 = {} as Rect;
// Альтернативная старая запись
const rect4 = <Rect>{};

// ===============================================  Наследование интерфейсов //

interface RectWithArea extends  Rect {
  getArea: () => number  // возврат number
}

const rect5: RectWithArea = {
  id: '123',
  size: {
    width: 20,
    height: 30
  },
  getArea() {
    return this.size.width * this.size.height;
  }
};

// ======================= Наследование интерфейсов Классами

interface IClock {
  time: Date,
  setTime(data: Date): void
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(data: Date): void {
    this.time = data
  }
}

// ===================== интерфейс для обьекта с большим количеством динамических ключей

interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderBottom: '5px'
}