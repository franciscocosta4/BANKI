let gmail = document.querySelector("#gmail")
let validgmail = false
let senha = document.querySelector("#senha")
let validsenha = false
let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')
let botao = document.querySelector('#botao')






gmail.addEventListener('keyup', () => {
    if(gmail.value.length <= 3){
      gmail.setAttribute('style', 'color: red')
      gmail.setAttribute('style', 'border-color: red')
      validgmail = false
    } else {
      gmail.setAttribute('style', 'color: green')
      gmail.innerHTML = 'gmail'
      gmail.setAttribute('style', 'border-color:  #1aff00')
      validgmail = true
    }
  })




senha.addEventListener('keyup', () => {
    if(senha.value.length <= 3){
      senha.setAttribute('style', 'color: red')
      senha.setAttribute('style', 'border-color: red')
      validsenha = false
    }
    else{
        senha.setAttribute('style', 'color: green')
        senha.innerHTML = 'senha'
        senha.setAttribute('style', 'border-color: #1aff00')
        validsenha = true  
    }
}) 
           

function registrar(){
    if(validgmail && validsenha ){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        
        listaUser.push(
        {
          gmailCad: gmail.value,
          senhaCad: senha.value
        }
        )
        
        localStorage.setItem('listaUser', JSON.stringify(listaUser))


        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

       

       setTimeout(()=>{
        botao.setAttribute('style', 'display: block')
        msgSuccess.setAttribute('style', 'display: none')
    }, 3000)
      

}    else{
      msgError.setAttribute('style', 'display: block')
      msgError.innerHTML = '<strong>ERRO...</strong>'
      msgSuccess.setAttribute('style', 'display: none')
      msgSuccess.innerHTML = ''
}
}
  