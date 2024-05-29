document.addEventListener("DOMContentLoaded", function() {
    let nomorAcak = Math.floor(Math.random() * 100) + 1;
    let percobaan = 0;

    const inputTebakan = document.getElementById("guess-input");
    const tombolCek = document.getElementById("check-btn");
    const pesan = document.getElementById("message");
    const skor = document.getElementById("score");
    const greeting = document.getElementById("greeting");
    const winSound = document.getElementById("win-sound");

    greeting.textContent = "Selamat datang! Mari kita mulai tebak angka.";

    tombolCek.addEventListener("click", function() {
        const tebakan = parseInt(inputTebakan.value);
        if (isNaN(tebakan) || tebakan < 1 || tebakan > 100) {
            pesan.textContent = "Masukkan nomor yang valid antara 1 dan 100.";
            return;
        }

        percobaan++;
        if (tebakan === nomorAcak) {
            pesan.textContent = `Selamat! Anda menebak angka ${nomorAcak} dengan benar dalam ${percobaan} percobaan.`;
            tombolCek.disabled = true;
            winSound.play();
        } else if (tebakan < nomorAcak) {
            pesan.textContent = "Terlalu rendah, coba lagi.";
        } else {
            pesan.textContent = "Terlalu tinggi, coba lagi.";
        }
        skor.textContent = `Skor: ${percobaan}`;
    });
});
