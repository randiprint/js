function tampilkan_nama(){
    return 'Randi';
}

function tampilkan_nomor(){
    var x = 5;
    var y = 5;
    var penjumlahan = x + y;
    return penjumlahan;
}

document.getElementById('hasil').innerHTML='Halo, nama saya '+tampilkan_nama();
document.getElementById('hasilAngka').innerHTML='Halo, ini angka '+tampilkan_nomor();