document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    
    if (nome && email && mensagem) {
        document.getElementById("feedback").innerHTML = `<p>Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.</p>`;
        document.getElementById("form-contato").reset();
    } else {
        document.getElementById("feedback").innerHTML = `<p>Por favor, preencha todos os campos.</p>`;
    }
});
