const botaoAdicionarEndereco =
    document.getElementById("botaoAdicionarEndereco");

const formEndereco =
    document.getElementById("formEndereco");

const enderecoInfo =
    document.getElementById("enderecoInfo");

const editarEndereco =
    document.getElementById("editarEndereco");


// ===============================
// ABRIR FORMULÁRIO
// ===============================

if (botaoAdicionarEndereco) {

    botaoAdicionarEndereco.addEventListener("click", function () {

        formEndereco.style.display = "block";

        enderecoInfo.style.display = "none";

    });

}


// ===============================
// EDITAR ENDEREÇO
// ===============================

if (editarEndereco) {

    editarEndereco.addEventListener("click", function (event) {

        event.preventDefault();

        formEndereco.style.display = "block";

        enderecoInfo.style.display = "none";

        carregarEndereco();

    });

}


// ===============================
// CARREGAR ENDEREÇO SALVO
// ===============================

function carregarEndereco() {

    const endereco =
        JSON.parse(localStorage.getItem("endereco"));

    if (!endereco) {
        return;
    }

    document.getElementById("cep").value =
        endereco.cep || "";

    document.getElementById("rua").value =
        endereco.rua || "";

    document.getElementById("numero").value =
        endereco.numero || "";

    document.getElementById("complemento").value =
        endereco.complemento || "";

    document.getElementById("bairro").value =
        endereco.bairro || "";

    document.getElementById("cidade").value =
        endereco.cidade || "";

    document.getElementById("estado").value =
        endereco.estado || "";
}


// ===============================
// VALIDAR E SALVAR
// ===============================

const formCadastroEndereco =
    document.getElementById("formCadastroEndereco");

if (formCadastroEndereco) {

    formCadastroEndereco.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            // Limpa erros
            document.querySelectorAll(".erro").forEach(function (erro) {
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


            if (cep === "") {
                document.getElementById("erroCep").textContent =
                    "Informação obrigatória.";
                valido = false;
            }

            if (rua === "") {
                document.getElementById("erroRua").textContent =
                    "Informação obrigatória.";
                valido = false;
            }

            if (numero === "") {
                document.getElementById("erroNumero").textContent =
                    "Informação obrigatória.";
                valido = false;
            }

            if (bairro === "") {
                document.getElementById("erroBairro").textContent =
                    "Informação obrigatória.";
                valido = false;
            }

            if (cidade === "") {
                document.getElementById("erroCidade").textContent =
                    "Informação obrigatória.";
                valido = false;
            }

            if (estado === "") {
                document.getElementById("erroEstado").textContent =
                    "Informação obrigatória.";
                valido = false;
            }


            if (!valido) {
                return;
            }


            const endereco = {

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
                JSON.stringify(endereco)
            );


            alert("Endereço salvo com sucesso!");


            mostrarEndereco(endereco);

        }
    );

}


// ===============================
// MOSTRAR ENDEREÇO
// ===============================

function mostrarEndereco(endereco) {

    enderecoInfo.innerHTML = `

        <p>
            <strong>${endereco.rua}</strong>
        </p>

        <p>
            ${endereco.numero}
            ${endereco.complemento
        ? " - " + endereco.complemento
        : ""}
        </p>

        <p>
            ${endereco.bairro}
        </p>

        <p>
            ${endereco.cidade} - ${endereco.estado}
        </p>

        <p>
            CEP: ${endereco.cep}
        </p>

    `;

    enderecoInfo.style.display = "block";

    formEndereco.style.display = "none";
}