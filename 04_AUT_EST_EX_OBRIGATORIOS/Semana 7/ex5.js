let i;


function criarLista() {
/*     debugger */
    const numeroAlunos = document.getElementById("inputAlunos").value;
    parseInt(numeroAlunos);
    for (i = 0; i < numeroAlunos; i++) {
        document.getElementById("loopProva").innerHTML +=

            `<div id="prov" class="col-6">
                <input id="${i}" type="number" placeholder="Nota da prova do aluno: ">
            </div>`;
        document.getElementById("loopTrabalho").innerHTML +=

            `<div id="trab" class="col-6">
                <input id="tr${i}" type="number" placeholder="Nota do trabalho do aluno: ">
            </div>`; 
    }
}
function calc(){
    debugger
    const numeroAlunos = document.getElementById("inputAlunos").value;
    for (i = 0; i< numeroAlunos; i++){
        var numProv = document.getElementById(`${i}`).value;
        var numTrab = document.getElementById(`tr${i}`).value;
        numProv = parseInt(numProv);
        numTrab = parseInt(numTrab);
        var geral = 0;
        var medProv = 0;
        var medTrab = 0;
        geral = geral + (numProv + numTrab)/numeroAlunos;
        var media = (numProv*2 + numTrab*3)/5;
        medProv = medProv + (numProv)/numeroAlunos;
        medTrab = medTrab + (numTrab)/numeroAlunos;
        document.getElementById("aparecer").innerHTML += 
        `<div id="show">
            <p1>A média do aluno ${i+1} é: ${media}</p1>
        </div>`; 
    }
}
