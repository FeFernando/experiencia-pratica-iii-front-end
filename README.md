🌍 Organização de Voluntários

Projeto desenvolvido como parte de um exercício prático de desenvolvimento front-end com foco em interatividade, usabilidade e boas práticas de estruturação de código.

🧩 Objetivo

Criar uma Single Page Application (SPA) simples e funcional para uma organização fictícia de voluntários, demonstrando:

Navegação dinâmica sem recarregar a página;

Uso de templates JavaScript para renderização de conteúdo;

Validação e feedback em formulários interativos;

Estrutura responsiva e moderna com HTML e CSS.

⚙️ Tecnologias Utilizadas

HTML5 – estrutura semântica da aplicação

CSS3 – estilização responsiva e layout moderno

JavaScript (ES6) – controle de rotas, templates e validação de dados

🧭 Funcionalidades Implementadas
🏠 1. Sistema de SPA (Single Page Application)

A aplicação utiliza hash routing (#/home, #/projetos, #/cadastro) para navegar entre seções sem recarregar a página.
O conteúdo é carregado dinamicamente no elemento <main id="app">.

window.addEventListener("hashchange", navigate);
window.addEventListener("load", navigate);

🧱 2. Sistema de Templates JavaScript

As páginas são definidas em um objeto Templates, onde cada rota possui seu próprio HTML gerado por funções JS.
Exemplo:

const Templates = {
  home: () => `<section class="hero"><h1>Transforme vidas</h1></section>`,
  projetos: () => `<section class="about"><h2>Projetos</h2></section>`,
  cadastro: () => `<section class="signup-section">...</section>`
};

📋 3. Formulário de Cadastro com Validação de Dados

Implementado um sistema de verificação de consistência dos campos do formulário, exibindo mensagens de erro personalizadas caso o usuário preencha incorretamente.

Validação de:

Nome (mínimo 3 caracteres);

E-mail (formato válido);

Telefone (formato (11) 98765-4321);

Idade (entre 16 e 100 anos).

if (!/^\(\d{2}\)\s\d{5}-\d{4}$/.test(telefone.value)) {
  document.getElementById("error-telefone").textContent = "Use o formato (11) 99999-9999.";
}

✅ 4. Mensagem de Sucesso

Ao enviar o formulário corretamente, o sistema exibe uma mensagem de sucesso temporária:

successMsg.classList.add("show");
setTimeout(() => successMsg.classList.remove("show"), 4000);
