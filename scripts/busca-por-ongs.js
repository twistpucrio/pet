function cria_array_ongs() {
    return fetch("../jsons/ongs.json")
        .then(response => response.json())
        .then(Ongs => {
            return Ongs.ongs; 
        })

}
function cria_array_educacional() {
    return fetch("/jsons/educacional.json")
        .then(response => response.json())
        .then(Educacional => {
            if (Array.isArray(Educacional.educacional)) {
                return Educacional.educacional;
            } else {
                console.error("A chave 'eventos' não é um array válido.");
                return [];  // Retorna um array vazio em caso de erro
            }
        })
        .catch(error => {
            console.error("Erro ao carregar o arquivo JSON:", error);
            return [];  // Retorna um array vazio em caso de erro
        });
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

async function busca_educacional(array) { 

    console.log(array)
    // Obtém o valor do campo de texto, normaliza e remove acentos
    let val_campo_texto = document.getElementById("texto").value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    // Se o campo de texto estiver vazio, não faz nada
    if (val_campo_texto === "") {
        return;
    }

    let idsEducacional = [];

    // Itera sobre cada objeto do array
    for (let educacional of array) {
        // Normaliza e remove acentos das propriedades de interesse
        
        // let nome = educacional.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        let texto = educacional.texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        let titulo = educacional.titulo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");


        // Verifica se o texto de busca corresponde ao nome, texto ou título
        if ( texto.includes(val_campo_texto) || titulo.includes(val_campo_texto)) {
            // Se corresponder, adiciona o id à lista

            idsEducacional.push(educacional.id); 
        }
    }

    // Remove IDs duplicados utilizando Set
    idsEducacional = [...new Set(idsEducacional)];

    // Exibe os ids filtrados
    console.log(idsEducacional);

    // Caso deseje enviar essa lista para outra função ou manipulá-la, faça aqui
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

    idsPetshops = [...new Set(idsPetshops)];

    console.log(idsPetshops);

}





async function batatinha() {
    let json_educacional = await cria_array_educacional();

    

    if (Array.isArray(json_educacional)) {
        lista_educacional = busca_educacional(json_educacional);
    } else {
        console.error("O retorno de cria_array_educacional não é um array válido.");
    }
}
// window.location.href = 'HTML/resultado-busca.html';


window.addEventListener("load", function(){
    let campo_texto = document.getElementById("texto");

    
    
    campo_texto.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            batatinha();
        }
        
    });
});