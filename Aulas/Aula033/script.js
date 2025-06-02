function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json[2]);
        })
        .catch((error) => {
            console.log('Deu Problema!');
            console.log(error)
        })
        .finally(() => {
            console.log('Acabou tudo!');
        })

}

document.querySelector('#botao').addEventListener('click', () => {
    clicou();
})