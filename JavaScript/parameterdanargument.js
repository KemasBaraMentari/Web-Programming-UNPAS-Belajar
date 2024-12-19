// function tambah(a, b){

//     return a + b;
// }

// var a = parseInt(prompt('Masukkan nilai a: '));
// var b = parseInt(prompt('Masukkan nilai b: '));
// var hasil = tambah(a*4, b*3);
// console.log(hasil);

// function tambah(a, b){

//     return a + b;
// }

// function kali(a, b){
    
//     return a * b;
// }

// var hasil = kali(tambah(1,4), tambah(3,2));
// console.log(hasil);

function tambah(){
    var hasil = 0;
    for(var i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(1,2,3,4,5,6);
console.log(coba);