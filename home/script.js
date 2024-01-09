document.addEventListener("DOMContentLoaded", function () {
    const scrollDownButton = document.getElementById("scrollDownButton");

    scrollDownButton.addEventListener("click", function () {
        scrollDown();
    });

    function scrollDown() {
        // Use document.documentElement para navegadores modernos e document.body para navegadores mais antigos
        const scrollTopValue = document.documentElement.scrollTop || document.body.scrollTop;

        // Ajuste o valor de scrollTop para rolar para baixo (adicione um valor maior para rolar mais)
        const targetScrollTop = scrollTopValue + 720;

        // Animação suave de rolagem
        window.scrollTo({
            top: targetScrollTop,
            behavior: "smooth"
        });
    }
});
