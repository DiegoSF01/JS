const input = document.querySelector('input');

function enter(e){
    if(e.key === 'Enter'){
        let newli = document.createElement('li');
        newli.innerText = input.value;

        ul.append(newli);
        input.value = '';
        console.log(newli);
    }
}

input.addEventListener('keyup', enter);