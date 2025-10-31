// angka
var angka = 80;
// string
var kalimat = "Belajar javascript dasar di malasngoding.com";
// array
var hewan = ['Kambing', 'bebek', 'ayam'];
var hewan2 = hewan[0];
// object
var manusia = {
    nama : 'Randi',
    hobi : 'Komputer',
    angka : 7,
    makanan : ['Nasi Goreng', 'Ayam Bakar', 'Ayam Goreng']
};

document.getElementById('hasilAngka').innerHTML=angka;
document.getElementById('hasilKalimat').innerHTML=kalimat;
document.getElementById('hasilArray').innerHTML=hewan;
document.getElementById('hasilArray2').innerHTML=hewan2;
document.getElementById('hasilObject').innerHTML=manusia.nama + " hobi "+ manusia.hobi + " suka angka " + manusia.angka + " dan suka makanan " + manusia.makanan + " khususnya " + manusia.makanan[0];