document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidade do botão "Leia mais"
    const leiaMaisBtn = document.querySelector('.leia-mais');
    const hiddenText = document.querySelectorAll('.hidden-text');

    leiaMaisBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do link
        hiddenText.forEach(text => {
            text.style.display = text.style.display === 'none' || text.style.display === '' ? 'block' : 'none';
        });
        leiaMaisBtn.textContent = leiaMaisBtn.textContent === 'Leia mais' ? 'Leia menos' : 'Leia mais';
    });

    // Funcionalidade do formulário de contato
    const form = document.getElementById('form-contato');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = form.querySelector('input[name="nome"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const mensagem = form.querySelector('textarea[name="mensagem"]').value;

        if (nome && email && mensagem) {
            alert('Mensagem enviada com sucesso!\n\nNome: ' + nome + '\nE-mail: ' + email + '\nMensagem: ' + mensagem);
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Funcionalidade do menu hambúrguer
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('#sidebar');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // Fechar menu ao clicar em uma opção
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    });

    // Fechar menu ao clicar fora
    overlay.addEventListener('click', function() {
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
});