let valorPorHoraTrabalhada = prompt('Informe o valor da sua hora trabalhada');
valorPorHoraTrabalhada = parseFloat(valorPorHoraTrabalhada)

let quantidadeHorasTrabalhadas = prompt('Informe quantas horas você trabalhou ao mês');
valorPorHoraTrabalhada = parseFloat(quantidadeHorasTrabalhadas);

let salarioMes = valorPorHoraTrabalhada * quantidadeHorasTrabalhadas;

alert('Seu salário neste mês é ' +salarioMes);