
function cria_array_ongs() {
    return fetch("../ongs.json")
        .then(response => response.json())
        .then(Ongs => {
            return Ongs.ongs; 
        })

}

function busca_nome_ong(array) {
    let val_campo_texto = document.getElementById("texto").value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
    if (val_campo_texto == ""){
        //talvez envie para a pagina resultado o que não tem nada encontrado com esse nome
        return
    }

    for (let ong of array) {

        if(val_campo_texto.includes(ong.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))){
            window.location.href =  'HTML/resultado-busca.html';

         // e aqui provavelmente vamos enviar um array com os elementos ja filtrados em um array para uma funçao que expoe esses elementos no js do resultado
        }
    }
}


window.addEventListener("load", async function(){
    let campo_texto = document.getElementById("texto");

    let array_ongs = await cria_array_ongs();
    
    campo_texto.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            busca_nome_ong(array_ongs);
        }
        
    });
});