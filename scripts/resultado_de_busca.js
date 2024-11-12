window.addEventListener("load", async function () {
    let botao_barra_pesquisa = document.querySelector('#botao-barra-pesquisa');
    let texto_barra_pesquisa = document.querySelector('#texto');


    botao_barra_pesquisa.addEventListener("click", function() {
        //Aqui deve-se chamar as funções de busca de elementos na barra de pesquisa.
        
    });

    texto_barra_pesquisa.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            //Aqui deve-se chamar as funções de busca de elementos na barra de pesquisa.
        }
        
    });
});