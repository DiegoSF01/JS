let select = document.querySelector('select');
let h1 = document.createElement('h1');

function clicou(){
    if(select.value != ''){
        h1.innerText = 'Esse usuário já existe';
        document.querySelector('button').after(h1);
    }else{
        h1.innerHTML = '';
    }
}