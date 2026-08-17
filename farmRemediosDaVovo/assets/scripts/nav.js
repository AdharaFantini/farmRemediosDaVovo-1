// ===============================
// ATUALIZAR HEADER DO USUÁRIO
// ===============================

function atualizarUsuario() {

    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const logado = localStorage.getItem("logado");

    const iconeUsuario = document.getElementById("iconeUsuario");
    const linkUsuario = document.getElementById("linkUsuario");


    // ===============================
    // USUÁRIO LOGADO
    // ===============================

    if (usuario && logado === "true") {

        if (iconeUsuario) {
            iconeUsuario.href = "usuario.html";
        }

        if (linkUsuario) {
            linkUsuario.href = "usuario.html";
            linkUsuario.textContent = usuario.nome;
        }

    }


        // ===============================
        // USUÁRIO NÃO LOGADO
    // ===============================

    else {

        if (iconeUsuario) {
            iconeUsuario.href = "login.html";
        }

        if (linkUsuario) {
            linkUsuario.href = "login.html";
            linkUsuario.textContent = "Entre ou Cadastre-se";
        }

    }

}


// Executa quando a página carregar
document.addEventListener("DOMContentLoaded", atualizarUsuario);