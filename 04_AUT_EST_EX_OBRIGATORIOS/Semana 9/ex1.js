function calcule(){
    debugger
    var number = document.getElementById("valor").value;
    centena = Number(number[0]);
    if (number >= 100 && number != ""){
        if (centena % 2 == 0){
            resultado = "A centena é par";
        } else {
            resultado = "A centena é ímpar";
        }
    } else{
        resultado = "Digite um número válido"
    }
    document.getElementById("resultado").innerHTML = resultado 
}

function soma(){
    var number = document.getElementById("valor1").value
    var resultado = 0
    for(var i = 0; i!= number.length; i++){
        numero = parseInt(number[i]);
        resultado += numero
    }
    document.getElementById("resultado1").innerHTML = resultado
}

function nomes(){
    var nome1 = document.getElementById("nome1").value
    var nome2 = document.getElementById("nome2").value
    var nome3 = document.getElementById("nome3").value
    var nomes = [nome1, nome2, nome3];
    nomes = nomes.sort();
    document.getElementById("resultado2").innerHTML = nomes
}


function sequencia(){
    var n = document.getElementById("n1").value;
    n = parseInt(n);
    var cont = 1;
    var n1 = 0;

    if (n == 1){
        document.getElementById("resultado3").innerHTML = "A sequência é: 1";
    }
    if (n == 2){
        document.getElementById("resultado3").innerHTML = "A sequência é: 1, 1, ";
    }
    if (n == 3){
        document.getElementById("resultado3").innerHTML = "A sequência é: 1, 1, 2";
    }else{
        final2 = [];
        var final = 2;
        while (cont < (n-2)){
            final = final+ cont;
            final2.push(final);
            cont++
        };
        document.getElementById("show").innerHTML = "a sequência é: 1, 1, 2, " + final2;
    }

}

function primo(){
    debugger
    var min = Number(document.getElementById("min").value)
    var max = Number(document.getElementById("max").value)
    var lista = [];

    if (min > 0){
        lista = [1, 2]
    }

    for(let i = min; i <= max; i++){
        if (i > 2){
            var cont = 0;
            for (let index = 2; index < i; index++){
                if (i % index == 0){
                    cont++
                }
            }
            if(cont == 0){
                lista.push(i);
            }
        }
    }
    document.getElementById("show1").innerHTML = lista;
}