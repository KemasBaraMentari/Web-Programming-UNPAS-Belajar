var angkot = 1;
var angkotBeroperasi = 6;
var jmlAngkot = 10;

for(angkot = 1; angkot <= jmlAngkot; angkot++){
    if(angkot <= angkotBeroperasi){
        console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');
    }else{
        console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi');
    }
};