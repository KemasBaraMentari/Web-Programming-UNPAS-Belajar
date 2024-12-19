//Contoh Built-in Function

var nama = 'Bara Mentari';
console.log(nama.charAt(6));

var bil = Math.random();
console.log(bil);

//Ada 2 tipe User-defined Function, yaitu Function Declaration dan Function Expression
//Contoh Function Declaration
function jumlahDuaBilangan(a, b){
    var total;
    total = a + b;

    return total;
}

//Contoh Function Expression
var jumlahDuaBilangan = function(a, b){
    var total;
    total = a + b;

    return total;
}

//Memanggil atau Menjalankan Function
alert(jumlahDuaBilangan(3, 5));
alert(jumlahDuaBilangan(14, 54));