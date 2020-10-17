let celcius = prompt('Informe a temperatura em celcius');

celcius = parseFloat(celcius);

let fahrenheit = 1.8 * celcius + 32;

alert(celcius.toFixed(2) + 'ºC correspondem a ' +fahrenheit.toFixed(2) + 'ºF');
