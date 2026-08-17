<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Meu Perfil - Remédios da Vovó</title>

    <!-- Font Awesome -->
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="stylesheet" href="assets/styles/header.css">
    <link rel="stylesheet" href="assets/styles/endereco.css">
    <link rel="stylesheet" href="assets/styles/usuario.css">
    <link rel="stylesheet" href="assets/styles/footer.css">
</head>

<body>

<!-- ================= HEADER ================= -->
<header>

    <div class="topo">

        <div class="logo">

            <img src="assets/img/logo.jpg" alt="Logo">

            <h1>Remédios da vovó</h1>

        </div>

        <div class="pesquisa">

            <input type="text" id="pesquisa" placeholder="Pesquisar produtos">

            <button onclick="pesquisarProduto()">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>

        </div>

        <div class="icones">

            <a href="carrinho.html">
                <i class="fa-solid fa-cart-shopping"></i>
            </a>

            <a href="login.html" id="iconeUsuario">
                <i class="fa-solid fa-user"></i>
            </a>

        </div>

    </div>

</header>


<nav>

    <ul>

        <li><a href="index.html">Início</a></li>

        <li><a href="produtos.html">Produtos</a></li>

        <a href="faleConosco.php">Fale Conosco</a>

        <li><a href="index.html#sobre">Sobre nós</a></li>


    </ul>

    <div class="login">

        <span>Seja bem vindo(a),</span>

        <a href="login.html" id="linkUsuario">
            Entre ou Cadastre-se
        </a>

    </div>

</nav>


<!-- ================= CONTEÚDO ================= -->
<main class="container">

    <h2>Meu perfil</h2>

    <div class="breadcrumb">
        <span>Início</span>
        <i class="fa-solid fa-chevron-right"></i>
        <strong>Meu perfil</strong>
    </div>


    <div class="profile-layout">

        <!-- ================= MENU LATERAL ================= -->
        <aside class="sidebar">

            <div class="profile-user">

                <div class="profile-photo">

                    <img id="fotoPerfil"
                         src="assets/img/perfil.png"
                         alt="Foto do perfil">

                    <button class="camera" id="botaoFoto" type="button">
                        <i class="fa-solid fa-camera"></i>
                    </button>

                    <input type="file"
                           id="inputFoto"
                           accept="image/*"
                           style="display:none;">

                </div>

                <h3 id="nomePerfil"></h3>
                <p id="emailPerfil"></p>

            </div>


            <div class="sidebar-menu">

                <a href="#dados" class="selected">
                    <i class="fa-solid fa-user"></i>
                    <span>Dados pessoais</span>
                </a>

                <a href="#endereco">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>Endereços</span>
                </a>

                <a href="#pedidos">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <span>Histórico de compras</span>
                </a>

                <a href="#favoritos">
                    <i class="fa-solid fa-heart"></i>
                    <span>Meus favoritos</span>
                </a>

                <a href="#pagamento">
                    <i class="fa-solid fa-credit-card"></i>
                    <span>Pagamento</span>
                </a>
                <a href="#" class="logout">
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                    <span>Sair da conta</span>
                </a>

            </div>
        </aside>


        <!-- ================= ÁREA PRINCIPAL ================= -->
        <section class="profile-content">


            <!-- DADOS PESSOAIS -->
            <div class="card personal-card" id="dados">

                <div class="card-header">

                    <div class="card-title">

                        <div class="card-icon">
                            <i class="fa-regular fa-user"></i>
                        </div>

                        <h3>Dados pessoais</h3>

                    </div>

                    <a href="#" class="edit">
                        Editar
                        <i class="fa-solid fa-pencil"></i>
                    </a>

                </div>


                <div class="personal-info">

                    <div class="info-column">

                        <div class="info-item">
                            <span>Nome completo</span>
                            <strong id="nomeUsuario"></strong>
                        </div>

                        <div class="info-item">
                            <span>E-mail</span>
                            <strong id="emailUsuario"></strong>
                        </div>

                    </div>


                    <div class="info-column">

                        <div class="info-item">
                            <span>Data de nascimento</span>
                            <strong id="nascimentoUsuario"></strong>
                        </div>

                        <div class="info-item">
                            <span>Telefone</span>
                            <strong id="telefoneUsuario"></strong>
                        </div>

                    </div>


                    <div class="info-column">

                        <div class="info-item">
                            <span>CPF</span>
                            <strong id="cpfUsuario"></strong>
                        </div>

                    </div>

                </div>

            </div>


            <!-- ================= ENDEREÇO ================= -->

            <div class="card address-card" id="endereco">

                <div class="card-header">

                    <div class="card-title">

                        <div class="card-icon">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>

                        <h3>Endereço principal</h3>

                    </div>

                    <a href="#" class="edit" id="editarEndereco">
                        Editar
                        <i class="fa-solid fa-pencil"></i>
                    </a>

                </div>


                <!-- ENDEREÇO SALVO -->

                <div class="address-info" id="enderecoInfo">

                    <p>Nenhum endereço cadastrado.</p>

                    <button type="button" id="botaoAdicionarEndereco">
                        Adicionar endereço
                    </button>

                </div>


                <!-- FORMULÁRIO -->

                <div id="formEndereco" class="form-endereco" style="display: none;">

                    <form action="endereco.php" method="POST">


                        <!-- CEP -->

                        <div class="campo-endereco">

                            <label for="cep">CEP</label>

                            <input
                                    type="text"
                                    id="cep"
                                    name="cep"
                                    placeholder="00000-000">

                            <span class="erro" id="erroCep"></span>

                        </div>


                        <!-- RUA -->

                        <div class="campo-endereco">

                            <label for="rua">Rua</label>

                            <input
                                    type="text"
                                    id="rua"
                                    name="rua"
                                    placeholder="Digite sua rua">

                            <span class="erro" id="erroRua"></span>

                        </div>


                        <!-- NÚMERO -->

                        <div class="campo-endereco">

                            <label for="numero">Número</label>

                            <input
                                    type="text"
                                    id="numero"
                                    name="numero"
                                    placeholder="Número da residência">

                            <span class="erro" id="erroNumero"></span>

                        </div>


                        <!-- COMPLEMENTO -->

                        <div class="campo-endereco">

                            <label for="complemento">Complemento</label>

                            <input
                                    type="text"
                                    id="complemento"
                                    name="complemento"
                                    placeholder="Apartamento, casa, bloco...">

                            <span class="erro" id="erroComplemento"></span>

                        </div>


                        <!-- BAIRRO -->

                        <div class="campo-endereco">

                            <label for="bairro">Bairro</label>

                            <input
                                    type="text"
                                    id="bairro"
                                    name="bairro"
                                    placeholder="Digite seu bairro">

                            <span class="erro" id="erroBairro"></span>

                        </div>


                        <!-- CIDADE -->

                        <div class="campo-endereco">

                            <label for="cidade">Cidade</label>

                            <input
                                    type="text"
                                    id="cidade"
                                    name="cidade"
                                    placeholder="Digite sua cidade">

                            <span class="erro" id="erroCidade"></span>

                        </div>


                        <!-- ESTADO -->

                        <div class="campo-endereco">

                            <label for="estado">Estado</label>

                            <input
                                    type="text"
                                    id="estado"
                                    name="estado"
                                    placeholder="Ex.: SP">

                            <span class="erro" id="erroEstado"></span>

                        </div>


                        <button
                                type="submit"
                                class="botao-endereco">

                            Salvar endereço

                        </button>

                    </form>

                </div>

            </div>

            <!-- HISTÓRICO DE COMPRAS -->
            <div class="card orders-card" id="pedidos">

                <div class="card-header">

                    <div class="card-title">

                        <div class="card-icon">
                            <i class="fa-solid fa-bag-shopping"></i>
                        </div>

                        <h3>Histórico de compras</h3>

                    </div>

                    <a href="#" class="see-all">
                        Ver todos
                    </a>

                </div>


                <div class="orders-table" id="listaPedidos">

                    <p>Nenhum pedido realizado.</p>

                </div>


            </div>

            <!-- FAVORITOS -->

            <div class="card" id="favoritos">

                <div class="card-header">

                    <div class="card-title">

                        <div class="card-icon">
                            <i class="fa-solid fa-heart"></i>
                        </div>

                        <h3>Meus favoritos</h3>

                    </div>

                </div>

                <div id="listaFavoritos">

                    <p>Nenhum produto favorito.</p>

                </div>

            </div>


            <!-- PAGAMENTO -->

            <div class="card" id="pagamento">

                <div class="card-header">

                    <div class="card-title">

                        <div class="card-icon">
                            <i class="fa-solid fa-credit-card"></i>
                        </div>

                        <h3>Forma de pagamento</h3>

                    </div>

                </div>

                <p id="formaPagamento">
                    Nenhuma forma de pagamento escolhida.
                </p>

            </div>
        </section>

    </div>

</main>
<footer>

    <div class="footerContainer">

        <div>

            <h3>Remédios da Vovó</h3>

            <p>
                Qualidade, confiança e cuidado com a sua saúde.
            </p>

        </div>

        <div>

            <h3>Contato</h3>

            <p>(11) 99999-9999</p>

            <p>contato@remediosdavovo.com.br</p>

        </div>

        <div>

            <h3>Horário</h3>

            <p>Segunda a Sexta</p>

            <p>08:00 às 18:00</p>

        </div>

    </div>

    <div class="copyright">

        © 2026 Remédios da Vovó - Todos os direitos reservados.

    </div>

</footer>



<script>

    const endereco = {

        cep: <?= json_encode($cep) ?>,

    rua: <?= json_encode($rua) ?>,

    numero: <?= json_encode($numero) ?>,

    complemento: <?= json_encode($complemento) ?>,

    bairro: <?= json_encode($bairro) ?>,

    cidade: <?= json_encode($cidade) ?>,

    estado: <?= json_encode($estado) ?>

    };


    localStorage.setItem(
        "endereco",
        JSON.stringify(endereco)
    );


    alert("Endereço cadastrado com sucesso!");


    window.location.href = "usuario.html#endereco";

</script>



</body>
</html>

