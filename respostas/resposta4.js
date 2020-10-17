 let nota1 = prompt('Informe a nota 1');
 let nota2 = prompt('Informe a nota 2');
 let nota3 = prompt('Informe a nota 3');
 let nota4 = prompt('Informe a nota 4');

 nota1 = parseFloat(nota1);
 nota2 = parseFloat(nota2);
 nota3 = parseFloat(nota3);
 nota4 = parseFloat(nota4);

 let media = (nota1 + nota2 + nota3 + nota4) / 4;

 alert('A média das notas é ' +media.toFixed(2));