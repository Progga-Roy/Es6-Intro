const name = (firstName, secondName) => firstName + ' ' + secondName;

const fullName =name('Chinmayi','Progga');
console.log(fullName);


// multiline arrow function

const summation=  (x,y,z)=>{
const firstAdd = x+y;
const secondAdd = z+x;
const addition = firstAdd+secondAdd;
return addition;
}

const result = summation( 45,12,33);
console.log(result);