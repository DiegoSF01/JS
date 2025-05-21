// selecionar um elemento pelo nome da tag
document.getElementsByTagName("h1");

// selecionar um elemento pelo nome do id
document.getElementById("titulo");

// selecionar um elemento pelo nome da classe
document.getElementsByClassName("teste");

// seleciona um elemento por tudo(tag, class e id)
document.querySelector("#titulo");


function clicou(){
    alert("Clicou no botão!");
    
    const teste = document.querySelector('.teste');
    console.log(teste.children[0].children);

    const ul = teste.querySelector('ul');
    console.log(ul.innerHTML);
    console.log(ul.innerText);
    console.log(ul.outerHTML);

    ul.innerHTML = '<li>d</li>';

    console.log(ul.innerHTML);
    console.log(ul.innerText);

    ul.innerHTML += '<li>e</li>';

    console.log(ul.innerHTML);
    console.log(ul.innerText);

    console.log(ul.children[0].innerText);

    ul.children[0].innerText == 'a';
    ul.children[0].innerText += 'a';



    ul.children[0].append('(alterado)');
    
    let newli = document.createElement('li');
    newli.innerText = 'novo li';

    // adiciona no final
    // ul.append(newli);

    // adiciona no inicio
    ul.prepend(newli);

    let newbotao = document.createElement('button');
    newbotao.innerText = 'Novo Botão';

    ul.after(newbotao);

    let newul = document.createElement('ul');

    for(i = 1; i <= 5; i++){
        let newli2 = document.createElement('li');
        newli2.innerText = "li " + i;
        newul.append(newli2);
    }

    ul.before(newul);

    let input = document.querySelector('input');

    console.log(input.getAttribute('type'));
    console.log(input.hasAttribute('placeholder'));
    input.setAttribute('placeholder', 'Alterado');
}

let botao = document.querySelector(".botao2");

botao.addEventListener("click", clicou);