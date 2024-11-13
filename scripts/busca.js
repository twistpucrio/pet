// async function carregarItens() {
//   try {
//     const response = await fetch("/JSON/busca.json");
//     const items = await response.json();
//     return items;
//   } catch (erro) {
//     console.error("Erro ao carregar os dados:", erro);
//     return [];
//   }
// }

// async function searchItems() {
//   const inputTags = document.getElementById("searchInput").value;
//   const tagsArray = inputTags.split(',').map(tag => tag.trim().toLowerCase());

//   const items = await carregarItens();

//   const filteredItems = items.filter(item =>
//     item.tags.some(tag => tagsArray.includes(tag.toLowerCase()))
//   );

//   console.log("Itens encontrados:", filteredItems);
//   exibirResultados(filteredItems);
// }

// function exibirResultados(filteredItems) {
//   const resultadoDiv = document.getElementById("main");

//   resultadoDiv.innerHTML = "";

//   if (filteredItems.length > 0) {
//     filteredItems.forEach(item => {
//       const itemElement = document.createElement("div");
//       itemElement.classList.add("resultado-item");
//       itemElement.innerHTML = `
//         <h3>${item.name}</h3>
//         <p>Tags: ${item.tags.join(", ")}</p>
//       `;
//       resultadoDiv.appendChild(itemElement);
//     });
//   } else {
//     resultadoDiv.innerHTML = "<p>Nenhum evento encontrado.</p>";
//   }
// }


