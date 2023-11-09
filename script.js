function formatarAltura(input) {
    let valorNumerico = input.value.replace(/[^\d,]/g, '');

    if (valorNumerico.length > 0) {
        input.value = valorNumerico.includes(',') ? valorNumerico : valorNumerico[0] + ',' + valorNumerico.slice(1);
    } else {
        input.value = valorNumerico;
    }
}

function calcularIMC() {
    const nome = document.getElementById('nome').value;
    const alturaString = document.getElementById('altura').value.replace(',', '.');
    const altura = parseFloat(alturaString);
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && alturaString !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I.';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II';
        } else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
    } else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }
}