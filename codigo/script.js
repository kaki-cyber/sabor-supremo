// script.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Usuário e senha fixos para exemplo
    const validUsername = "admin";
    const validPassword = "12345";

    // Verificação do login
    if (username === validUsername && password === validPassword) {
        // Redireciona para uma página (exemplo: dashboard.html)
        window.location.href = "dashboard.html"; // Substitua com a URL desejada
    } else {
        // Exibe mensagem de erro se o login for inválido
        errorMessage.textContent = "Usuário ou senha inválidos!";
    }
});
