let currentIndex = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    items[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + direction + totalItems) % totalItems;

    items[currentIndex].classList.add('active');
}


function limpar_barra_pesquisa() {
    let barra_pesquisa = document.getElementById("searchInput");
    barra_pesquisa.value = "";
  }

window.addEventListener("load", function(){ 
    let campo_texto = document.getElementById("searchInput");
    let btn_barra_pesquisa = document.getElementById("botao-barra-pesquisa");
    
    btn_barra_pesquisa.addEventListener('click', function(event){
        let searchTerm = campo_texto.value;
        window.location.href = `HTML/resultado-busca.html?search=${encodeURIComponent(searchTerm)}`;
    });

    campo_texto.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            let searchTerm = campo_texto.value;
            window.location.href = `../views/resultado_busca.html?search=${encodeURIComponent(searchTerm)}`;
        }
    });

    let botao_limpar = document.getElementById("botao-limpar-pesquisa");
    botao_limpar.addEventListener("click",  function() {
      limpar_barra_pesquisa();
    });

    const items = document.querySelectorAll(".carousel-item img");
    let maxHeight = 0;

    items.forEach((img) => {
        img.style.height = "auto"; 
        if (img.offsetHeight > maxHeight) {
            maxHeight = img.offsetHeight;
        }
    });

    const carousel = document.querySelector(".carousel");
    carousel.style.height = `${maxHeight}px`;

   
    items.forEach((img) => {
        img.style.height = `${maxHeight}px`;
        img.style.objectFit = "cover"; 
    });
});