

// *MOSTRAR OS NOMES DOS AMIGOS NA TELA 
firebase.database().ref("nomes").on("child_added",function(snapshot)  {
    var content = ''
 // *mostrar o snapshot val()
         content += "<li>";
            content +=  snapshot.val();
         content += "</li>";
 
         document.getElementById("gmails").innerHTML += content;
 if (snapshot.exists()) {
    console.log(" data available");
  }
  else{
    console.log("an error was detected:" )
  }

 });

//*  // *MOSTRAR NOME DO USUARIO NA TELA 
// */ firebase.database().ref("nomeconta").on("child_added",function(snapshot)  {
//*        console.log(snapshot.val());
// *       var content = ''
       
//*     // *mostrar o snapshot val()
// *            content +=  snapshot.val();
       
// *    document.getElementById("conta").innerHTML += content;
//*     if (snapshot.exists()) {
//*        console.log(" data available");
// *     }
// *     else{
//*        console.log("an error was detected:" )
// *     }
   
//*     });