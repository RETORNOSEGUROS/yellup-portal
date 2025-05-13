const firebaseConfig = {
  apiKey: "AIzaSyC5ZrkEy7KuCFJOtPvI7-P-JcA0MF4im5c",
  authDomain: "painel-yellup.firebaseapp.com",
  projectId: "painel-yellup",
  storageBucket: "painel-yellup.appspot.com",
  messagingSenderId: "608347210297",
  appId: "1:608347210297:web:75092713724e617c7203e8",
  measurementId: "G-SYZ16X31KQ"
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
