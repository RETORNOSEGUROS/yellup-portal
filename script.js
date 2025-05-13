
// Configuração do Firebase (substituir pelo seu firebaseConfig)
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO.firebaseapp.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_BUCKET.appspot.com",
  messagingSenderId: "SEU_MESSAGING_ID",
  appId: "SEU_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const mensagem = document.getElementById('mensagem');

  auth.signInWithEmailAndPassword(email, senha)
    .then(() => {
      window.location.href = "index.html";
    })
    .catch(error => {
      mensagem.textContent = "Erro: " + error.message;
    });
}
