
const str: string = 'hello';
const isFetching: boolean = true;
let int: number = 42;

const numberArr: number[] = [1, 2, 3, 4];

// дженерик тип
const numberArr2: Array<number> = [1, 2, 3, 4];
//
const words: string[] = ['hello', 'hi'];

// Tuple
const contact: [string, number] = ['string', 2];

// Any
let variable: any = 42;
variable = 'hi';

// === void - нет возврата у функции
const sayMyName = (name: string): void => {
    console.log(name);
};

// Never  ( либо ошибка, либо замкнутая функция)
function throwError(message: string): never {
    throw new Error(message)
};

// Type  -   Создаем свои типы
type Login = string;
const login: Login = 'admin';

type ID = string | number
const key: ID = 1





