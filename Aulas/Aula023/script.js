function clicou(){
    const button = document.querySelector('button');

    console.log(button.classList);

    button.classList.add('verde');
    console.log(button.classList);

    button.classList.remove('azul');
    console.log(button.classList);

    console.log(button.classList.contains('button'));

    button.classList.replace('verde', 'azul');
    console.log(button.classList);
}

function clicou2(){
    const button = document.querySelector('button');

    button.classList.toggle('verde');
    console.log(button.classList);
}