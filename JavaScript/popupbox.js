alert('Hello World');
alert('Nama');
alert('Saya');
alert('Bara Mentari');

var nama = prompt('Masukkan nama: ');
alert(nama);

var tes = confirm('Kamu yakin?');
if(tes === true){
    alert('Yakin aja');
}else{
    alert('Gak yakin aja');
}

alert('Selamat Datang')
var lagi = true;

while(lagi === true){
    var nama = prompt('Nama: ');
    alert('halo' + ' ' + nama);

    lagi = confirm('Lagi?');
}