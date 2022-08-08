function calcularora(){
    const operacao =Number(prompt("escolha uma opção:\n 1- Soma(+)\n 2- Subtracao(-)\n 3- Divisão(/)\n 4- Multiplicacao(*)\n"));


let n1=Number(prompt("Digite o primeiro valor"));
let n2=Number(prompt("Digite o segundo valor"));
let resultado;

function soma(){
    resultado=n1+n2;
    alert(`${n1} + ${n2} = ${resultado}`);
}
function subtracao(){
    resultado=n1-n2;
    alert(`${n1} - ${n2} = ${resultado}`);
}
function divisao(){
    resultado=n1/n2;
    alert(`${n1} / ${n2} = ${resultado}`);
}
function multiplicacao(){
    resultado=n1*n2;
    alert(`${n1} * ${n2} = ${resultado}`);
}

if (operacao==1){
    soma();
}
else if (operacao==2){
    subtracao();
}
else if (operacao==3){
    divisao()
}
else if (operacao==4){
    multiplicacao()
}
}
calcularora()



