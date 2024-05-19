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
let user1 = "user1";
let funcionario = "funcionario";
let admin = "admin";
let senhalogin = "1234"


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

    if (emailLog == user1 && senhaLog == senhalogin)
    
   

    setTimeout(function() {
      window.location.href = 'areacliente/areaClient-meusPedidos.html';
      let token = 1
      localStorage.setItem('token', token)}); // Redirecionar após 2.5 segundos
            

    if (emailLog == funcionario && senhaLog == senhalogin)
    
      setTimeout(function() {
        window.location.href = 'areafuncionario/areafuncionario-meusPedidos.html';
        let token = 2
        localStorage.setItem('token', token)},); // Redirecionar após 2.5 segundos
        

    if (emailLog == admin && senhaLog == senhalogin)
        
        setTimeout(function() {
          window.location.href = 'areaadmin/areaadmin-meusPedidos.html';
          let token = 3
          localStorage.setItem('token', token)},); // Redirecionar após 2.5 segundos

    else {
      toast("E-mail ou senha incorretos");
      
    }
  

  }



}

function searchproducts(){


  let input = document.getElementById('inputsearch')
  if (input.value == "")
    alert('Estamos em Manutenção. Unipet em Desenvolvimento')
  else { alert('Estamos em Manutenção. Unipet em Desenvolvimento')}
}

function verificacesso(){
 
  let token = localStorage.getItem('token');
  if (token == 1) {
    window.location.href = 'areacliente/areaClient-meusPedidos.html';
    return;
  }
  if (token == 2) {
    window.location.href = 'areafuncionario/areafuncionario-meusPedidos.html';
    return;
  }
  if (token == 3) {
    window.location.href = 'areaadmin/areaadmin-meusPedidos.html';
    return;
  }

  else {
    alert('Por favor realize um login')
    window.location.href = 'login.html';
    }
  
}

function sair(){
  let token = localStorage.removeItem('token')
  window.location.href = 'login.html'
  }

  function sair2(){
    let token = localStorage.removeItem('token')
    window.location.href = '../login.html'
    }

  function sair3(){
    let token = localStorage.removeItem('token')
    window.location.href = '../areaadmin/areaadmin-meusPedidos.html'
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
  
 