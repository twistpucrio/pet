//Arquivo Javascript - Projeto 1.

//caso do NOME: busca de números.

//NÃO deve ter nenhum número no campo nome.

function buscar_numeros(texto){
    let numeros_encontrados = texto.search(/\d/);
    return numeros_encontrados;
}

function formato_nome(nome) {
    if (buscar_numeros(nome) != -1) {  //caso onde há número no nome. caso impróprio.
        return false;
    }
    else {
        return true;
    }
}

//caso de usuário:
/*
function formato_usuario(usuario) {
    if (usuario.search(/[0-9]/) == 0) { //caso tenha números no começo. caso impróprio.
        console.log("O usuário começa com número(s).")
        return false;
    }
    else if (usuario.search(/\s/) != -1) { //caso tenha espaço em branco. caso impróprio. (caso de regex possível, testar: /^[ \t]+$/)
        //alert("espaço em branco com /\s/: " + usuario.search(/\s/));
        //alert("espaço em branco com /^[ \t]+$/: " + usuario.search(/^[ \t]+$/));
        console.log("O usuário possui espaço em branco.")
        return false;
    }
    else if (usuario.search(/[^A-Za-z0-9._]/) != -1) { //caso tenha caracteres especiais, fora ponto final e underscore. caso impróprio.
        console.log("O usuário possui caractere(s) especiais não permitidos. Os caracteres especiais permitidos são o ponto final e underscore.")
        return false;
    }
    else if (usuario.search(/[A-Z]/) != -1) { //caso tenha letra maiúscula. caso impróprio.
        console.log("O usuário possui letra(s) maiúscula(s).")
        return false;
    }
    else {
        return true;
    }
}
*/
//caso de email:
/*
todas as letras em minúsculo: OK;
os caracteres especiais permitidos são ponto final, underscore e um arroba: OK;
deve haver algum texto antes e depois da arroba: OK.
*/

function formato_email(email) {
    if (email.search(/[A-Z]/) != -1) { //caso tenha letra maiúscula. caso impróprio.
        console.log("O email possui letra(s) maiúscula(s).");
        return false;
    }
    else if (email.search(/[^A-Za-z0-9._@]/) != -1) { //caso tenha caracteres especiais, fora ponto final, underscore e um arroba. caso impróprio.
        console.log("O email possui caractere(s) especiais não permitidos. Os caracteres especiais permitidos são o ponto final, underscore e um arroba.");
        return false;
    }
    else if (email.search(/^[a-z0-9._]+@[a-z0-9._]+$/) == -1) { //caso NÃO tenha texto antes e depois do arroba. caso impróprio.
        console.log("O email não possui algum texto antes e depois da arroba.");
        return false;
    }
    else {
        return true;
    }
}

//caso de telefone:

/*
quantidade de caracteres (mínimo 11; máximo 11): OK ;
não permitir letras (maiúsculas e minúsculas): OK ;
não permitir caracteres especiais: OK ;
*/

function formato_telefone(telefone){
    if ((telefone.search(/[A-Z]/)!=-1)||(telefone.search(/[a-z]/)!=-1)){ //Caso tenha letras
        console.log("O telefone possui letra(s).")
        return false;
    }
    else if (telefone.search(/[^a-zA-Z0-9\-\/]/) !=-1){ //Caso tenha caracteres especiais
        console.log("O telefone possui caractere(s) especiai(s).")
        return false;
    } 
    else if (telefone.length<11){ //Caso não tenha 11 numeros
        console.log("O telefone possui menos que 11 dígitos.")
        return false;
    }
    else if (telefone.length>11){
        console.log("O telefone possui mais que 11 dígitos.")
        return false;
    }
    else{
        return true;
    }
}

//caso titulo:
/*
quantidade de caracteres (máximo 32): OK ;
*/

function formato_titulo(titulo){
    if (titulo.length>32){ //Caso tenha mais que 32 caracteres
        console.log("O telefone possui mais que 32 dígitos.")
        return false;
    }
    else{
        return true;
    }
}

//caso descrição:
/*
quantidade de caracteres (máximo 500): OK ;
*/

function formato_descricao(descricao){
    if (descricao.length>500){ //Caso tenha mais que 32 caracteres
        console.log("A descrição possui mais que 500 dígitos.")
        return false;
    }
    else{
        return true;
    }
}


function limpar(){
    let nome = document.querySelector("#nome");
    let email = document.querySelector("#email");
    let telefone = document.querySelector("#telefone");
    let titulo = document.querySelector("#titulo");
    let descricao = document.querySelector("#descricao");
    let endereco = document.querySelector("#descricao");

    nome.value = "";
    email.value = "";
    telefone.value = "";
    titulo.value = "";
    descricao.value = "";
    endereco.value = "";
}

window.addEventListener("load", 
    function (){
        //evento 1 - busca no texto na textarea após clicar no botão "Submeter".

        //id do botão submeter: botao_submeter;
        //name do botão submeter: submeter.

        let evento_enviar = document.querySelector('#enviar');

        evento_enviar.addEventListener("click", function(){
                let nome = document.querySelector('#nome').value;
                let email = document.querySelector('#email').value;
                let telefone = document.querySelector('#telefone').value;
                let titulo = document.querySelector('#titulo').value;
                let descricao = document.querySelector('#descricao').value;
                let endereco = document.querySelector('#endereco').value;

                if (nome != "" && email != "" && telefone!="" && titulo !="" && descricao !="" && endereco != "") {
                    if (formato_nome(nome) && formato_email(email) && formato_telefone(telefone) && formato_titulo(titulo) && formato_descricao(descricao)) {
                        alert("Formulário submetido com sucesso! Obrigada :)")
                    }
                    else {
                        if (formato_nome(nome) == false) {
                            alert("O formato do campo Nome não está próprio.\nCampo Nome não deve ter nenhum número.");
                        }
                        if (formato_email(email) == false) {
                            alert("O formato do campo Email não está próprio.\nCampo Email deve:\n-ter todas as letras em minúsculo;\n-permitir os caracteres especiais ponto final, underscore e um arroba;\n-haver algum texto antes e depois da arroba.");
                        }
                        if(formato_telefone(telefone) == false){
                            alert("O formato to campo telefone não está próprio")
                        }
                        if(formato_titulo(titulo) == false){
                            alert("O formato to campo titulo não está próprio")
                        }
                        if(formato_descricao(descricao) == false){
                            alert("O formato to campo descrição não está próprio")
                        }
                    
                    }
                }

                else {
                    alert("Algum campo está vazio. Por favor, preencha todas as informações do formúlario.");
                }               
            }
        )
        //evento 2 - limpar o formulário após clicar no botão "Limpar".

        let botao_limpar = document.querySelector("#limpar");

        botao_limpar.addEventListener("click", function(){
                limpar();
        });

        //Verifica caso nenhum arquivo tenha sido selecionado:
        if(!file){
            alert("Por favor, selecione um arquivo.");
            return;
        }

        //Verifica se um tipo de arquivo foi selecionado:
        if(!selectedFileType){
            alert("Por favor, selecione um tipo de arquivo.");
            return;
        }

        //Transforma a extensão do arquivo para minúscula:
        let fileType = file.name.split('.').pop().toLowerCase();

        //Define as extensões válidas para cada tipo de arquivo:
        let validSelection = {
            jpg: ['jpg', 'jpeg', 'png'],  
        }
        
        // Verifica se a extensão do arquivo é permitida para o tipo selecionado
        if (!validSelection[selectedFileType.value].includes(fileType)) {
            alert("Tipo de arquivo não permitido! Por favor, selecione o tipo de arquivo correto.");
            return;
        }
    }
)

//COMPLETO