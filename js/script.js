
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("show");
}

function initFormValidation() {
  const form = document.getElementById("volunteerForm");
  if (!form) return; 

  const successMsg = document.getElementById("successMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

   
    const nome = form.nome;
    const email = form.email;
    const telefone = form.telefone;
    const idade = form.idade;

   
    document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

   
    if (nome.value.trim().length < 3) {
      document.getElementById("error-nome").textContent = "O nome deve ter pelo menos 3 caracteres.";
      valid = false;
    }

    
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email.value)) {
      document.getElementById("error-email").textContent = "Digite um e-mail válido.";
      valid = false;
    }

    
    if (!/^\\(\\d{2}\\)\\s\\d{5}-\\d{4}$/.test(telefone.value)) {
      document.getElementById("error-telefone").textContent = "Use o formato (11) 99999-9999.";
      valid = false;
    }

    
    if (idade.value < 16 || idade.value > 100) {
      document.getElementById("error-idade").textContent = "Idade deve ser entre 16 e 100 anos.";
      valid = false;
    }

   
    if (valid) {
      console.log("Envio ok!");
      successMsg.classList.add("show");
      form.reset();
      setTimeout(() => successMsg.classList.remove("show"), 4000);
    }
  });
}


window.addEventListener("hashchange", () => {
  setTimeout(initFormValidation, 100);
});
window.addEventListener("load", () => {
  setTimeout(initFormValidation, 100);
});
