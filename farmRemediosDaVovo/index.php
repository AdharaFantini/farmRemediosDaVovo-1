
<?php
session_start();
?>
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Remédios da Vovó</title>

    <link rel="stylesheet" href="assets/styles/header.css">
    <link rel="stylesheet" href="assets/styles/style.css">
    <link rel="stylesheet" href="assets/styles/footer.css">

    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
</head>

<body>

<!-- HEADER PRESERVADO -->
<header>

    <div class="topo">

        <div class="logo">
            <img src="assets/img/logo.jpg" alt="Logo">
            <h1>Remédios da vovó</h1>
        </div>

        <div class="pesquisa">

            <input type="text"
                   id="pesquisa"
                   placeholder="Pesquisar produtos">

            <button onclick="pesquisarProduto()">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>

        </div>

        <div class="icones">

            <a href="carrinho.php">
                <i class="fa-solid fa-cart-shopping"></i>
            </a>

            <a href="login.php" id="iconeUsuario">
                <i class="fa-solid fa-user"></i>
            </a>

        </div>

    </div>

</header>


<nav>

    <ul>

        <li><a href="index.php">Início</a></li>

        <li><a href="produtos.php">Produtos</a></li>

        <li><a href="faleConosco.php">Fale Conosco</a></li>

        <li><a href="index.php#sobre">Sobre nós</a></li>

    </ul>

    <div class="login">

        <span>Seja bem vindo(a),</span>

        <a href="login.php" id="linkUsuario">
            Entre ou Cadastre-se
        </a>

    </div>

</nav>


<!-- =================================
     CONTEÚDO PRINCIPAL
================================= -->


<main class="paginaInicial">

    <!-- BANNER PRINCIPAL -->
    <section class="bannerInicio">
        <div class="textoBannerInicio">
            <h2>Cuidar da sua saúde é o nosso compromisso.</h2>
            <p>
                Oferecemos produtos de qualidade e atendimento dedicado
                para cuidar de você e de toda a sua família.
                Sua saúde e bem-estar são sempre nossa prioridade.
            </p>
            <a href="login.php" class="botaoBannerInicio">
                Faça login ou cadastre-se
            </a>
        </div>

        <div class="imagemBannerInicio">
            <img src="assets/img/banner1.jpg" alt="Banner da farmácia">
        </div>
    </section>


    <!-- CATEGORIAS -->
    <section class="categoriasInicio">

        <div class="faixaTituloInicio">
            <h2>Categorias</h2>
            <p>Escolha aqui para ajudar. Explore nossas opções e cuide de você.</p>
        </div>

        <div class="listaCategoriasInicio">

            <a href="produtos.php" class="categoriaInicio">
                <img src="assets/img/medicamentos.png" alt="Medicamentos">
                <h3>Medicamentos</h3>
            </a>

            <a href="produtos.php" class="categoriaInicio">
                <img src="assets/img/infantil.png" alt="Infantil">
                <h3>Infantil</h3>
            </a>

            <a href="produtos.php" class="categoriaInicio">
                <img src="assets/img/beleza.png" alt="Beleza">
                <h3>Beleza</h3>
            </a>

            <a href="produtos.php" class="categoriaInicio">
                <img src="assets/img/suplementos.png" alt="Suplementos">
                <h3>Suplementos</h3>
            </a>

        </div>
    </section>


    <!-- PROMOÇÕES -->
    <section class="promocoesInicio">

        <div class="faixaTituloBordo">
            <h2>PROMOÇÕES</h2>
            <p>
                Confira os produtos destacados e aproveite as novidades
                e ofertas disponíveis em nossa loja.
            </p>
        </div>

        <div class="bannersPromocaoInicio">

            <a href="produtos.php" class="bannerPromocao">
                <img src="assets/img/promocao1.jpg" alt="Promoção de produtos">
            </a>

            <a href="produtos.php" class="bannerPromocao">
                <img src="assets/img/promocao2.jpg" alt="Produtos em promoção">
            </a>

        </div>

    </section>


    <!-- CONTATO -->
    <section class="contatoInicio">

        <div class="faixaTituloInicio">
            <h2>Entre em contato</h2>
            <p>
                Estamos aqui para ajudar. Escolha uma das opções abaixo
                e fale com nossa equipe.
            </p>
        </div>

        <div class="listaContatoInicio">

            <a href="login.php" class="cardContatoInicio">

                <div class="iconeContatoInicio">
                    <i class="fa-solid fa-user"></i>
                </div>

                <div class="textoContatoInicio">
                    <h3>Área do cliente</h3>
                    <p>Acesse sua conta e acompanhe seus pedidos.</p>
                </div>

                <span class="setaContatoInicio">
                    <i class="fa-solid fa-arrow-right"></i>
                </span>

            </a>


            <a href="produtos.php" class="cardContatoInicio">

                <div class="iconeContatoInicio">
                    <i class="fa-solid fa-location-dot"></i>
                </div>

                <div class="textoContatoInicio">
                    <h3>Entregas e regiões</h3>
                    <p>Confira nossa região de atendimento.</p>
                </div>

                <span class="setaContatoInicio">
                    <i class="fa-solid fa-arrow-right"></i>
                </span>

            </a>


            <a href="faleConosco.php" class="cardContatoInicio">

                <div class="iconeContatoInicio">
                    <i class="fa-regular fa-envelope"></i>
                </div>

                <div class="textoContatoInicio">
                    <h3>Fale conosco</h3>
                    <p>Envie suas dúvidas, sugestões ou solicitações.</p>
                </div>

                <span class="setaContatoInicio">
                    <i class="fa-solid fa-arrow-right"></i>
                </span>

            </a>

        </div>

    </section>


    <!-- DESTAQUES -->
    <section class="destaquesInicio">

        <div class="faixaTituloBordo">
            <h2>Destaques da farmácia</h2>
            <p>
                Confira os produtos favoritos de nossos clientes
                e encontre o que você procura.
            </p>
        </div>

        <div class="listaDestaquesInicio">

            <!-- PRODUTO 1 -->
            <div class="produtoInicio"
                 onclick="location.href='produto.php?id=dipirona'">

                <div class="imagemDestaqueInicio">
                    <img src="assets/img/dipirona.png" alt="Dipirona">
                </div>

                <div class="informacaoDestaqueInicio">
                    <h3>Dipirona Monoidratada</h3>
                    <span class="precoDestaqueInicio">R$ 20,00</span>
                </div>

                <div class="acoesDestaqueInicio">
                    <a href="produto.php?id=dipirona"
                       class="botaoDestaqueInicio"
                       onclick="event.stopPropagation()">
                        Saiba mais
                    </a>
                </div>

            </div>


            <!-- PRODUTO 2 -->
            <div class="produtoInicio"
                 onclick="location.href='produto.php?id=paracetamol'">

                <div class="imagemDestaqueInicio">
                    <img src="assets/img/paracetamol.png" alt="Paracetamol">
                </div>

                <div class="informacaoDestaqueInicio">
                    <h3>Paracetamol</h3>
                    <span class="precoDestaqueInicio">R$ 16,90</span>
                </div>

                <div class="acoesDestaqueInicio">
                    <a href="produto.php?id=paracetamol"
                       class="botaoDestaqueInicio"
                       onclick="event.stopPropagation()">
                        Saiba mais
                    </a>
                </div>

            </div>


            <!-- PRODUTO 3 -->
            <div class="produtoInicio"
                 onclick="location.href='produto.php?id=hidratante'">

                <div class="imagemDestaqueInicio">
                    <img src="assets/img/hidratante.png" alt="Hidratante">
                </div>

                <div class="informacaoDestaqueInicio">
                    <h3>Hidratante corporal</h3>
                    <span class="precoDestaqueInicio">R$ 24,90</span>
                </div>

                <div class="acoesDestaqueInicio">
                    <a href="produto.php?id=hidratante"
                       class="botaoDestaqueInicio"
                       onclick="event.stopPropagation()">
                        Saiba mais
                    </a>
                </div>

            </div>


            <!-- PRODUTO 4 -->
            <div class="produtoInicio"
                 onclick="location.href='produto.php?id=protetor'">

                <div class="imagemDestaqueInicio">
                    <img src="assets/img/protetor.png" alt="Protetor Solar">
                </div>

                <div class="informacaoDestaqueInicio">
                    <h3>Protetor Solar FPS 60</h3>
                    <span class="precoDestaqueInicio">R$ 39,90</span>
                </div>

                <div class="acoesDestaqueInicio">
                    <a href="produto.php?id=protetor"
                       class="botaoDestaqueInicio"
                       onclick="event.stopPropagation()">
                        Saiba mais
                    </a>
                </div>

            </div>

        </div>

    </section>


    <!-- SOBRE NÓS -->
    <section class="sobreInicio" id="sobre">

        <div class="faixaSobreInicio">
            <h2>SOBRE NÓS</h2>
            <p>Conheça um pouco mais sobre a nossa história.</p>
        </div>

        <div class="conteudoSobreInicio">

            <div class="tituloVerticalSobre">
                REMÉDIOS DA VOVÓ
            </div>

            <div class="textoSobreInicio">

                <h3>Conheça um pouco mais sobre a nossa história!</h3>

                <p>
                    A Remédios da Vovó nasceu com a proposta de reunir
                    cuidado, carinho e praticidade em um só lugar.
                    Nosso objetivo é oferecer uma experiência acessível,
                    organizada e acolhedora para quem procura produtos
                    de cuidado pessoal e bem-estar.
                </p>

                <p>
                    Queremos facilitar a busca por produtos, oferecendo
                    variedade, organização e uma experiência simples
                    para nossos clientes. A saúde e o cuidado estão
                    sempre entre nossas prioridades.
                </p>

                <h3>O que oferecemos</h3>

                <p>
                    Na Remédios da Vovó, trabalhamos para proporcionar
                    uma experiência de compra organizada e acessível.
                    Nosso site reúne produtos de diferentes categorias,
                    facilitando a navegação e a descoberta de novidades.
                </p>

                <p>
                    Nosso propósito é construir uma experiência acolhedora,
                    com dedicação, cuidado e compromisso.
                </p>

            </div>

            <div class="imagensSobreInicio">

                <img src="assets/img/vovó.jpg"
                     alt="Imagem ilustrativa de uma senhora"
                     class="imagemSobrePrincipal">

                <img src="assets/img/farmacia.jpg"
                     alt="Interior da farmácia"
                     class="imagemSobreSecundaria">

            </div>

        </div>

    </section>

</main>



<!-- FOOTER PRESERVADO -->

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


<button id="voltarTopo" aria-label="Voltar ao topo">
    ↑
</button>


<script src="assets/scripts/index.js"></script>
<script src="assets/scripts/nav.js"></script>

</body>
</html>
