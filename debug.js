// function addNum(x,y){
//     if(y== undefined){
//         y=0;
//     }
// let total = x+y;
// return total;


// }

// const givenNumber = addNum(12)
// console.log(givenNumber)
function addNum(x,y =2){
let total = x+y;
return total;


}

const givenNumber = addNum(12)
console.log(givenNumber)

function name(name1, name2='Roy'){
const fullName = name1 + ' ' +name2
return fullName;
}
const provideName = name('Progga')
console.log(provideName)