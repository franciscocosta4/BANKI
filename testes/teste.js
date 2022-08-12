let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        
listaUser.push(
{
  gmailCad: gmail.value,
  senhaCad: senha.value
}
)

localStorage.setItem('listaUser', JSON.stringify(listaUser))
