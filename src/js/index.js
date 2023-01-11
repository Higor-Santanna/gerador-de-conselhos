const botao = document.getElementById('button');
let conselhos = document.getElementById('conselhos');
let idDoConselho = document.getElementById('id-conselho');

botao.addEventListener("click", pegarUmConselho );

async function geradorDeConselhos(){
    const url = "https://api.adviceslip.com/advice";
    const resposta = await fetch(url);
    return await resposta.json();
}

async function pegarUmConselho(){
    const geradorDeConselho = await geradorDeConselhos();
    const conselhoGerado = geradorDeConselho.slip.advice;
    const idGerado = geradorDeConselho.slip.id;
    
    idDoConselho.innerHTML = `#${idGerado} `;
    conselhos.innerHTML = ` ${conselhoGerado} ` ;
}

pegarUmConselho();