function validar(usuario, senha){
    if(usuario === "Diego" && senha === 123){
        return true;
    } else {
        return false;
    }
}

let usuario = "Diego";
let senha = 123;

let validacao = validar(usuario, senha);
if (validacao){
    console.log('Acesso concedido.');
} else {
    console.log('Acesso negado!');
}