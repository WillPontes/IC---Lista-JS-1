/**** Escreva o código abaixo 👇******/

function somar(a, b){
    return a+b
}

function multiplicar(a, b){
    return a*b
}

function subtrair(a, b){
    return a-b
}


function dividir(a, b) {
  if (b === 0) {
    throw new Error("Erro: divisão por zero");
  }
  return a / b;
}




function calcularMedia(a, b, c, d){
    return (a+b+c+d)/4
    
}

function elevarPotencia (base, expoente){
    return base**expoente
}

function calcularAreaRetangulo (largura, altura){
    return largura*altura
}

function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "ímpar";
  }
}

function calcularRaizQuadrada(numero){
    return numero**(1/2)
}

function calcularHipotenusa(cateto1, cateto2){
    return (cateto1**2 + cateto2**2)**(1/2)
}



/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
