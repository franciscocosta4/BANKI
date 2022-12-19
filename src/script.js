

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
    console.log('amigos:',snapshot.val());
  }
  else{
    console.log("an error was detected:" )
  }

  

 });

 // *MOSTRAR NOME DO USUARIO NA TELA 
 firebase.database().ref("nomeconta").on("child_added",function(snapshot)  {
       // *mostrar o snapshot val()
       var content = 'Hi '
           content +=   snapshot.val();
       
    document.getElementById("conta").innerHTML += content;
    if (snapshot.exists()) {
        console.log('teu nome:',snapshot.val());
     }
     else{
       console.log("an error was detected:" )
    }
   
    });


//* funcao logout

    function logout() {
      firebase.auth().signOut().then(() => {
          window.location.href = "login.html";
      }).catch(() => {
          alert('Erro ao fazer logout');
      })
  }