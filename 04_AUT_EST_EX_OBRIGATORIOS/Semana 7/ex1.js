function soma(){
    let quantidade = document.getElementById("quantProduto").value;
    quantidade = parseInt(quantidade);
    quantidade += 1;
    document.getElementById("quantProduto").value = quantidade;
}

function subtrai(){
    let quantidade = document.getElementById("quantProduto").value;
    quantidade = parseInt(quantidade);
    quantidade -= 1;
    document.getElementById("quantProduto").value = quantidade;
}