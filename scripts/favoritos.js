const CHAVE_FAVORITOS = "favoritos";

function pegar_todos_favoritos() {
    const favoritos = JSON.parse(localStorage.getItem(CHAVE_FAVORITOS)) ?? [];
    return favoritos;
}

function adicionar_um_favorito(id) {
    if(checar_duplicata(id)){
        return;
    }

    let favoritos = pegar_todos_favoritos();
    favoritos.push(id);
    localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favoritos));
}

function remover_um_favorito(id) {
    if(!checar_duplicata(id)){
        return;
    }

    let favoritos = pegar_todos_favoritos();
    favoritos = favoritos.filter(x => x !== id);
    localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favoritos));
}

function checar_duplicata(id) {
    let favoritos = pegar_todos_favoritos();
    return favoritos.includes(id);
}




