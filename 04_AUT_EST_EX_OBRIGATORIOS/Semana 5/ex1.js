function calc() {
    //debugger
    let num1 = document.getElementById("num1").value;
    num1 = parseInt(num1);
    let num2 = document.getElementById("num2").value;
    num2 = parseInt(num2);
    let operacao = document.getElementById("operacao").value;
    if (operacao == "soma") {
        var result = num1 + num2;
    }
    if (operacao == "subtracao") {
        var result = num1 - num2;
    }
    if (operacao == "multiplicacao") {
        var result = num1 * num2;
    }
    if (operacao == "divisao") {
        var result = num1 / num2;
    }
    if (operacao == "inteiroDiv") {
        var result = Math.floor(num1 / num2);
    }
    if (operacao == "restoDiv") {
        var result = num1 % num2;
    };

    document.getElementById("show").innerHTML = "O valor total da sua conta é: " + result;

}