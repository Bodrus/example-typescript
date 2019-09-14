interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person // 'name' | 'age'
const key: PersonKeys = 'name'

type User = {
  _id: number
  name: string
  email: string
  createdDate: Date
}

// создаем новый тип на основе User но не включающий некоторые поля
type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdDate' > // данные поля исключаем

// другой способ
//type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // данные поля оставляем, остальное удаляем

let user1: UserKeysNoMeta = 'name';
// let user2: UserKeysNoMeta2 = '_id'
