let gmail = document.querySelector("#gmail")
let senha = document.querySelector("#senha")
let botao = document.querySelector('#botao')
let msgError = document.querySelector('#msgError')
let msgSuccess= document.querySelector('#msgSuccess')



// MUDAR COR DA SENHA E  GMAIL SE FOR INVALIDO (KEYUP)

gmail.addEventListener('keyup', () => {
    if(gmail.value.length <= 7){
        gmail.setAttribute('style', 'color: red')
        gmail.setAttribute('style','border-color: red')  
        botao.setAttribute('style','display: none')
        msgError.setAttribute('style', 'display:block')
        msgError.innerHTML = '<strong>The gmail needs to have 8 caracters or more</strong>'
        msgSuccess.setAttribute('style','display:none')
        }
    else{  
        msgError.setAttribute('style', 'display:hidden')
        botao.setAttribute('style','display: inline')
        gmail.setAttribute('style', 'color: #73ff00 ')
        gmail.setAttribute('style','border-color: #73ff00')
    }

})


senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5){
        senha.setAttribute('style', 'color: red')
        senha.setAttribute('style','border-color: red')
        msgError.setAttribute('style', 'display:block')
        botao.setAttribute('style','display: none')
        msgError.innerHTML = '<strong>The password needs to have 8 caracters or more</strong>'
        msgSuccess.setAttribute('style','display:none')
          
        }
    else{
        botao.setAttribute('style','display: inline')
        msgError.setAttribute('style', 'display:none')
        senha.setAttribute('style', 'color: #73ff00 ')
        senha.setAttribute('style','border-color: #73ff00')
    }
})


// MUDAR COR DA SENHA E  GMAIL SE FOR INVALIDO (CLICK NO BOTAO)

botao.addEventListener('click', ()=>{
    if(senha.value.length <= 5){
        senha.setAttribute('style', 'color: red')
        senha.setAttribute('style','border-color: red') 
        }
    else{
        senha.setAttribute('style', 'color: #73ff00 ')
        senha.setAttribute('style','border-color: #73ff00')     
    }
    console.log('validsenha:', senha)

})

botao.addEventListener('click', ()=>{
    if(gmail.value.length <= 7){
        gmail.setAttribute('style', 'color: red')
        gmail.setAttribute('style','border-color: red')
        }
   else {
        gmail.setAttribute('style', 'color: #73ff00 ')
        gmail.setAttribute('style','border-color: #73ff00')
    }
    console.log( 'validgmail:', gmail)

})


 //funcao de login  

    function login() {  
        console.log('antes')
        firebase.auth().signInWithEmailAndPassword(gmail.value, senha.value).then(response => {
            console.log('success', response)
            alert("seria redirecionado agr")
        }).catch(error => {
            alert(error)
            console.log('error', error)
            console.log('erro na firebase  ')


        });
        console.log('depois')
    } 
    
    
      
   