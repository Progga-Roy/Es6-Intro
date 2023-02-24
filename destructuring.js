const fish = {
name : 'Hilsha Fish',
address : 'Chadpur',
color: 'silver',
phone : '090944123',
price : 4000


}



const {phone} = fish;
// console.log(phone);
// Array destructuring
const nayoks = ['Sha Rukh Khan','Alomgir','Jeet','Hrittik'] ;
 const  [a,b,c,d]= nayoks;
//  console.log(d);

//  function destructuring
 function getNames(){
    return [] = ['Uttam','Gautam'];

 }
 const [baba,kaku] = getNames();
//  console.log(kaku,baba);

//  spread operator
const ages = [22,34,56,12,7,24,90]
const newAges = [...ages,101,105];
console.log(newAges);
