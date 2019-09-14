// указываем что это за обьект и из чего он состоит
const arrayOfNumbers: Array<number> = [1, 2, 3]
const  arrayOfStrings: Array<string> = ['Hello', 'Max']

// одна и та же функция работает с разными данными
// ф работает с типом Т принимает масив типа Т и возвращает масив типа Т
const reverse = <T> (arr: T[]): T[] => {
  return arr.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)

// Дженерик будет подстраиваться под тип входящего масива