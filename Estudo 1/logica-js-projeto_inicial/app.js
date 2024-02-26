('Boas vindas ao jogo do número secreto');
let numeroMaximo = 50
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
// se chute for igual ao número secreto
if (chute == numeroSecreto) {
    break
} else {
    if (chute > numeroSecreto) {
        alert(`O número secreto e menor que o ${chute}`);
    } else {
        alert(`Onúmero secreto é maior que o ${chute}`);
    }
    //tentativas = tentativas +1;
    tentativas++;
}
}
//operador ternario
let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavratentativa}`);

/*if (tentativas > 1) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
*/