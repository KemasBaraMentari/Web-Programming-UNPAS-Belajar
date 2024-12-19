var i = 2;

if(i % 2 === 0){
    var genap = true;
}

if(genap){
    console.log('genap');
}

//JavaScript menganut function scope
// var a = 1;

// function tes(){
//     var b = 2;
// }

// console.log(b);

//global scope/window scope
var c = 3;

function tes(){
    //name conflict
    var c = 5;
}

//Jika c nya diluar function, maka bisa diakses dengan yang di dalam function. Jika c di dalam function, maka hanya bisa diakses function tersebut. 

var d = 10;
function tes(d){
    console.log(d);
}

tes(2);
console.log(d);