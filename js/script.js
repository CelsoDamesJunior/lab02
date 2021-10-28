
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
function Substistring(){
    let fraseprocura =document.getElementById("fraseparaprocurar").value;
    let frasesubstituir = document.getElementById("fraseparasubstituir").value;
    let fraseparaprosub = document.getElementById("fraseparaprosub").value;
    let aux=fraseprocura;
    let substituto = fraseparaprosub.replace(fraseprocura,frasesubstituir);
    let respostaprocsubtexto = document.getElementById("respostaprocsub");
    respostaprocsubtexto.innerHTML = substituto;
}
function Datecalc(){
    let datanascimento1 =document.getElementById("datebase").value;
    let datanascimento2 =new Date(datanascimento1);
    let horaagora = new Date();
    const diff = Math.abs(horaagora.getTime() - datanascimento2.getTime()); // Subtrai uma data pela outra
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    console.log(days);
    let respostadatetexto = document.getElementById("respostadate");
    respostadatetexto.innerHTML = days;
}

window.onload = function (){
    let btTestarinversao = document.getElementById("testarinversao");
    btTestarinversao.addEventListener("click",inverteString);

    let btNegritoVogais = document.getElementById("testarnegrito");
    btNegritoVogais.addEventListener("click",negritoVogais);

    let btContagemString = document.getElementById("testarcontagem");
    btContagemString.addEventListener("click",contagemString);

    let btExecutaSub = document.getElementById("executasub");
    btExecutaSub.addEventListener("click",Substistring);

    let btDatecalc = document.getElementById("executadatebase");
    btDatecalc.addEventListener("click",Datecalc);
}

