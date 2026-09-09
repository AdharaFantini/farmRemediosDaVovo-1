function enviarMensagem() {
  
  alert("Mensagem enviada com sucesso!");
  
  window.location.href = "index.php";
  
}
function enviarMensagem() {
  
  alert("Mensagem enviada com sucesso!");
  
}

const botaoTopo = document.getElementById("voltarTopo");

botaoTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});