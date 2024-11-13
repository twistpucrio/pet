function cria_array_ongs() {
    return fetch("/jsons/ongs.json")
        .then(response => response.json())
        .then(Ongs => {
            if (Array.isArray(Ongs.ongs)) {
                return Ongs.ongs;
            } else {
                console.error("A chave 'eventos' não é um array válido.");
                return [];  
            }
        })
        .catch(error => {
            console.error("Erro ao carregar o arquivo JSON:", error);
            return [];  
        });
}
function cria_array_educacional() {
    return fetch("/jsons/educacional.json")
        .then(response => response.json())
        .then(Educacional => {
            if (Array.isArray(Educacional.educacional)) {
                return Educacional.educacional;
            } else {
                console.error("A chave 'eventos' não é um array válido.");
                return [];
            }
        })
        .catch(error => {
            console.error("Erro ao carregar o arquivo JSON:", error);
            return [];  
        });
}
function cria_array_eventos(){
    return fetch("/jsons/educacional.json")
        .then(response => response.json())
        .then(Eventos => {
            if (Array.isArray(Eventos.eventos)) {
                return Eventos.eventos;
            } else {
                console.error("A chave 'eventos' não é um array válido.");
                return [];
            }
        })
        .catch(error => {
            console.error("Erro ao carregar o arquivo JSON:", error);
            return [];  
        });
}
function cria_array_petshops(){
    return fetch("/jsons/educacional.json")
    .then(response => response.json())
    .then(Petshops => {
        if (Array.isArray(Petshops.petshops)) {
            return Petshops.petshops;
        } else {
            console.error("A chave 'eventos' não é um array válido.");
            return [];
        }
    })
    .catch(error => {
        console.error("Erro ao carregar o arquivo JSON:", error);
        return [];  
    });
}


async function filtra_jsons(array) { 
    let val_campo_texto = document.getElementById("texto").value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
    if (val_campo_texto === "") {
        return;
    }
    
    let ids = [];
    
    for (let elemento of array) {
        
        let texto = elemento.texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        let titulo = elemento.titulo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        
        
        if (texto.includes(val_campo_texto) || titulo.includes(val_campo_texto)) {

            ids.push(elemento.id); 
        }
    }
    
    ids = [...new Set(ids)];
    
    return ids;
    
}

async function filtra_pesquisa () {
    let json_educacional = await cria_array_educacional();
    
    
    
    if (Array.isArray(json_educacional)) {
        lista_educacional = await filtra_jsons(json_educacional);
    } else {
        console.error("O retorno de cria_array_educacional não é um array válido.");
    }
    console.log(lista_educacional);
}
// window.location.href = 'HTML/resultado-busca.html';


window.addEventListener("load", function(){
    let campo_texto = document.getElementById("texto");
    let btn_barra_pesquisa = document.getElementById("texto");
    btn_barra_pesquisa.addEventListener('click', function(event){
        filtra_pesquisa();
        
    });
    
    campo_texto.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            filtra_pesquisa();
        }
        
    });
});

// function busca_eventos(array) {
    // Lendo a palavra digitada na barra de pesquisa
    // let val_campo_texto = document.getElementById("texto").value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
    // Se não há nada no campo de pesquisa, não faz nada
    // if (val_campo_texto == "") {
        //     return;
        // }
        
        // Inicializa uma lista para armazenar os IDs encontrados
        // let idsEventos = [];
        
        // Percorre todos os elementos da lista de ONGs
        // for (let eventos of array) {
            
        // Verifica se o nome da ONG contém a palavra pesquisada
        // if (val_campo_texto.includes(eventos.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
            //     idsEventos.push(eventos.id); // Adiciona o ID na lista
            // }
            
            // Verifica se o texto da ONG contém a palavra pesquisada
            // if (val_campo_texto.includes(eventos.texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
                //     idsEventos.push(eventos.id); // Adiciona o ID na lista
                // }
                
                // Verifica se o título da ONG contém a palavra pesquisada
                //     if (val_campo_texto.includes(eventos.titulo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
                    //         idsEventos.push(eventos.id); // Adiciona o ID na lista
                    //     }
                    // }
                    // Remove duplicados da lista de IDs
                    //   idsEventos = [...new Set(idsEventos)];
                    
                    // Aqui você pode fazer algo com os IDs encontrados, por exemplo, passar para outra função
                    // Exemplo de log dos IDs encontrados:
                    //   console.log(idsEventos);
                    
                    // Caso deseje enviar essa lista para outra função ou manipular os dados, pode fazer aqui.
                    // }
                    
                    
                    // function busca_petshops(array) {
    // Lendo a palavra digitada na barra de pesquisa
    // let val_campo_texto = document.getElementById("texto").value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
    // Se não há nada no campo de pesquisa, não faz nada
    // if (val_campo_texto == "") {
        //     return;
        // }
        
        // Inicializa uma lista para armazenar os IDs encontrados
        // let idsPetshops = [];
        
        // Percorre todos os elementos da lista de ONGs
        // for (let petshops of array) {
            
        // Verifica se o nome da ONG contém a palavra pesquisada
        // if (val_campo_texto.includes(petshops.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
            //     idsPetshops.push(petshops.id); // Adiciona o ID na lista
            // }
            
            // Verifica se o texto da ONG contém a palavra pesquisada
            // if (val_campo_texto.includes(petshops.texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
                //     idsPetshops.push(petshops.id); // Adiciona o ID na lista
                // }
                
                // Verifica se o título da ONG contém a palavra pesquisada
                //         if (val_campo_texto.includes(petshops.titulo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
                    //             idsPetshops.push(petshops.id); 
                    //     }
                    
                    //     idsPetshops = [...new Set(idsPetshops)];
                    
                    //     console.log(idsPetshops);
                    
                    // }
                    
                    // function busca_ong(array) {
                        // Lendo a palavra digitada na barra de pesquisa
                        // let val_campo_texto = document.getElementById("texto").value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
                    
                        // Se não há nada no campo de pesquisa, não faz nada
                        // if (val_campo_texto == "") {
                        //     return;
                        // }
                    
                        // Inicializa uma lista para armazenar os IDs encontrados
                        // let idsOng = [];
                    
                        // Percorre todos os elementos da lista de ONGs
                        // for (let ong of array) {
                            
                            // Verifica se o nome da ONG contém a palavra pesquisada
                            // if (val_campo_texto.includes(ong.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
                            //     idsOng.push(ong.id); // Adiciona o ID na lista
                            // }
                    
                            // Verifica se o texto da ONG contém a palavra pesquisada
                            // if (val_campo_texto.includes(ong.texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
                            //     idsOng.push(ong.id); // Adiciona o ID na lista
                            // }
                    
                            // Verifica se o título da ONG contém a palavra pesquisada
                        //     if (val_campo_texto.includes(ong.titulo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
                        //         idsOng.push(ong.id); // Adiciona o ID na lista
                        //     }
                        // }
                    
                        // Remove duplicados da lista de IDs
                        // idsOng = [...new Set(idsOng)];
                    
                        // Aqui você pode fazer algo com os IDs encontrados, por exemplo, passar para outra função
                        // Exemplo de log dos IDs encontrados:
                        // console.log(idsOng);
                    
                        // Caso deseje enviar essa lista para outra função ou manipular os dados, pode fazer aqui.
                    // }
                    
                    
                    
                    