
let currentIndex = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Remove the 'active' class from the current item
    items[currentIndex].classList.remove('active');

    // Update the index
    currentIndex = (currentIndex + direction + totalItems) % totalItems;

    // Add the 'active' class to the new item
    items[currentIndex].classList.add('active');

    // Update the transform property for smooth sliding
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

window.addEventListener("load", function(){ 
    let campo_texto = document.getElementById("texto");
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
});