import { posts } from '../constants/posts.js';

// Função para exibir os itens na página
function exibirItens(itens) {
    const containerItens = document.getElementById("container-itens");
    containerItens.innerHTML = ""; // Limpa o conteúdo anterior

    itens.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";
        itemDiv.textContent = item.nome;
        containerItens.appendChild(itemDiv);
    });
}

// Função para filtrar os itens com base nas tags selecionadas
function filtrarItens() {
    // Obtém todas as checkboxes de filtro
    const checkboxes = document.querySelectorAll(".checkbox-filtro");

    // Cria uma lista das tags selecionadas
    const tagsSelecionadas = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    // Filtra os itens conforme as tags selecionadas
    const itensFiltrados = tagsSelecionadas.length === 0 
        ? posts 
        : posts.filter(item => item.tags.some(tag => tagsSelecionadas.includes(tag)));

    // Exibe os itens filtrados
    exibirItens(itensFiltrados);
}

// Adiciona o evento de mudança a cada checkbox
document.querySelectorAll(".checkbox-filtro").forEach(checkbox => {
    checkbox.addEventListener("change", filtrarItens);
});

// Exibe todos os itens ao carregar a página
exibirItens(posts);