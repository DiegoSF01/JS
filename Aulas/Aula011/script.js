let count = 0;

function add() {
    count++;
}

add();
add();

console.log(count);



function addsquares(a, b) {
    const square = x => x * x;

    return square(a) + square(b); // x = a // x = b

    /*
    function square(x) {
    return x * x;
    }

    
    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
    */
}

console.log(addsquares(2, 3));