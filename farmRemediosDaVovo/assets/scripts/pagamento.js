function finalizarCompra() {

  // Verifica se escolheu pagamento
  let escolhido = document.querySelector(
      'input[name="pagamento"]:checked'
  );

  if (!escolhido) {

    alert("Escolha uma forma de pagamento");

    return;
  }


  // Verifica o usuário
  const usuario =
      JSON.parse(localStorage.getItem("usuario"));

  if (!usuario) {

    alert("Faça login para finalizar a compra.");

    window.location.href = "login.html";

    return;
  }


  // Pega o carrinho
  const carrinho =
      JSON.parse(localStorage.getItem("carrinho")) || [];


  if (carrinho.length === 0) {

    alert("Seu carrinho está vazio.");

    window.location.href = "carrinho.html";

    return;
  }


  // Calcula o total
  const total = carrinho.reduce(function(soma, produto) {

    return soma + produto.preco * produto.quantidade;

  }, 0);


  // Cria o pedido
  const pedido = {

    numero: Date.now(),

    data: new Date().toLocaleDateString("pt-BR"),

    produtos: carrinho,

    total: total,

    pagamento: escolhido.value,

    status: "Pedido realizado"

  };


  // Busca pedidos anteriores
  const chave =
      "pedidos_" + usuario.email;

  let pedidos =
      JSON.parse(localStorage.getItem(chave)) || [];


  // Adiciona o novo pedido
  pedidos.push(pedido);


  // Salva no histórico
  localStorage.setItem(
      chave,
      JSON.stringify(pedidos)
  );


  // Salva também a última forma de pagamento
  localStorage.setItem(
      "formaPagamento",
      escolhido.value
  );


  // Limpa o carrinho
  localStorage.removeItem("carrinho");


  alert("Pedido realizado com sucesso!");


  // Vai para o perfil
  window.location.href = "usuario.html";

}

const botaoTopo = document.getElementById("voltarTopo");

botaoTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

function cancelarPagamento() {

    if (confirm("Deseja realmente cancelar o pagamento?")) {

        // Volta para o carrinho
        window.location.href = "carrinho.html";

    }

}
