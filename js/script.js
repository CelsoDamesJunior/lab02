/*
var verificarPalindromo = () => {
    let texto = document.getElementById("frase").value;
    let textoList = texto.split(""); //transformar string => array
    let textoInvertidoList = [];
    textoList.forEach((letra)=>{
            textoInvertidoList.unshift(letra); //unshift acrescenta elementos no início do array.
    });
    let paragrafo = document.getElementById("resposta");
    let resp = "";
    if(textoInvertidoList.join("") == texto){ //transformar array => string e testar
        resp =`O texto <q><strong>${texto}</strong></q> é um palíndromo`}
    else{
        resp = `O texto <q><strong>${texto}</strong></q>  não é um palíndromo`
        }
        paragrafo.innerHTML = resp;
    }
window.onload = function (){
    let btTestar = document.getElementById("testar");
    btTestar.addEventListener("click",verificarPalindromo);
}*/
function inverteString(){
    let texto = document.getElementById("stringparainverter").value;
    let textoInvertido=texto.split('').reverse().join('');
    let paragrafo = document.getElementById("respostainversao");
    paragrafo.innerHTML = textoInvertido;
}
function negritoVogais(){
    let texto = document.getElementById("fraseparavogais").value;
    let divide=texto.replace("a","<b>a<b>");
    divide=texto.replace("e","<b>e<b>");
    divide=texto.replace("i","<b>i<b>");
    divide=texto.replace("o","<b>o<b>");
    divide=texto.replace("u","<b>u<b>");
    console.log(divide);
    let paragrafo = document.getElementById("respostanegrito");
    paragrafo.innerHTML = divide;
}
function contagemString(){
    let frase = document.getElementById("fraseparacontagem").value;
    let frasestring = frase.split(' ');
    function strincounter(frasestring, keepCase) {
        var obj = {};
        for (var i = 0; i < frasestring.length; i++) {
            if (!obj[frasestring[i]]) obj[frasestring[i]] = 0;
            obj[frasestring[i]]++;
        }
        return obj;
    }
    let respostacontagem = strincounter(frasestring);    
    console.log(respostacontagem);
    let respostacontagemtexto = document.getElementById("respostacontagem");
    respostacontagemtexto.innerHTML = Object.entries(respostacontagem);
}
window.onload = function (){
    let btTestarinversao = document.getElementById("testarinversao");
    btTestarinversao.addEventListener("click",inverteString);

    let btNegritoVogais = document.getElementById("testarnegrito");
    btNegritoVogais.addEventListener("click",negritoVogais);

    let btContagemString = document.getElementById("testarcontagem");
    btContagemString.addEventListener("click",contagemString);
}

