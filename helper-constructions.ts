function strip(x: string | number) {
  if (typeof x === 'number') {
    return x
  }
  return x.toUpperCase()
}

////

class MyResponse {
  header = 'response header'
  result = 'response result'
}

class MyError {
  header = 'error header'
  message = 'error message'
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return res.header + res.result
  }
  return {
    info: res.header + res.message
  }
}

// ================================= часто встречается

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
  // ..
}

setAlertType( 'danger');
// setAlertType(  'default'); ошибка
