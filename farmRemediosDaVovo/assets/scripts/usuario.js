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

const botaoAdicionarEndereco =
    document.getElementById("botaoAdicionarEndereco");

const formEndereco =
    document.getElementById("formEndereco");

const formCadastroEndereco =
    document.getElementById("formCadastroEndereco");


// ==========================================
// MOSTRAR ENDEREÇO SALVO
// ==========================================

function mostrarEndereco() {

    const enderecoAtual =
        JSON.parse(localStorage.getItem("endereco"));

    if (!enderecoAtual || !enderecoInfo) {
        return;
    }

    enderecoInfo.innerHTML = `

        <p>
            <strong>${enderecoAtual.rua || ""}</strong>
        </p>

        <p>
            ${enderecoAtual.numero || ""}
            ${enderecoAtual.complemento
        ? " - " + enderecoAtual.complemento
        : ""}
        </p>

        <p>
            ${enderecoAtual.bairro || ""}
        </p>

        <p>
            ${enderecoAtual.cidade || ""}
            - ${enderecoAtual.estado || ""}
        </p>

        <p>
            CEP: ${enderecoAtual.cep || ""}
        </p>

        <button type="button" id="editarEndereco">
            Editar endereço
        </button>

    `;
}


// ==========================================
// ABRIR FORMULÁRIO
// ==========================================

if (botaoAdicionarEndereco) {

    botaoAdicionarEndereco.addEventListener(
        "click",
        function() {

            if (formEndereco) {
                formEndereco.style.display = "block";
            }

        }
    );

}


// ==========================================
// CARREGAR ENDEREÇO JÁ SALVO
// ==========================================

const enderecoSalvo =
    JSON.parse(localStorage.getItem("endereco"));

if (enderecoSalvo) {

    const cep = document.getElementById("cep");
    const rua = document.getElementById("rua");
    const numero = document.getElementById("numero");
    const complemento = document.getElementById("complemento");
    const bairro = document.getElementById("bairro");
    const cidade = document.getElementById("cidade");
    const estado = document.getElementById("estado");

    if (cep) cep.value = enderecoSalvo.cep || "";
    if (rua) rua.value = enderecoSalvo.rua || "";
    if (numero) numero.value = enderecoSalvo.numero || "";
    if (complemento) complemento.value = enderecoSalvo.complemento || "";
    if (bairro) bairro.value = enderecoSalvo.bairro || "";
    if (cidade) cidade.value = enderecoSalvo.cidade || "";
    if (estado) estado.value = enderecoSalvo.estado || "";

    mostrarEndereco();
}


// ==========================================
// SALVAR ENDEREÇO
// ==========================================

if (formCadastroEndereco) {

    formCadastroEndereco.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            // LIMPAR ERROS

            document.querySelectorAll(".erro")
                .forEach(function(erro) {

                    erro.textContent = "";

                });


            const cep =
                document.getElementById("cep").value.trim();

            const rua =
                document.getElementById("rua").value.trim();

            const numero =
                document.getElementById("numero").value.trim();

            const complemento =
                document.getElementById("complemento").value.trim();

            const bairro =
                document.getElementById("bairro").value.trim();

            const cidade =
                document.getElementById("cidade").value.trim();

            const estado =
                document.getElementById("estado").value.trim();


            let valido = true;


            // CEP

            if (cep === "") {

                document.getElementById("erroCep")
                    .textContent =
                    "Informe o CEP.";

                valido = false;

            } else if (!/^\d{5}-?\d{3}$/.test(cep)) {

                document.getElementById("erroCep")
                    .textContent =
                    "Digite um CEP válido.";

                valido = false;

            }


            // RUA

            if (rua === "") {

                document.getElementById("erroRua")
                    .textContent =
                    "Informe a rua.";

                valido = false;

            }


            // NÚMERO

            if (numero === "") {

                document.getElementById("erroNumero")
                    .textContent =
                    "Informe o número.";

                valido = false;

            }


            // BAIRRO

            if (bairro === "") {

                document.getElementById("erroBairro")
                    .textContent =
                    "Informe o bairro.";

                valido = false;

            }


            // CIDADE

            if (cidade === "") {

                document.getElementById("erroCidade")
                    .textContent =
                    "Informe a cidade.";

                valido = false;

            }


            // ESTADO

            if (estado === "") {

                document.getElementById("erroEstado")
                    .textContent =
                    "Informe o estado.";

                valido = false;

            }


            // SE TIVER ERRO

            if (!valido) {
                return;
            }


            // ==================================
            // SALVAR
            // ==================================

            const novoEndereco = {

                cep: cep,
                rua: rua,
                numero: numero,
                complemento: complemento,
                bairro: bairro,
                cidade: cidade,
                estado: estado

            };


            localStorage.setItem(
                "endereco",
                JSON.stringify(novoEndereco)
            );


            alert("Endereço salvo com sucesso!");


            if (formEndereco) {
                formEndereco.style.display = "none";
            }


            mostrarEndereco();

        }
    );

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