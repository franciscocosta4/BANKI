
var x= window.document.getElementById('botaobluetheme' )
var corpo =window.document.getElementById( 'corpo')
var a =window.document.getElementById('a')
var botaobluetheme =window.document.getElementById('botaobluetheme')
 bluetheme = "desligado"
 console.log('bluetheme:',bluetheme)

x.addEventListener("click", clicar)

//* MUDA APENAS NO SETTINGS.HTML
function clicar(){
   
    if (bluetheme == "desligado"){ 
        localStorage.setItem( "bluetheme", "ligado" );
        corpo.style.backgroundImage = 'linear-gradient(rgb(2, 77, 90), rgb(82, 206, 255))'
        a.style.backgroundImage = 'linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255))'
        a.style.color='black'
        botaobluetheme.style.backgroundImage = 'none'
        bluetheme ="ligado"
        console.log('bluetheme:',bluetheme)
    }
    else if (bluetheme == "ligado") {
        localStorage.setItem("bluetheme", "desligado");
       corpo.style.backgroundImage= 'url(https://cdn.wallpapersafari.com/92/76/PbD56R.jpg)'
       a.style.backgroundImage = 'linear-gradient(90deg, rgb(36, 16, 58) 0%, rgb(47, 11, 75) 100%)'
       a.style.color='white' 
       botaobluetheme.style.backgroundImage = 'linear-gradient(90deg, rgb(36, 16, 58) 0%, rgb(47, 11, 75) 100%)'
       bluetheme = 'desligado'
       console.log('bluetheme:',bluetheme)
    }

}


 if (localStorage.getItem("bluetheme") == "ligado") {
    console.log('bluetheme:',bluetheme)
    
 }
 else if (localStorage.getItem("bluetheme") == "desligado") {
     corpo.style.backgroundImage = 'url(https://cdn.wallpapersafari.com/92/76/PbD56R.jpg)'
    
     }
