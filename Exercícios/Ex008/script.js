let h1 = document.querySelector('h1');

for(i = 1; i <= 10; i++){
    let newtext = document.createElement('h3');
    newtext = `Tabuada do ${i}`;

    let newul = document.createElement('ul');

    for(j = 0; j <= 10; j++){
        let newli = document.createElement('li');
        newli.innerText = i + ' * ' + j + ' = ' +  i*j;

        newul.append(newli);
    }

    h1.after(newul);

    newul.before(newtext);
}