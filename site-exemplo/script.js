const NOVO_TEXTO ="Detalhes: Estou cursando Redes de Computadores pelo PROFITEC em parceria com a Universidade Estadual do Maranhão-UEMA!"
function mudarConteudo() {
    let paragrafo = document.getElementById("paragrafo-dinamico");
    paragrafo.textContent = NOVO_TEXTO;
}
let botao = document.getElementById("btn-mudar-texto");
botao.addEventListener("click", mudarConteudo);
