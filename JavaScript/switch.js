// switch(ekspresi){
//     case 'nilai 1':
//         aksi 1
//     [break;]
//     case 'nilai 2':
//         aksi 2
//     [break;]
//     case 'nilai n':
//         aksi n
//     [break;]
//     default:
//          aksi default
//     [break;]
// }

var angka = parseInt(prompt('Masukkan angka : '));

switch(angka){
    case 1:
        alert('Anda memasukkan angka 1');
        break;
    case 2:
        alert('Anda memasukkan angka 2');
        break;
    case 3:
        alert('Anda memasukkan angka 3');
        break;
    default:
        alert('Angka yg anda masukkan salah');
        break;
}

var item = prompt('Masukkan nama makanan : \n (Pilihan : Nasi goreng, Kebab, Tomat, Kentang)');
switch(item){
    case 'Nasi goreng':
        alert('Makanan sudah jadi');
        break;
    case 'Kebab':
        alert('Makanan sudah jadi');
        break;
    case 'Tomat':
        alert('Makanan belum jadi');
        break;
    case 'Kentang':
        alert('Makanan belum jadi');
        break;
    default:
        alert('Makanan tidak tersedia di pilihan');
        break;
}

