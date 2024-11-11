

//====ONGS====
function cria_array_ongs() {
    return fetch("../jsons/ongs.json")
        .then(response => response.json())
        .then(Ongs => {
            return Ongs.ongs; 
        })

}
function cria_array_educacional(){
    return fetch("../jsons/educacional.json")
        .then(response => response.json())
        .then(Educacional => {
            return Educacional.eventos; 
        })
}
function cria_array_eventos(){
    return fetch("../jsons/eventos.json")
        .then(response => response.json())
        .then(Eventos => {
            return Eventos.eventos; 
        })
}
function cria_array_petshops(){
    return fetch("../jsons/petshops.json")
        .then(response => response.json())
        .then(Petshops => {
            return Petshops.petshops; 
        })
}

function busca_ong(array) {
    // Lendo a palavra digitada na barra de pesquisa
    let val_campo_texto = document.getElementById("texto").value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    // Se não há nada no campo de pesquisa, não faz nada
    if (val_campo_texto == "") {
        return;
    }

    // Inicializa uma lista para armazenar os IDs encontrados
    let idsOng = [];

    // Percorre todos os elementos da lista de ONGs
    for (let ong of array) {
        
        // Verifica se o nome da ONG contém a palavra pesquisada
        if (val_campo_texto.includes(ong.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
            idsOng.push(ong.id); // Adiciona o ID na lista
        }

        // Verifica se o texto da ONG contém a palavra pesquisada
        if (val_campo_texto.includes(ong.texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
            idsOng.push(ong.id); // Adiciona o ID na lista
        }

        // Verifica se o título da ONG contém a palavra pesquisada
        if (val_campo_texto.includes(ong.titulo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
            idsOng.push(ong.id); // Adiciona o ID na lista
        }
    }

    // Remove duplicados da lista de IDs
    idsOng = [...new Set(idsOng)];

    // Aqui você pode fazer algo com os IDs encontrados, por exemplo, passar para outra função
    // Exemplo de log dos IDs encontrados:
    console.log(idsOng);

    // Caso deseje enviar essa lista para outra função ou manipular os dados, pode fazer aqui.
}

//EDUCACIONAL
function busca_educacional(array) {
    // Lendo a palavra digitada na barra de pesquisa
    let val_campo_texto = document.getElementById("texto").value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    // Se não há nada no campo de pesquisa, não faz nada
    if (val_campo_texto == "") {
        return;
    }

    // Inicializa uma lista para armazenar os IDs encontrados
    let idsEducacional = [];

    // Percorre todos os elementos da lista de ONGs
    for (let educacional of array) {
        
        // Verifica se o nome da ONG contém a palavra pesquisada
        if (val_campo_texto.includes(educacional.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
            idsEducacional.push(educacional.id); // Adiciona o ID na lista
        }

        // Verifica se o texto da ONG contém a palavra pesquisada
        if (val_campo_texto.includes(educacional.texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
            idsEducacional.push(educacional.id); // Adiciona o ID na lista
        }

        // Verifica se o título da ONG contém a palavra pesquisada
        if (val_campo_texto.includes(educacional.titulo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
            idsEducacional.push(educacional.id); // Adiciona o ID na lista
        }
    }

    // Remove duplicados da lista de IDs
    idsEducacional = [...new Set(idsEducacional)];

    // Aqui você pode fazer algo com os IDs encontrados, por exemplo, passar para outra função
    // Exemplo de log dos IDs encontrados:
    console.log(idsEducacional);

    // Caso deseje enviar essa lista para outra função ou manipular os dados, pode fazer aqui.
}

function busca_eventos(array) {
    // Lendo a palavra digitada na barra de pesquisa
    let val_campo_texto = document.getElementById("texto").value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    // Se não há nada no campo de pesquisa, não faz nada
    if (val_campo_texto == "") {
        return;
    }

    // Inicializa uma lista para armazenar os IDs encontrados
    let idsEventos = [];

    // Percorre todos os elementos da lista de ONGs
    for (let eventos of array) {
        
        // Verifica se o nome da ONG contém a palavra pesquisada
        if (val_campo_texto.includes(eventos.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
            idsEventos.push(eventos.id); // Adiciona o ID na lista
        }

        // Verifica se o texto da ONG contém a palavra pesquisada
        if (val_campo_texto.includes(eventos.texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
            idsEventos.push(eventos.id); // Adiciona o ID na lista
        }

        // Verifica se o título da ONG contém a palavra pesquisada
        if (val_campo_texto.includes(eventos.titulo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
            idsEventos.push(eventos.id); // Adiciona o ID na lista
        }
    }
      // Remove duplicados da lista de IDs
      idsEventos = [...new Set(idsEventos)];

      // Aqui você pode fazer algo com os IDs encontrados, por exemplo, passar para outra função
      // Exemplo de log dos IDs encontrados:
      console.log(idsEventos);
  
      // Caso deseje enviar essa lista para outra função ou manipular os dados, pode fazer aqui.
  }


    function busca_petshops(array) {
        // Lendo a palavra digitada na barra de pesquisa
        let val_campo_texto = document.getElementById("texto").value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
        // Se não há nada no campo de pesquisa, não faz nada
        if (val_campo_texto == "") {
            return;
        }
    
        // Inicializa uma lista para armazenar os IDs encontrados
        let idsPetshops = [];
    
        // Percorre todos os elementos da lista de ONGs
        for (let petshops of array) {
            
            // Verifica se o nome da ONG contém a palavra pesquisada
            if (val_campo_texto.includes(petshops.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
                idsPetshops.push(petshops.id); // Adiciona o ID na lista
            }
    
            // Verifica se o texto da ONG contém a palavra pesquisada
            if (val_campo_texto.includes(petshops.texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
                idsPetshops.push(petshops.id); // Adiciona o ID na lista
            }
    
            // Verifica se o título da ONG contém a palavra pesquisada
            if (val_campo_texto.includes(petshops.titulo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
                idsPetshops.push(petshops.id); // Adiciona o ID na lista
            }
        }
    
        // Remove duplicados da lista de IDs
        idsPetshops = [...new Set(idsPetshops)];
    
        // Aqui você pode fazer algo com os IDs encontrados, por exemplo, passar para outra função
        // Exemplo de log dos IDs encontrados:
        console.log(idsPetshops);
    
        // Caso deseje enviar essa lista para outra função ou manipular os dados, pode fazer aqui.
    }
    






//criar uma função para:
//ja ta enviando para a pagina de resultados
window.location.href = 'HTML/resultado-busca.html';


window.addEventListener("load", async function(){
    let campo_texto = document.getElementById("texto");

    let array_ongs = await cria_array_ongs();
    let cria_array_educacional = await cria_array_educacional();
    let cria_array_eventos = await cria_array_eventos();
    
    campo_texto.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            busca_ong(array_ongs);
            busca_educacional(cria_array_educacional);
            busca_eventos(cria_array_eventos);
        }
        
    });
});