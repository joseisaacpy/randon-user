// Seleção dos elementos

// foto de perfil
let userPhoto = document.getElementById("user-photo");
// nome
let userName = document.getElementById("user-name");
// email
let userEmail = document.getElementById("user-email");
// local
let userLocation = document.getElementById("user-location");
// botao de gerar novo user
let generateUserBtn = document.getElementById("generate-user");

// URL da api
const URL = "https://randomuser.me/api/";

// função de pegar dados
async function pegarDados() {
  // try
  try {
    // faz requisicao com fetch
    let response = await fetch(URL);
    // transforma response num json
    let data = await response.json();
    // resultado
    let result = data.results[0];
    // mostra response no console (teste)
    console.log(result);

    // foto do usuario
    userPhoto.src = result.picture.large;
    // nome do usuario recebe nome que está na API
    userName.textContent = `👤 ${result.name.first} ${result.name.last}`;
    // email do usuario recebe nome que está na API
    userEmail.textContent = "📩 " + result.email;
    // local do usuario recebe nome que está na API
    userLocation.textContent = "🏙️ " + result.location.city;
  } catch (error) {
    // se der erro
    console.error(error);
  }
}
// chama a funcao
pegarDados();

generateUserBtn.addEventListener("click", () => {
  pegarDados();
});
