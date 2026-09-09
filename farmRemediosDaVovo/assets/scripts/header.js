function pesquisarProduto() {
    let pesquisa = document.getElementById("pesquisa").value.trim();

    if (pesquisa !== "") {
        location.href = "produtos.php?pesquisa=" + encodeURIComponent(pesquisa);
    }
}