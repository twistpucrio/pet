window.addEventListener("load", async function () {
    let botao_barra_pesquisa = document.querySelector('#botao-barra-pesquisa');
    let texto_barra_pesquisa = document.querySelector('#texto');

    //Barra de pesquisa
    botao_barra_pesquisa.addEventListener("click", function() {
        //Aqui deve-se chamar as funções de busca de elementos na barra de pesquisa.
        
    });

    texto_barra_pesquisa.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            //Aqui deve-se chamar as funções de busca de elementos na barra de pesquisa.
        }
        
    });

    //Botões de Tag
    let checkbox_doacao = document.querySelector('#doacao');
    let checkbox_castracao = document.querySelector('#castracao');
    let checkbox_vacinacao = document.querySelector('#vacinacao');
    let checkbox_lazer = document.querySelector('#lazer');
    let checkbox_saude = document.querySelector('#saude');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                
            }
        });
    });

    let radio_eventos = document.querySelector('#eventos');
    let radio_educacionais = document.querySelector('#educacionais');

    radios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            if (this.checked) {
                //
            }
        });
    });
});