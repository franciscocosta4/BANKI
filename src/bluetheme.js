
var a = window.document.getElementById('botaobluetheme' )
var corpo =window.document.getElementById( 'corpo')

 bluetheme = "ligado"




a.addEventListener("click", clicar)



function clicar(){
   
    if (bluetheme == "desligado"){ 
        localStorage.setItem( "bluetheme", "ligado" );
        corpo.style.backgroundImage = 'linear-gradient(rgb(2, 77, 90), rgb(82, 206, 255))'
        bluetheme ="ligado"
       
    }
    else if (bluetheme == "ligado") {
        localStorage.setItem("bluetheme", "desligado");
       corpo.style.backgroundImage= 'url(https://cdn.wallpapersafari.com/92/76/PbD56R.jpg)'
       bluetheme = 'desligado'
        
    }

}


if (localStorage.getItem("bluetheme") == "ligado") {
    corpo.style.backgroundImage = 'linear-gradient(rgb(2, 77, 90), rgb(82, 206, 255))'
}
else if (localStorage.getItem("bluetheme") == "desligado") {
    corpo.style.backgroundImage = 'url(https://cdn.wallpapersafari.com/92/76/PbD56R.jpg)'
    }
