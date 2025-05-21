function mostrarsenha(){
    let senha = document.querySelector('.senha');

    if(senha.getAttribute('type') === 'password'){
        senha.setAttribute('type', 'text');
    } else{
        senha.setAttribute('type', 'password');
    }

}