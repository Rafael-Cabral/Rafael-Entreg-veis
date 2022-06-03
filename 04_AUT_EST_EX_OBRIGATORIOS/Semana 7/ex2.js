function troca(){
    let text1 = document.getElementById("texto1").value;
    let text2 = document.getElementById("texto2").value;
    let textTroca = text1;

    document.getElementById("texto1").value = text2;
    document.getElementById("texto2").value = textTroca;


}