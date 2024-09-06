function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
console.log(section);

let caminhoImagem = "img/X-removebg-preview.png";
let novoConteudo = `<img src="${caminhoImagem}" alt="Resultado da pesquisa width="300" height="300">`;
let campoPesquisa = document.getElementById("campo-pesquisa").value
if (campoPesquisa == "") {
    section.innerHTML = novoConteudo
    return
}
campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let sinopse = "";

for (let dado of dados) {
    titulo = dado.titulo.toLocaleLowerCase()
    sinopse = dado.sinopse.toLowerCase()
    if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.sinopse}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
`
    }
   
}
    if (!resultados) {
        resultados =  `<img src="${caminhoImagem}" alt="Resultado da pesquisa width="300" height="300">`
    }

section.innerHTML = resultados

}

