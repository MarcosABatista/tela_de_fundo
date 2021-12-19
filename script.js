function relogio() {
  var data = new Date()
  var h = data.getHours()
  var min = data.getMinutes()

  if (h < 10) {
    h = '0' + h
  }
  if (min < 10) {
    min = '0' + min
  }
  var horas = h + ':' + min
  document.querySelector('.time').value = horas
}

var tempo = setInterval(relogio, 1000)

/* data */

// Obtém a data atual
var data = new Date()

// Guarda cada pedaço em uma variável
var dia = data.getDate() // 1-31
var dia_sem = data.getDay() // 0-6 (zero=domingo)
var mes = data.getMonth() // 0-11 (zero=janeiro)
var ano2 = data.getYear() // 2 dígitos
var ano4 = data.getFullYear() // 4 dígitos

// Formata a data e a hora (note o mês + 1)
var str_data = dia + '/' + (mes + 1) + '/' + ano4

document.querySelector('.data').value = str_data
