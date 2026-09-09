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
            iconeUsuario.href = "usuario.php";
        }

        if (linkUsuario) {
            linkUsuario.href = "usuario.php";
            linkUsuario.textContent = usuario.nome;
        }

    }


        // ===============================
        // USUÁRIO NÃO LOGADO
    // ===============================

    else {

        if (iconeUsuario) {
            iconeUsuario.href = "login.php";
        }

        if (linkUsuario) {
            linkUsuario.href = "login.php";
            linkUsuario.textContent = "Entre ou Cadastre-se";
        }

    }

}


// Executa quando a página carregar
document.addEventListener("DOMContentLoaded", atualizarUsuario);