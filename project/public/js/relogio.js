setInterval(function () {

    let novaHora = new Date();
    // getHours trará a hora
    // geMinutes trará os minutos
    // getSeconds trará os segundos
    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();
    let segundo = novaHora.getSeconds();
    // Chamamos a função zero para que ela retorne a concatenação
    // com os minutos e segundos
    minuto = zero(minuto);
    segundo = zero(segundo);
    // Com o textContent, iremos inserir as horas, minutos e segundos
    // no nosso elemento HTML
    document.getElementById('hora').textContent = hora + ':' + minuto + ':' + segundo;
}, 1000)
// A function zero concatena a string (número) 0 em frente aos números
// mantendo o zero na frente dos números menores que 10. Exemplo:
// 21:05:01
// 21:05:02
// e assim, sucessivamente
function zero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}
