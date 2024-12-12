let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    slides[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    console.log("Current Index: ", currentIndex); // Depuração

    slides[currentIndex].classList.add('active');
}

function limpar_barra_pesquisa() {
    let barra_pesquisa = document.getElementById("searchInput");
    barra_pesquisa.value = "";
  }
  

window.addEventListener("load", function() {
    let campo_texto = document.getElementById("searchInput");
    let btn_barra_pesquisa = document.getElementById("botao-barra-pesquisa");

    btn_barra_pesquisa.addEventListener('click', function(event) {
        let searchTerm = campo_texto.value;
        window.location.href = `HTML/resultado-busca.html?search=${encodeURIComponent(searchTerm)}`;
    });

    campo_texto.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            let searchTerm = campo_texto.value;
            window.location.href = `../views/resultado_busca.html?search=${encodeURIComponent(searchTerm)}`;
        }
    });

    let botao_limpar = document.getElementById("botao-limpar-pesquisa");
    botao_limpar.addEventListener("click", function() {
        limpar_barra_pesquisa();
    });
});
