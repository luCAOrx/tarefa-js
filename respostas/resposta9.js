let fahrenheit = prompt('Informe a temperatura em Fahrenheit');

fahrenheit = parseFloat(fahrenheit);

let celsius = 5 * (fahrenheit -32) / 9;

alert(fahrenheit.toFixed(2) + 'ºF correspondem a ' +celsius.toFixed(2) + 'ºC');
