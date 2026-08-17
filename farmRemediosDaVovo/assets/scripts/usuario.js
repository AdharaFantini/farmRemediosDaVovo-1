// ==========================================
// USUÁRIO
// ==========================================

const usuario = JSON.parse(localStorage.getItem("usuario"));
const logado = localStorage.getItem("logado");


// Se não estiver logado, volta para o login
if (!usuario || logado !== "true") {

    window.location.href = "login.html";

}


// ==========================================
// DADOS DO USUÁRIO
// ==========================================

if (usuario) {

    const nomePerfil = document.getElementById("nomePerfil");
    const nomeUsuario = document.getElementById("nomeUsuario");

    if (nomePerfil) {
        nomePerfil.textContent = usuario.nome || "";
    }

    if (nomeUsuario) {
        nomeUsuario.textContent = usuario.nome || "";
    }


    const emailPerfil = document.getElementById("emailPerfil");
    const emailUsuario = document.getElementById("emailUsuario");

    if (emailPerfil) {
        emailPerfil.textContent = usuario.email || "";
    }

    if (emailUsuario) {
        emailUsuario.textContent = usuario.email || "";
    }


    const nascimento = document.getElementById("nascimentoUsuario");

    if (nascimento) {
        nascimento.textContent = usuario.nascimento || "";
    }


    const telefone = document.getElementById("telefoneUsuario");

    if (telefone) {
        telefone.textContent = usuario.telefone || "";
    }


    const cpf = document.getElementById("cpfUsuario");

    if (cpf) {
        cpf.textContent = usuario.cpf || "";
    }

}


// ==========================================
// FOTO DE PERFIL
// ==========================================

const fotoPerfil = document.getElementById("fotoPerfil");
const botaoFoto = document.getElementById("botaoFoto");
const inputFoto = document.getElementById("inputFoto");

const fotoSalva = localStorage.getItem("fotoPerfil");

if (fotoSalva && fotoPerfil) {
    fotoPerfil.src = fotoSalva;
}


if (botaoFoto && inputFoto) {

    botaoFoto.addEventListener("click", function() {
        inputFoto.click();
    });


    inputFoto.addEventListener("change", function() {

        const arquivo = inputFoto.files[0];

        if (!arquivo) {
            return;
        }

        const leitor = new FileReader();

        leitor.onload = function() {

            fotoPerfil.src = leitor.result;

            localStorage.setItem(
                "fotoPerfil",
                leitor.result
            );

        };

        leitor.readAsDataURL(arquivo);

    });

}


// ==========================================
// ENDEREÇO
// ==========================================

const enderecoInfo =
    document.getElementById("enderecoInfo");

const endereco =
    JSON.parse(localStorage.getItem("endereco"));

if (endereco && enderecoInfo) {

    enderecoInfo.innerHTML = `
        <p><strong>${endereco.rua || ""}</strong></p>
        <p>${endereco.numero || ""} - ${endereco.bairro || ""}</p>
        <p>${endereco.cidade || ""} - ${endereco.estado || ""}</p>
        <p>CEP: ${endereco.cep || ""}</p>
    `;

}


// ==========================================
// HISTÓRICO DE COMPRAS
// ==========================================

const listaPedidos =
    document.getElementById("listaPedidos");

if (usuario && listaPedidos) {

    const pedidos =
        JSON.parse(
            localStorage.getItem("pedidos_" + usuario.email)
        ) || [];


    if (pedidos.length === 0) {

        listaPedidos.innerHTML =
            "<p>Nenhum pedido realizado.</p>";

    } else {

        listaPedidos.innerHTML = "";

        pedidos.forEach(function(pedido) {

            listaPedidos.innerHTML += `

                <div class="table-row">

                    <strong>#${pedido.numero}</strong>

                    <span>${pedido.data}</span>

                    <span>
                        ${pedido.produtos.length} itens
                    </span>

                    <span>
                        R$ ${pedido.total
                .toFixed(2)
                .replace(".", ",")}
                    </span>

                    <span>
                        <label class="status">
                            ${pedido.status}
                        </label>
                    </span>

                    <i class="fa-solid fa-chevron-right"></i>

                </div>

            `;

        });

    }

}


// ==========================================
// FAVORITOS
// ==========================================

const listaFavoritos =
    document.getElementById("listaFavoritos");

if (usuario && listaFavoritos) {

    const chaveFavoritos = "favoritos_" + usuario.email;

    const favoritos =
        JSON.parse(localStorage.getItem(chaveFavoritos)) || [];


    if (favoritos.length === 0) {

        listaFavoritos.innerHTML =
            "<p>Nenhum produto favorito.</p>";

    } else {

        listaFavoritos.innerHTML = "";

        favoritos.forEach(function(produto) {

            listaFavoritos.innerHTML += `

                <div class="favorito">

                    <strong>${produto.nome || "Produto"}</strong>

                    <span>
                        R$ ${Number(produto.preco || 0)
                .toFixed(2)
                .replace(".", ",")}
                    </span>

                </div>

            `;

        });

    }

}
// ==========================================
// FORMA DE PAGAMENTO
// ==========================================

const formaPagamento =
    document.getElementById("formaPagamento");

const pagamento =
    localStorage.getItem("formaPagamento");


if (formaPagamento && pagamento) {

    formaPagamento.textContent = pagamento;

}


// ==========================================
// SAIR DA CONTA
// ==========================================

const botaoSair =
    document.querySelector(".logout");

if (botaoSair) {

    botaoSair.addEventListener("click", function(event) {

        event.preventDefault();

        // APENAS DESLOGA
        // NÃO APAGA OS DADOS DO CADASTRO
        localStorage.removeItem("logado");

        alert("Você saiu da conta!");

        window.location.href = "index.html";

    });

}