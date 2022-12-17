
var x= window.document.getElementById('botaobluetheme' )
var corpo =window.document.getElementById( 'corpo')
var a =window.document.getElementById('a')
var botaobluetheme =window.document.getElementById('botaobluetheme')
 bluetheme = "desligado"
 console.log('bluetheme:',bluetheme)

x.addEventListener("click", clicar)

//* MUDA APENAS NO SETTINGS.HTML
function clicar(){
   //* MUDA APENAS O BLUETHEME LIGADO
    if (bluetheme == "desligado"){ 
        localStorage.setItem( "bluetheme", "ligado" );
        corpo.style.backgroundImage = 'linear-gradient(rgb(2, 77, 90), rgb(82, 206, 255))'
        a.style.backgroundImage = 'linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255))'
        a.style.color='black'
        botaobluetheme.style.backgroundImage = 'none'
        bluetheme ="ligado"
        console.log('bluetheme:',bluetheme)
    } //* MUDA APENAS O BLUETHEME DESLIGADO  
    else if (bluetheme == "ligado") {
        localStorage.setItem("bluetheme", "desligado");
       corpo.style.backgroundImage= 'linear-gradient(135deg, rgb(74, 7, 138), rgba(0, 0, 0, 0.65))'
       a.style.backgroundImage = 'linear-gradient(180deg, rgb(36, 16, 58) 00%, rgb(47, 11, 75) 100%)'
       a.style.color='white' 
       botaobluetheme.style.backgroundImage = 'linear-gradient(180deg, rgb(36, 16, 58) 00%, rgb(47, 11, 75) 100%)'
       bluetheme = 'desligado'
       console.log('bluetheme:',bluetheme)
    }

}


//* MUDA APENAS QUANDO VOLTAMOS AO SETTINGS COM O BLUETHEME LIGADO


 if (localStorage.getItem("bluetheme") == "ligado") {
    console.log('bluetheme:',bluetheme)
    a.style.backgroundImage = 'linear-gradient(180deg, rgb(255, 255, 255) 00%, rgb(255, 255, 255) 100%)'
    a.style.color='black'
    botaobluetheme.style.backgroundImage = 'none' 
    
 } //* MUDA APENAS QUANDO VOLTAMOS AO SETTINGS COM O BLUETHEME DESLIGADO
 else if (localStorage.getItem("bluetheme") == "desligado") {
     corpo.style.backgroundImage = 'linear-gradient(135deg, rgb(74, 7, 138), rgba(0, 0, 0, 0.65))'
     a.style.color='linear-gradient(180deg, rgb(36, 16, 58) 00%, rgb(47, 11, 75) 100%)'
     }
