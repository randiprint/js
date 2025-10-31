var kata1 = "Hari ini adalah hari Jum'at";
var kata2 = "Nama saya 'Randi'";
var kata3 = 'Nama saya "Randi"';

function tanpaPetik(){
    document.getElementById('hasil').innerHTML= kata1;
}

function petikSatu(){
    document.getElementById('hasil').innerHTML= kata2;
}

function petikDua(){
    document.getElementById('hasil').innerHTML= kata3;
}