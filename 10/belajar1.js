var warna = "merah";

switch(warna){
    case "hitam":
        teks = "Warnah Hitam";
        break;
    case "merah":
        teks = "Warnah merah";
        break;
    case "hijau":
        teks = "Warnah hijau";
        break;
    default:
        teks = "Warna tidak terdeteksi";
}

function kelulusan(nilai){
    switch (true) {
        case nilai > 70:
            hasilLulus = "Selamat, Anda lulus";
            break;
        case nilai < 70:
            hasilLulus = "Selamat, Anda tidak lulus";
            break;
        default:
            hasilLulus = "Selamat, Anda pas nilainya";
            break;
    }

    return hasilLulus;
}
document.getElementById('hasil').innerHTML=teks;
document.getElementById('hasilKelulusan').innerHTML=kelulusan(23);