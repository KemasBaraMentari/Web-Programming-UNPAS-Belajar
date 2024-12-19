var tanya = true;
while(tanya){

    // menangkap pilihan player
    var p = prompt('Pilih : Gajah, Semut, atau Orang')

    // menangkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();
    if (comp < 0.34) { 
        comp = 'Gajah'; 
    } else if (comp >=0.34 && comp < 0.67){
        comp = 'Semut';
    } else {
        comp = 'Orang';
    }

    var hasil = '';
    // menentukan rules
    if(p == comp){
        hasil = 'Seri';
    } else if(p == 'Gajah'){
        // if(comp == 'Semut'){
        //     hasil = 'Menang';
        // }else{
        //     hasil = 'Kalah';
        // }
        hasil = (comp == 'Semut') ? 'KALAH' :'MENANG';
    } else if(p == 'Orang'){
        hasil = (comp == 'Gajah') ? 'KALAH' :'MENANG';
    } else if(p == 'Semut'){
        hasil = (comp == 'Orang') ? 'KALAH' :'MENANG';
    } else{
        hasil = 'Pilihan tidak valid';
    }


    //tampilkan hasil
    alert('Kamu memilih : ' + p + '\nKomputer memilih : ' + comp + '\nMaka Hasilnya Kamu ' + hasil);

    tanya = confirm('Mau main lagi?');
}

alert('Terimakasih sudah bermain:)')