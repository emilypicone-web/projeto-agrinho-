// Função para filtrar a exibição dos cards de maneira suave
function filtrarCards(tipo) {
    // Seleciona os cards e os botões
    const cardTradicional = document.querySelector('.card.tradicional');
    const cardSustentavel = document.querySelector('.card.sustentavel');
    const botoes = document.querySelectorAll('.btn');

    // Atualiza a classe ativa do botão clicado
    botoes.forEach(botao => {
        botao.classList.remove('active');
    });
    
    // Identifica qual botão disparou o evento para adicionar o efeito visual ativo
    event.target.classList.add('active');

    // Lógica para esconder ou mostrar os cards com transição suave
    if (tipo === 'todos') {
        exibirCard(cardTradicional);
        exibirCard(cardSustentavel);
    } else if (tipo === 'tradicional') {
        exibirCard(cardTradicional);
        esconderCard(cardSustentavel);
    } else if (tipo === 'sustentavel') {
        esconderCard(cardTradicional);
        exibirCard(cardSustentavel);
    }
}

function esconderCard(elemento) {
    elemento.style.opacity = '0';
    setTimeout(() => {
        elemento.style.display = 'none';
    }, 400); // Tempo correspondente à transição do CSS
}

function exibirCard(elemento) {
    elemento.style.display = 'block';
    setTimeout(() => {
        elemento.style.opacity = '1';
    }, 50);
}