// Manipulasi array

// 1. Menambah isi array
var Nama = [];
Nama[0] = 'Kemas';
Nama[1] = 'Alfin';
Nama[2] = 'Yazi';
Nama[3] = 'Bara';
Nama[4] = 'Mentari';

console.log(Nama);

// 2. Menghapus isi array
var Hari = ['Senin', 'Selasa', 'Rabu'];
Hari[1] = undefined;

console.log(Hari);

// 3. Menampilkan isi array
var dive = ['ELEVEN', 'Love Dive', 'After LIKE', "i've IVE", "i've Mine"];

for(var i = 0; i < dive.length; i++){
    console.log('Album ke-' + (i+1) + ' = ' + dive[i]);
}

// Method pada array
// 1. Join
console.log(Nama.join(' ')); //Menggabungkan hasilnya

// 2. Push & Pop
var Angka = [1,2,3,4,5,6,7,8,9];

// Angka.push(10,11,12,13,14); // push: menambahkan di belakang
Angka.pop(); // pop: menghapus dari belakang
Angka.pop();
Angka.pop();
console.log(Angka.join(', '));

// 3. Unshift dan Shift
var Huruf = ['A','B','C','D','E','F'];

// Huruf.unshift('Y','Z'); // unshift: menambahkan dari depan
Huruf.shift(); // shift: menghapus dari depan
console.log(Huruf.join(', '));

// 4. Splice
// splice(indexAwal, mauDihapusBerapa(opsional), elemenBaru1, ...)
var Buku = ['Matematika', 'Bahasa Indonesia', 'Bahasa Inggris', 'Sejarah'];

Buku.splice(2, 0, 'Sosiologi', 'Kimia', 'Biologi'); // splice: bisa menambahkan dari tengah-tengah
console.log(Buku.join(', '));

// 5. Slice
// slice(indexAwal, indexAkhir(opsional))
var Bunga = ['Mawar', 'Melati', 'Kamboja', 'Raflesia', 'Sedap Malam', 'Anggrek', 'Matahari', 'Tulip'];

var Bunga2 = Bunga.slice(2,5); // slice: membuat array baru dari potongan array yang kita pilih
console.log(Bunga2.join(', '));

// 6. ForEach
Angka.forEach(function(e){
    console.log(e);
});

Bunga.forEach(function(e, i){
    console.log('Nama Bunga di indeks ke ' + i + ' adalah ' + e);
})

// 7. Map
var AngkaLagi = [1,2,4,6,8,10];
var AngkaLagi2 = AngkaLagi.map(function(e){
    return e * 2;
})

console.log(AngkaLagi2);

// 8. Sort
var AngkaLagi3 = [3,2,9,7,6,1,8,10,30,22];
console.log(AngkaLagi3.join(' - '));
// AngkaLagi3.sort()
AngkaLagi3.sort(function(a,b){ //agar terurut 10, 22, dan 30
    return a-b;
})
console.log(AngkaLagi3.join(' - '));

// 9. Filter
var an9ka = [1,3,5,7,2,4,6]; // Nilai yang dihasilkan banyak
var an9ka2 = an9ka.filter(function(x){
    return x > 2
});
console.log(an9ka2.join(' - '));

// 10. Find
var an9ka = [1,3,5,7,2,4,6]; // Hanya 1 nilai, dan nilai yang pertama ditemukan
var an9ka2 = an9ka.find(function(x){
    return x > 2
});
console.log(an9ka2);