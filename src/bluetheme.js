
var a = window.document.getElementById('botaobluetheme' )
var corpo =window.document.getElementById( 'corpo')

 bluetheme = "ligado"
a.addEventListener("click", clicar)

function clicar(){
   
    if (bluetheme == "desligado"){ 
        localStorage.setItem( "bluetheme", "ligado" );
        corpo.style.backgroundImage = 'linear-gradient(rgb(2, 77, 90), rgb(82, 206, 255))'
        bluetheme ="ligado"
       console.log(bluetheme)
    }
    else if (bluetheme == "ligado") {
        localStorage.setItem("bluetheme", "desligado");
       corpo.style.backgroundImage= 'url(https://cdn.wallpapersafari.com/92/76/PbD56R.jpg)'
       bluetheme = 'desligado'
       console.log(bluetheme) 
    }

}


if (localStorage.getItem("bluetheme") == "ligado") {
    corpo.style.backgroundImage = 'linear-gradient(rgb(2, 77, 90), rgb(82, 206, 255))'
    console.log(bluetheme)
}
else if (localStorage.getItem("bluetheme") == "desligado") {
    corpo.style.backgroundImage = 'url(https://cdn.wallpapersafari.com/92/76/PbD56R.jpg)'
    console.log(bluetheme)
    }
