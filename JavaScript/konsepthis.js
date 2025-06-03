// Konsep this
// console.log(this);
// console.log(window);
// console.log(window === this);

// var a = 10;
// console.log(this.a);



// Membuat object

// Cara 1 - Function Declaration
// function halo(){
//     console.log(this)
//     console.log('Halo!')
// }
// this.halo(); // this mengembalikan Object Global










// Cara 2 - Object Literal
// var obj = {a : 10, nama : 'Bara'};
// obj.halo = function(){
//     console.log(this);
//     console.log('Halo!')
// };  
// obj.halo(); // this mengembalikan Object yang bersangkutan










// Cara 3 - Constructor
// function Halo(){
//     console.log(this)
//     console.log('Halo!')
// };
// var obj1 = new Halo();
// var obj2 = new Halo(); // this mengembalikan Object yang baru dibuat