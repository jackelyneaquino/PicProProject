/* pega os botões onde estão os tipos de transferências */
const listaOpcoes = document.querySelector(".sobreTransacoes");
console.log(listaOpcoes);

/* evento de clique */
listaOpcoes.addEventListener("click", identificaOpcoes);

function identificaOpcoes(event) {
  /* puxa o conteúdo que irá aparecer na tela */
  const elemento = event.target;

  if (elemento.tagName === "LI") {
    /* pega o id dos 4 botões de tipos de transferências */
    const id = elemento.id;

    /* pega todos os data-id que estão dentro de uma div */
    const secaoEscolha = document.querySelector(`div[data-id="${id}"]`);

    /* remove todas as classes ativo antes de adicionar novamente */
    removeClasseAtivo();

    /* adiciona classe ativo */
    secaoEscolha.classList.add("ativo");
  }
}

/* função pra remover a classe ativo */
function removeClasseAtivo() {
  /* seleciona todas as divs dentro da classe bgTransacoes */
  const divs = document.querySelectorAll(".bgTransacoes .container div");

  /* enquanto i for menor que divs.length irá mostrar adicionar o conteúdo existente */
  for (let i = 0; i < divs.length; i++) {
    /* em todos os index da variável divs irá ser removido a classe ativo */
    divs[i].classList.remove("ativo");
  }
}