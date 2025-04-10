function calcularIMC() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value) / 100;

  if (!peso || !altura) {
    document.getElementById('resultado').innerText = 'Preencha todos os campos!';
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = '';

  if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
  } else if (imc < 24.9) {
    classificacao = 'Peso normal';
  } else if (imc < 29.9) {
    classificacao = 'Sobrepeso';
  } else if (imc < 34.9) {
    classificacao = 'Obesidade grau 1';
  } else if (imc < 39.9) {
    classificacao = 'Obesidade grau 2';
  } else {
    classificacao = 'Obesidade grau 3';
  }

  document.getElementById('resultado').innerText = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
}
