class batuGuntingKertas {
  constructor() {
    this.inputPemain = 0;
    this.inputKomputer = 0;
    this.nilaiPemain = 0;
    this.nilaiKomputer = 0;
  }

  setGame(player, komputer) {
    // Input value yang dipilih oleh pemain atau komputer
    this.inputPemain = player;
    this.inputKomputer = komputer;

    // Jika player menang tambahkan skor milik pemain, dan sebaliknya
    if ((player == 0 && komputer == 2) || (player == 2 && komputer == 1) || (player == 1 && komputer == 0)) {
        this.nilaiPemain++;
    } else if ((komputer == 0 && player == 2) || (komputer == 2 && player == 1) || (komputer == 1 && player == 0)) {
        this.nilaiKomputer++;
    }
  }

  result() {
    this.getResult = "";

    // Jika pemain menang, Cetak "Hasil: Menang"
    if ((this.inputPemain == 0 && this.inputKomputer == 2) || (this.inputPemain == 2 && this.inputKomputer == 1) || (this.inputPemain == 1 && this.inputKomputer == 0)) {
        getResult = "Menang";
    }
    // Jika komputer menang, Cetak "Hasil: Kalah"
    else if ((this.inputKomputer == 0 && this.inputPemain == 2) || (this.inputKomputer == 2 && this.inputPemain == 1) || (this.inputKomputer == 1 && this.inputPemain == 0)) {
        getResult = "Kalah";
    }
    // Jika skor sama, Cetak "Hasil: Seri"
    else {
        getResult = "Seri";
    }
    console.log("Hasil: " + getResult);    
  }

  pilihanTangan(tipe) {
    if (tipe == 0) return "Batu";
    else if (tipe == 1) return "Kertas";
    else return "Gunting";
  }
  
  hasilPermainan() {
    this.nilaiPermainan = "";

    if (this.nilaiPemain > this.nilaiKomputer) {
        hasilPemain = "Anda telah menjadi juara dan komputer kalah.";
    } else if (this.nilaiPemain < this.nilaiKomputer) {
        hasilPemain = "Komputer telah menjadi juara dan Anda kalah.";
    } else {
        hasilPemain = "Tidak ada yang juara, skor yang diperoleh sama.";
    }

    console.log("\nHasil Permainan: ");
    console.log("* Anda mendapatkan skor: " + this.nilaiPemain);
    console.log("* Komputer mendapatkan skor: " + this.nilaiKomputer);
    console.log(nilaiPermainan)

  }
}

class start {
  constructor() {
    const gameBGK = new batuGuntingKertas();
    
    console.log("============= Batu - Gunting - Kertas =============");
    console.log("Berapa kali ingin bermain? ");

    let berapaKali = 0;
    let count = 0;
    while (count < berapaKali) {
        console.log("Pilih tangan: (0: Batu, 1: Kertas, 2: Gunting)");

        console.log("Masukkan nomor (0-2): ");
        let pilihTangan = 0;

        if (pilihTangan < 0 || pilihTangan > 2) {
            pilihTangan = 0;
        }

        console.log("Anda memilih: " + gameBGK.pilihanTangan(pilihTangan));

        let randomKomputer = 1;
        console.log("Komputer memilih: " + gameBGK.pilihanTangan(randomKomputer));

        gameBGK.setGame(pilihTangan, randomKomputer);
        gameBGK.result();
        count++;
    }
    gameBGK.hasilPermainan();
    console.log("===================================================");
  }
}


