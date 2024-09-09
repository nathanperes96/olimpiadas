// Array de objetos, onde cada objeto representa um atleta com suas informações
let dados = [
    // ... (dados dos atletas)
  ];
  
  // Função para realizar a pesquisa
  function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor do campo de pesquisa
    let campoPesquisa = document.getElementById("campo_pesquisa").value;
  
    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
      // Se estiver vazio, exibe uma mensagem de "nenhum atleta encontrado"
      section.innerHTML = '<p>Nenhum atleta encontrado.</p>';
      return; // Encerra a função
    }
  
    // Converte o termo de pesquisa para minúsculas para tornar a pesquisa case-insensitive
    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = '';
  
    // Itera sobre cada objeto no array de dados
    for (let dado of dados) {
      // Converte as propriedades do objeto para minúsculas para a comparação
      let titulo = dado.titulo.toLowerCase();
      let descricao = dado.descricao.toLowerCase();
      let tags = dado.tags.toLowerCase();
  
      // Verifica se o termo de pesquisa está presente no título, descrição ou tags
      if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Se encontrar uma correspondência, adiciona o resultado à string de resultados
        resultados += `
          <div class="item-resultado">
            </div>
        `;
      }
    }
  
    // Verifica se foram encontrados resultados
    if (!resultados) {
      // Se não houver resultados, exibe uma mensagem de "nada encontrado"
      resultados = "<p>Nada encontrado</p>";
    }
  
    // Atualiza o conteúdo da seção HTML com os resultados
    section.innerHTML = resultados;
  }