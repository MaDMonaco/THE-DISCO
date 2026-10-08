/* CARRINHO */
 
let totalItens = 0;
 
 
/* ELEMENTOS DO CATALOGO */
 
const botaoShop = document.getElementById("botaoShop");
 
const catalogo = document.querySelector(".catalogo");
 
const contadorCarrinho =
    document.getElementById("contadorCarrinho");
 
const botoesAdicionar =
    document.querySelectorAll(".botao-adicionar");
 
const vinis =
    document.querySelectorAll(".vinil");
 
 
/* EVENTO CLICK - SHOP */
 
if (botaoShop) {
 
    botaoShop.addEventListener("click", function () {
 
        catalogo.classList.add("shop-ativo");
 
    });
 
}
 
 
/* EVENTO CLICK - ADICIONAR DISCO */
 
botoesAdicionar.forEach(function (botao, indice) {
 
    botao.addEventListener("click", function () {
 
        const vinil = vinis[indice];
 
        let quantidade =
            Number(vinil.getAttribute("data-contador"));
 
        quantidade++;
 
        vinil.setAttribute(
            "data-contador",
            quantidade
        );
 
 
        const contador =
            vinil.querySelector(".contador-item");
 
        contador.textContent = quantidade;
 
 
        totalItens++;
 
        contadorCarrinho.textContent =
            totalItens + "+";
 
 
        vinil.classList.add("selecionado");
 
    });
 
});
 
 
/* EVENTO MOUSEOVER */
 
vinis.forEach(function (vinil) {
 
    vinil.addEventListener("mouseover", function () {
 
        vinil.classList.add("passou-mouse");
 
    });
 
});
 
 
/* EVENTO MOUSEOUT */
 
vinis.forEach(function (vinil) {
 
    vinil.addEventListener("mouseout", function () {
 
        vinil.classList.remove("passou-mouse");
 
    });
 
});
 
 
/* CRIAR OPCOES DOS FILTROS */
 
function criarOpcoes(filtro) {
 
    const cards =
        document.querySelectorAll(".vinil");
 
    const valores = [];
 
 
    cards.forEach(function (card) {
 
        const valor =
            card.getAttribute("data-" + filtro);
 
 
        if (
            valor &&
            !valores.includes(valor)
        ) {
 
            valores.push(valor);
 
        }
 
    });
 
 
    return valores;
}
 
 
/* MOSTRAR OPCOES */
 
function mostrarOpcoes(filtro) {
 
    const container =
        document.getElementById(
            "opcoes-" + filtro
        );
 
 
    const containers =
        document.querySelectorAll(
            ".opcoes-filtro"
        );
 
 
    containers.forEach(function (item) {
 
        if (item !== container) {
 
            item.classList.remove("ativo");
 
        }
 
    });
 
 
    container.innerHTML = "";
 
 
    const valores =
        criarOpcoes(filtro);
 
 
    valores.forEach(function (valor) {
 
        const botao =
            document.createElement("button");
 
 
        botao.textContent = valor;
 
 
        /* CLICK NAS OPCOES */
 
        botao.addEventListener(
            "click",
            function () {
 
                filtrarCards(
                    filtro,
                    valor
                );
 
 
                container.classList.remove(
                    "ativo"
                );
 
            }
        );
 
 
        container.appendChild(botao);
 
    });
 
 
    container.classList.toggle("ativo");
 
}
 
 
/* FILTRAR CARDS */
 
function filtrarCards(filtro, valor) {
 
    const cards =
        document.querySelectorAll(".vinil");
 
 
    cards.forEach(function (card) {
 
        card.style.display = "none";
 
    });
 
 
    const selecionados =
        document.querySelectorAll(
            '[data-' + filtro + '="' + valor + '"]'
        );
 
 
    selecionados.forEach(function (card) {
 
        card.style.display = "flex";
 
    });
 
}
 
 
/* BOTOES DOS FILTROS */
 
const botoesFiltro =
    document.querySelectorAll(
        ".botao-filtro"
    );
 
 
botoesFiltro.forEach(function (botao) {
 
 
    /* EVENTO CLICK */
 
    botao.addEventListener(
        "click",
        function () {
 
            const filtro =
                botao.getAttribute(
                    "data-filtro"
                );
 
 
            if (filtro) {
 
                mostrarOpcoes(filtro);
 
            }
 
        }
    );
 
 
    /* EVENTO FOCUS */
 
    botao.addEventListener(
        "focus",
        function () {
 
            botao.classList.add(
                "focado"
            );
 
        }
    );
 
 
    /* EVENTO BLUR */
 
    botao.addEventListener(
        "blur",
        function () {
 
            botao.classList.remove(
                "focado"
            );
 
        }
    );
 
 
    /* EVENTO KEYDOWN */
 
    botao.addEventListener(
        "keydown",
        function (evento) {
 
            if (evento.key === "Enter") {
 
                botao.click();
 
            }
 
        }
    );
 
});
 
 
/* SHOW ALL */
 
const mostrarTodos =
    document.getElementById(
        "mostrarTodos"
    );
 
 
if (mostrarTodos) {
 
    mostrarTodos.addEventListener(
        "click",
        function () {
 
            const cards =
                document.querySelectorAll(
                    ".vinil"
                );
 
 
            cards.forEach(function (card) {
 
                card.style.display = "flex";
 
            });
 
        }
    );
 
}
 
 
/* ESC FECHA OS FILTROS */
 
document.addEventListener(
    "keydown",
    function (evento) {
 
        if (evento.key === "Escape") {
 
            const opcoes =
                document.querySelectorAll(
                    ".opcoes-filtro"
                );
 
 
            opcoes.forEach(function (opcao) {
 
                opcao.classList.remove(
                    "ativo"
                );
 
            });
 
        }
 
    }
);