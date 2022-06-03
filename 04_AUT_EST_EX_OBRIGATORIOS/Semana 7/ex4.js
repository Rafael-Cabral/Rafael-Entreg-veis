function precoAereo(){
    let tempo = document.getElementById("periodo").value;
    let numPessoas = document.getElementById("pessoas").value;
    numPessoas = parseInt(numPessoas)
    let preco = 0;

    if (tempo == "diurno"){
        if (numPessoas > 50){
            preco = numPessoas*200*0.6
        }else{
            preco = numPessoas*200
        }
    }else{
        if(numPessoas > 50){
            preco = numPessoas*100*0.8
            preco = numPessoas*100
        }
    }
    document.getElementById("show").innerHTML = preco + " reais.";
}