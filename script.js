document.addEventListener('DOMContentLoaded', function() {
    // Atualiza a barra de rolagem personalizada
    const content = document.querySelector('main'); // Ajuste o seletor se necessário

    content.addEventListener('scroll', function() {
        const scrollHeight = content.scrollHeight;
        const clientHeight = content.clientHeight;
        const scrollTop = content.scrollTop;

        // Atualiza a posição da barra de rolagem personalizada
        const scrollPercent = scrollTop / (scrollHeight - clientHeight);
        const thumbHeight = (clientHeight / scrollHeight) * clientHeight;
        const thumbTop = scrollPercent * (clientHeight - thumbHeight);

        document.querySelector('.scroll-thumb').style.height = `${thumbHeight}px`;
        document.querySelector('.scroll-thumb').style.top = `${thumbTop}px`;
    });
});
