api = 'http://127.0.0.1:3061'

function enviar(email, mensagem){
    document.getElementById('email').value='';
    document.getElementById('mensagem').value='';
    alert("Enviado")
    $.ajax({
        type: 'POST',
        url: api + '/email',
        data: {email: email, mensagem:mensagem}
    }).done(function () {
    }).fail(function (msg) {
    }).always(function (msg) {
    });
}