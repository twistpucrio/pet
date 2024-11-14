// js/controller.js
import { posts } from "../constants/posts.js";

function renderPosts(posts) {
  const container = document.getElementById("postContainer");
  container.innerHTML = "";

  posts.forEach((post) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = post.caminho_imagem || "../img/default.jpg";
    img.alt = post.alt_imagem || "Imagem de post";

    const title = document.createElement("h3");
    title.textContent = post.titulo;

    const text = document.createElement("p");
    text.textContent = post.texto || "Descrição do evento disponível no local.";

    const tags = document.createElement("p");
    tags.textContent = `Tags: ${post.tags.join(", ")}`;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(text);
    card.appendChild(tags);

    container.appendChild(card);
  });
}

// Function to search posts by title
function searchPosts(searchTerm) {
  const filteredPosts = posts.filter((post) =>
    post["titulo"].toLowerCase().includes(searchTerm.toLowerCase())
  );
  renderPosts(filteredPosts);
}

document.addEventListener("DOMContentLoaded", () => {
  renderPosts(posts);
});

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchPosts(event.target.value);
  }
});
