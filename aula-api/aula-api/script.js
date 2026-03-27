function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
    section.innerHTML = `<p class="descricao-meta">Nenhum resultado encontrado. Digite algo.</p>`;
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase().trim();

  let resultados = "";

  for (let dado of dados) {
    let titulo = dado.titulo.toLowerCase();
    let descricao = dado.descricao.toLowerCase();

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
      resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Saiba mais</a>
        </div>
      `;
    }
  }

  if (!resultados) {
    resultados = `<p class="descricao-meta">Nenhum resultado encontrado.</p>`;
  }

  section.innerHTML = resultados;
}