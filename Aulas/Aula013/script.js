let ingredientes = ['agua', 'farinha', 'ovo', 'corante', 'sal'];

//  ingredientes[6] = 'cebola';

// adiciona um item na array
ingredientes.push('cebola');
console.log(ingredientes);

// remove o último item da array
ingredientes.pop();
console.log(ingredientes);

// remove o primeiro item da array
ingredientes.shift();
console.log(ingredientes);

console.log(`Total de ingredientes: ${ingredientes.length}`);
