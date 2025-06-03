var penumpang = [];

var tambahPenumpang = function(namaPenumpang, penumpang){
    // Jika angkot kosong
    if(penumpang.length == 0){
        // Tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // Kembalikan isi array & keluar dari function
        return penumpang;
    }else{
        // Telusuri seluruh kursi dari awal
        for(var i = 0; i < penumpang.length ; i++){
            // Jika ada kursi kosong
            if(penumpang[i] == undefined){
                // Tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // Kembalikan isi array & keluar dari function
                return penumpang;
            }
            // Jika sudah ada nama yang sama
            else if(penumpang[i] == namaPenumpang){
                // Tampilkan pesan kesalahannya
                console.log(namaPenumpang + " sudah ada");
                // Kembalikan isi array & keluar dari function
                return penumpang;
            }
            // Jika seluruh kursi terisi
            else if(i == penumpang.length - 1){
                // Tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // Kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang){
    // Jika angkot kosong
    if (penumpang.length == 0){
        // Tampilkan pesan bahwa angkot kosong, dan tidak mungkin ada penumpang turun
        console.log("Angkot kosong, tidak ada penumpang turun");
        // Kembalikan isi array dan keluar dari function
        return penumpang;
    } else{
        // Telusuri seluruh kursi dari awal
        for(var i = 0; i < penumpang.length; i++){
            // Jika nama penumpang sesuai
            if(penumpang[i] == namaPenumpang){
                // hapus penumpang dengan mengubah namanya menjadi undefined
                penumpang[i] = undefined;
                // kembalikan isi array dan keluar dari function
                return penumpang;
                }
            // Jika tidak ada nama yang sesuai
            else if(i == penumpang.length - 1){
                // tampilkan pesan kesalahannya
                console.log("Penumpang tidak ditemukan");
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
        }
    }
}