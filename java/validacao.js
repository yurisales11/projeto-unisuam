let emailLog = "";
let senhaLog = "";

function validaçãoTLOgin() {
  emailLog = document.getElementById("email-log").value;
  if (emailLog == "") {
    toast("gay");
  }
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;

  if (!emailRegex.test(emailLog)) {
    console.log(" email true");
  } else {
    console.log("error");
  }

  senhaLog = document.getElementById("senha-log").value;
  if (senhaLog == "") {
    console.log("gay2");
  }
}

let nome = "";
let cep = "";
let email = "";
let senha = "";
let confSenha = "";
let telefone = "";
let Mnome = "";
let login = "";
let telefoneFixo = "";

function validaçãoCAD() {
  nome = document.getElementById("");
  if (nome == "") {
    console.log("prencha o campo ");
  }

  cep = document.getElementById("CEP");
  if (cep == "") {
    console.log("prencha o campo ");
  }

  email = document.getElementById("E-mail");
  if (email == "") {
    console.log("prencha o campo ");
  }

  confSenha = document.getElementById("ConfirmSenha");
  if (confSenha == "") {
    console.log("prencha o campo ");
  }

  senha = document.getElementById("Senha");
  if (senha == "") {
    console.log("prencha o campo ");
  }

  telefone = document.getElementById("Telefone Celular");
  if (telefone == "") {
    console.log("prencha o campo ");
  }

  telefoneFixo = document.getElementById("Fixo");
  if (telefoneFixo == "") {
    console.log("prencha o campo ");
  }

  Mnome = document.getElementById("nomemae");
  if (Mnome == "") {
    console.log("prencha o campo ");
  }

  login = document.getElementById("Login");
  if (login == "") {
    console.log("prencha o campo ");
  }
}
