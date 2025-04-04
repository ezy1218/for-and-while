let array =  [2, 4, 9, 10, 45, 67, 8, 90];
console.log(array, 'boshlanishdagi array');

let chetniyson = [];

for ( let i = 0; i < array.length; i++ ) {
    if (array[i] %2 === 0){
        chetniyson.push(array[i])
    }
}
console.log( chetniyson, 'juft sonlarga ajratilgan array' )