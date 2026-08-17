function pesquisarProduto() {
    let pesquisa = document.getElementById("pesquisa").value.trim();

    if (pesquisa !== "") {
        location.href = "produtos.html?pesquisa=" + encodeURIComponent(pesquisa);
    }
}