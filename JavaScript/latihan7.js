var Penumpang = [];
var tambahPenumpang = function(namaPenumpang, Penumpang){
    // Jika angkot kosong
    if(Penumpang.length == 0){
        // Tambah penumpang di awal array
        Penumpang.push(namaPenumpang);
        // Kembalikan isi array & keluar dari function
        return Penumpang;
    }else{
        // Telusuri seluruh kursi dari awal
        for(var i = 0; i < Penumpang.length ; i++){
            // Jika ada kursi kosong
            if(Penumpang[i] == undefined){
                // Tambah penumpang di kursi tersebut
                Penumpang[i] = namaPenumpang;
                // Kembalikan isi array & keluar dari function
                return Penumpang;
            }
            // Jika sudah ada nama yang sama
            else if(Penumpang[i] == namaPenumpang){
                // Tampilkan pesan kesalahannya
                console.log(namaPenumpang + " sudah ada");
                // Kembalikan isi array & keluar dari function
                return Penumpang;
            }
            // Jika seluruh kursi terisi
            else if(i == Penumpang.length - 1){
                // Tambah penumpang di akhir array
                Penumpang.push(namaPenumpang);
                // Kembalikan isi array & keluar dari function
                return Penumpang;
            }
        }
    }
}