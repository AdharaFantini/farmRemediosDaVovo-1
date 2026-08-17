// ===============================
// PRODUTOS
// ===============================

const produtos = document.querySelectorAll(".produto");

const contador = document.getElementById("contador");

const campoPesquisa = document.querySelector(".pesquisa input");

const botoesCategoria = document.querySelectorAll(".categoria");



// ===============================
// FILTRAR PRODUTOS
// ===============================

function filtrarProdutos() {
    
    let texto = campoPesquisa.value.toLowerCase();
    
    let categoriaAtiva = document.querySelector(".categoria.ativo")
        .dataset.categoria;
    
    
    let quantidade = 0;
    
    
    produtos.forEach(produto => {
        
        
        let nome = produto.querySelector("h3")
            .innerText.toLowerCase();
        
        
        let categoria = produto.dataset.categoria;
        
        
        
        let pesquisaOk = nome.includes(texto);
        
        
        let categoriaOk =
            categoriaAtiva === "todos" ||
            categoria === categoriaAtiva;
        
        
        
        if (pesquisaOk && categoriaOk) {
            
            produto.style.display = "flex";
            
            quantidade++;
            
        } else {
            
            produto.style.display = "none";
            
        }
        
        
    });
    
    
    contador.innerHTML =
        quantidade + " produtos";
    
}



// ===============================
// PESQUISA
// ===============================

campoPesquisa.addEventListener(
    "input",
    filtrarProdutos
);




// ===============================
// CATEGORIAS
// ===============================

botoesCategoria.forEach(botao => {
    
    
    botao.addEventListener("click", () => {
        
        
        botoesCategoria.forEach(btn => {
            
            btn.classList.remove("ativo");
            
        });
        
        
        
        botao.classList.add("ativo");
        
        
        
        filtrarProdutos();
        
        
    });
    
    
});




// ===============================
// BOTÃO VER PRODUTO
// ===============================

const botoesProduto =
    document.querySelectorAll(".botao");


botoesProduto.forEach(botao => {
    
    
    botao.addEventListener("click", (e) => {
        
        
        const card =
            e.target.closest(".produto");
        
        
        const id =
            card.dataset.id;
        
        
        
        if (id) {
            
            window.location.href =
                "produto.html?id=" + id;
            
        }
        
        
        
    });
    
    
});

const pesquisa = new URLSearchParams(window.location.search).get("pesquisa");

if (pesquisa) {

    const produtos = document.querySelectorAll(".produto");

    produtos.forEach(produto => {

        if (produto.innerText.toLowerCase().includes(pesquisa.toLowerCase())) {
            produto.style.display = "block";
        } else {
            produto.style.display = "none";
        }

    });

}
function adicionarFavorito(id) {

    const produto = produtos[id];

    let favoritos =
        JSON.parse(localStorage.getItem("favoritos")) || [];

    const existe = favoritos.some(function(item) {

        return item.nome === produto.nome;

    });

    if (existe) {

        alert("Esse produto já está nos favoritos.");

        return;
    }

    favoritos.push(produto);

    localStorage.setItem(
        "favoritos",
        JSON.stringify(favoritos)
    );

    alert("Produto adicionado aos favoritos!");
}
