carro = document.getElementById('carro')
valor = document.getElementById('valor');
combustivel = document.getElementById('combustivel');
desconto = 0;

function calcularDesconto(){
  if (combustivel.value == 'g'){
    // 21% gasolina
    desconto = .21;
  }else if (combustivel.value == 'a'){
    // 25% alcool
    desconto = .25;
  }else{
    //14% disel
    desconto = .14;
  }  
  resultado = (valor.value - (valor.value * desconto)).toFixed(2)

  document.getElementById('resultado').innerHTML = `
    <h3 id="resultado-title">Resultados:</h3>
    <p id="resultado-value">Modelo do Carro: ${carro.value} </p>
    <p id="resultado-value">Valor com desconto: R$${resultado} </p>
    <p id="resultado-value">Valor do desconto: R$${(valor.value * desconto).toFixed(2)} </p>
    <p id="resultado-value">Porcetagem do desconto: ${(desconto * 100).toFixed(0)}% </p>
  `;
}