function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json();
        }).then((json) => {
            console.log(json[2].title)
        })
}

document.querySelector('#botao').addEventListener('click', () => {
    clicou();
})