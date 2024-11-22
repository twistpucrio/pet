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
