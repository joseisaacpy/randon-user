// URL
const URL = "https://randomuser.me/api/";
// função de pegar dados
async function pegarDados() {
  // faz requisicao com fetch
  let response = await fetch(URL);
  // transforma response num json
  let data = await response.json();
  // mostra response no console (teste)
  console.log(data);
}
// chama a funcao
pegarDados()
