// js/app.js
const app = document.getElementById("app");

function navigate() {
  const route = location.hash.slice(1) || "/";
  let page = "";

  switch (route) {
    case "/":
    case "/home":
      page = Templates.home();
      break;
    case "/projetos":
      page = Templates.projetos();
      break;
    case "/cadastro":
      page = Templates.cadastro();
      break;
    default:
      page = `<section><h2>Página não encontrada 😕</h2></section>`;
  }

  app.innerHTML = page;
}

// Carrega rota inicial
window.addEventListener("load", navigate);
// Atualiza ao mudar o hash
window.addEventListener("hashchange", navigate);
