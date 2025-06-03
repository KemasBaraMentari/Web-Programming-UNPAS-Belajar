// Membuat Object
// 1. Object Literal
var mahasiswa = {
    nama : 'Azizi Shafa Asadel',
    umur : 21,
    npm : '20213574',
    jurusan : 'Akuntansi'
};

var mahasiswa2 = {
    nama : 'Shani Indira Natio',
    umur : 21,
    npm : '20213575',
    jurusan : 'Manajemen'
};

// 2. Function Declaration
function objectMahasiswa(nama, umur, npm, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.umur = umur;
    mhs.npm = npm;
    mhs.jurusan = jurusan;
    return mhs;
}

var mahasiswa3 = objectMahasiswa('Shania Gracia', 21, '20213576', 'Ekonomi Pembangunan');
var mahasiswa4 = objectMahasiswa('Indira Putri Seruni', 21, '20213577', 'DKV');

// 3. Constructor
function Mahasiswa(nama, umur, npm, jurusan){
    this.nama = nama;
    this.umur = umur;
    this.npm = npm;
    this.jurusan = jurusan;
}

var mahasiswa5 = new Mahasiswa('Melody Nurramdhani Laksani', 21, '20213578', 'Arsitektur')
var mahasiswa6 = new Mahasiswa('Frieska Anastasia Laksani', 21, '20213579', 'Desain Interior')