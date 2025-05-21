function apertou(){
    console.log('apertou')
}

function segurou(){
    console.log('segurou');
}

function soltou1(){
    console.log('soltou');
}

function soltou2(event){
    console.log(event.code);
    console.log(event.key);
    console.log(event.shiftKey);
    console.log(event.ctrlKey);
    console.log(event.altKey);
}

const input = document.querySelector('.input2');
document.addEventListener('keyup', soltou2);