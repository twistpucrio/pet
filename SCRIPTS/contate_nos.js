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
quantidade de caracteres (mínimo 11; máximo 11): ;
não permitir letras (maiúsculas e minúsculas): OK ;
não permitir caracteres especiais: OK ;
não permitir espaços em branco: ;
*/

function formato_telefone(telefone){
    if ((telefone.search(/[A-Z]/)!=-1)||(telefone.search(/[a-z]/)!=-1)){ //Caso tenha letras
        console.log("O telefone possui letra(s).")
        return false;
    }
    else if (telefone.search(/[^a-zA-Z0-9\-\/]/) !=-1){ //Caso tenha caracteres especiais
        console.log("O telefone possui caracteres especiais.")
        return false;
    } 
    else if (telefone.search()){ //Caso não tenha 11 numeros

    }
}



function limpar(){
    let nome = document.querySelector("#nome");
    let email = document.querySelector("#email");
    let telefone = document.querySelector("#telefone");


    nome.value = "";
    email.value = "";

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


                if (nome != "" && email != "" && telefone!="") {
                    if (formato_nome(nome) && formato_email(email) && formato_telefone(telefone)) {
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
    }
)

//COMPLETO