function notas() {
    debugger
    let price = document.getElementById("preco").value;

    let cont100 = 0;
    let cont50 = 0;
    let cont20 = 0;
    let cont10 = 0;
    let cont5 = 0;
    let cont2 = 0;
    let cont1 = 0;



    if (price >= 100) {
        cont100 = Math.floor(price / 100);
        price = price - (cont100 * 100);
    };
    if (price >= 50) {
        cont50 = Math.floor(price / 50);
        price = price - (cont50 * 50);
    };
    if (price >= 20) {
        cont20 = Math.floor(price / 20);
        price = price - (cont50 * 50);
    };
    if (price >= 10) {
        cont10 = Math.floor(price / 10);
        price = price - (cont10 * 10);
    };
    if (price >= 5) {
        cont5 = Math.floor(price / 5);
        price = price - (cont5 * 5);
    };
    if (price >= 2) {
        cont2 = Math.floor(price / 2);
        price = price - (cont2 * 2);
    };
    if (price > 0) {
        cont1 = 1;
    };
    document.getElementById("show").innerHTML =
        "notas 100: " + cont100 + " notas 50: " + cont50 + " notas 20: " + cont20 +
        " notas 10: " + cont10 + " notas 5: " + cont5 + " notas 2: " + cont2 + " notas 1: " + cont1;
}