// function declaration

function add( first,second){
    const total = first+ second;
    return total;
}

const num = 56;
// function expression
const add1 = function add1( first,second){
    const total = first+ second;
    return total;
}
// function expression with anonymous function
const add2 = function add2( first,second){
    const total = first+ second;
    return total;
}

const add3 = (first ,second)=> first +second;

const result = add3(34,12);
console.log(result)