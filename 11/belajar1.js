function tambah(){
    var teks = "";
    var x;
    for(x=0; x <=10; x++){
        teks += "<h1 style='margin-top:10px'>"+"Ini angka "+ x +"</h1><br>";
    }

    document.getElementById('hasil').innerHTML = teks;
}