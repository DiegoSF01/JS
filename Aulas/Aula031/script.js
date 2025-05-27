const defaultUser = {
    name: '',
    email: '',
    level: 1
}

let user1 = {
    ...defaultUser,
    name: 'Diego',
    email: 'diego@gmail.com'
}

let adm1 = {
    ...defaultUser,
    name: 'Josie',
    email: 'josie@gmail.com',
    level: 2
}

console.log(user1);
console.log(adm1);