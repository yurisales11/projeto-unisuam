function toast(frase) {
  let toast = document.getElementById("toast");
  toast.textContent = frase.toString();
  toast.classList.remove("hidden");
  toast.classList.add("show");
  setTimeout(function () {
    toast.classList.remove("show");
    toast.classList.add("hidden");
    toast.textContent = "";
  }, 2000);
}

  function toast2(frase) {
    let toast = document.getElementById("toast2");
    toast.textContent = frase.toString();
    toast.classList.remove("hidden");
    toast.classList.add("show");
  

  setTimeout(function () {
    toast.classList.remove("show");
    toast.classList.add("hidden");
    toast.textContent = "";
  }, 2000);

}


let emailLog = ""
let senhaLog = "";

function validaçãoTLOgin() {
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  });
    
  emailLog = document.getElementById("email-log").value;
  if (emailLog == "") {
    toast("Insira o seu E-mail");
    return;
  }
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;

  if (!emailRegex.test(emailLog)) {
    console.log(" email true");
   
  } else {
    alert("error");
    
  }

  senhaLog = document.getElementById("senha-log").value;
  if (senhaLog == "") {
   toast("Insira o sua Senha");
   return;
  }




  else {
    setTimeout(function() {
      window.location.href = 'index.html';
    }, 100); // Redirecionar após 2.5 segundos
  };


}

let nome = "nome";
let cep = "";
let email = "";
let senha = "";
let confSenha = "";
let telefone = "";
let Mnome = "";
let login = "";
let telefoneFixo = "";
let data ="";


function validaçãoCAD() {

  form.addEventListener('submit', (event) => {
    event.preventDefault();
  });

  nome = document.getElementById("nome").value;
  if (nome == "") {
    toast("prencha o campo nome ");
    return;
  }

  data = document.getElementById("data").value;
  if (data == "") {
    toast("prencha o campo data");
    return;
  }

  sexo = document.getElementById("sexo").value;
  defalt = document.getElementById("defalt").value;
  if (sexo == defalt) {
    toast("prencha o campo sexo");
    return;
  }
 
  Mnome = document.getElementById("nomemae").value;
  if (Mnome == "") {
    toast("prencha o campo nome materno");
    return;
  }

  CPF = document.getElementById("cpf").value;
  if (CPF == "") {
    toast("prencha o campo CPF");
    return;
  }

  telefone = document.getElementById("telefonecelular").value;
  if (telefone == "") {
    toast("prencha o campo telefone celular");
    return;
  }

  else {
    
   
    setTimeout(function() {
      window.location.href = 'cadastre-sesegundaetapa.html';
    }, 500); // Redirecionar após 1.5 segundos
  };
}
  
 


  



function validaçãoCAD2()
{
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  });
 
  email = document.getElementById("E-mail").value;
  if (email == "") {
    toast("prencha o campo email ");
    return;
  }

  login = document.getElementById("Login").value;
  if (login == "") {
    toast("prencha o campo login");
    return;
  }

  senha = document.getElementById("Senha").value;
  if (senha == "") {
    toast("prencha o campo senha");
    return;
  }

  confSenha = document.getElementById("ConfirmSenha").value;
  if (confSenha == "") {
    toast("prencha o campo confirmar senha");
    return;
  }

  cep = document.getElementById("CEP").value;
  if (cep == "") {
    toast("prencha o campo cep");
  return;
}



  
  telefoneFixo = document.getElementById("Fixo").value;
  if (telefoneFixo == "") {
    toast("prencha o campo telefonefixo");
    
  }

  else {
    toast2("Autenticando Usuario...");
   
    setTimeout(function() {
      window.location.href = 'login.html';
    }, 1500); // Redirecionar após 1.5 segundos
  };

  
  
}
  
 