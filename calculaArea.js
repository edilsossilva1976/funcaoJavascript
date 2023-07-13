function calculaArea(base, altura){
    return base * altura;
}

let base = prompt("Valor da base: ");
base = parseInt(base);
let altura = prompt("Valor da altura: ");
altura = parseInt(altura);

alert("Resultado: " + calculaArea(base, altura))
