import { onEvent, setScreen } from './lib/code.org.js';

let carteira = prompt("QUANTO VOCÊ POSSUI NA CARTEIRA?"); 
let economia = prompt("QUANTO VOCÊ QUER ECONOMIZAR?");
let extrato = [];
const comida = 18.00; 
const circo = 15.00; 
const brinquedo = 13.00;

document.querySelector("#wallet").innerHTML = carteira;

const addTransacao = (nome, valor) => {
    carteira -= valor;
    alert(`Você gastou R$ ${valor} com ${nome}!`);
    extrato.push({ nome, valor, data: new Date() });
    document.querySelector("#wallet").innerHTML = carteira;
    if (carteira < economia) {
        document.querySelector("body").style.background = "linear-gradient(to bottom, #FF4040 0%, #FF4040 100%)";
        alert("ATENÇAO! Você atingiu seu limite de gastos");
    }
}

onEvent("comida", "click", () => addTransacao("comida", comida));
onEvent("brinquedo", "click", () => addTransacao("brinquedo", brinquedo));
onEvent("circo", "click", () => addTransacao("circo", circo));

onEvent("go-extrato", "click", () => {
    let mensagem = extrato.map(t => `R$ ${t.valor} gastos com ${t.nome} em ${t.data.toLocaleString()}`).join("\n");
    alert(`${mensagem}\nSeu saldo atual é de R$ ${carteira}.\nSua meta de gastos era de R$ ${economia}`); 
});