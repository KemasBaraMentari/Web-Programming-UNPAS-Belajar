function jumlahVolumeDuaKubus(a, b){
    var total, volumeA, volumeB;

    volumeA = a*a*a;
    volumeB = b*b*b;
    total = volumeA + volumeB;

    return total;
}

alert(jumlahVolumeDuaKubus(8, 3));
alert(jumlahVolumeDuaKubus(10, 17));
alert(jumlahVolumeDuaKubus(2, 5));