const botaoTopo = document.getElementById("voltarTopo");

botaoTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
const banners = [
    "assets/img/banner1.jpg",
    "assets/img/banner2.jpg",
    "assets/img/banner3.jpg"
];

let indice = 0;

const imagemBanner = document.getElementById("banner");

document.querySelector(".direita").addEventListener("click", () => {
    indice++;

    if (indice >= banners.length) {
        indice = 0;
    }

    imagemBanner.src = banners[indice];
});

document.querySelector(".esquerda").addEventListener("click", () => {
    indice--;

    if (indice < 0) {
        indice = banners.length - 1;
    }

    imagemBanner.src = banners[indice];
});

// Troca automática a cada 5 segundos
setInterval(() => {
    indice++;

    if (indice >= banners.length) {
        indice = 0;
    }

    imagemBanner.src = banners[indice];
}, 5000);

function pesquisarProduto() {

    const texto = document.getElementById("pesquisa").value.trim();

    if (texto !== "") {
        window.location.href =
            "produtos.html?pesquisa=" + encodeURIComponent(texto);
    }

}