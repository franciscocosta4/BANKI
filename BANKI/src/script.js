let gmail = document.querySelector("#gmail")
let validgmail = false
let senha = document.querySelector("#senha")
let validsenha = false






function logar(){
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
}


function registrar(){
    alert("cona")
}

gmail.addEventListener("keyup", ()=>{
    if(gmail.value.lenght<=5){
      labelgmail.setAttribute("style",'color: red')

    }
})