// Função para carregar os itens a partir do arquivo JSON
async function carregarItens() {
    try {
        const response = await fetch("tags.json");
        const itens = await response.json();
        return itens;
    } catch (erro) {
        console.error("Erro ao carregar os dados:", erro);
        return [];
    }
}

// Função para filtrar os itens com base na categoria selecionada
async function filtrarItens(categoria) {
    const checkboxes = document.querySelectorAll(".checkbox-filtro");

    // Desmarca todos os checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    // Marca apenas o checkbox correspondente à categoria selecionada
    const checkboxAtivo = [...checkboxes].find(cb => cb.parentElement.textContent.trim().toLowerCase().includes(categoria));
    if (checkboxAtivo) checkboxAtivo.checked = true;

    // Carrega os itens do arquivo JSON
    const dadosItens = await carregarItens();

    // Filtra os itens conforme a categoria selecionada
    const itensFiltrados = categoria === "" ? dadosItens : dadosItens.filter(item => item.categoria === categoria);

    // Exibe os itens filtrados
    exibirItens(itensFiltrados);
}

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

// Carrega e exibe todos os itens ao abrir a página
carregarItens().then(dadosItens => exibirItens(dadosItens));