class Pelanggan {
    constructor(nama, nomorTelepon, kendaraanDisewa) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = kendaraanDisewa;
    }
}

class SistemPenyewaan {
    constructor() {
        this.daftarPelanggan = [];
    }

    sewaKendaraan(nama, nomorTelepon, kendaraan) {
        const pelangganBaru = new Pelanggan(nama, nomorTelepon, kendaraan);
        this.daftarPelanggan.push(pelangganBaru);
        console.log(`Pelanggan ${nama} telah menyewa kendaraan ${kendaraan}.`);
    }

    tampilkanPelanggan() {
        console.log("Daftar Pelanggan yang Sedang Menyewa Kendaraan:");
        if (this.daftarPelanggan.length === 0) {
            console.log("Belum ada pelanggan yang menyewa kendaraan.");
        } else {
            this.daftarPelanggan.forEach((pelanggan, index) => {
                console.log(`${index + 1}. Nama: ${pelanggan.nama}, Nomor Telepon: ${pelanggan.nomorTelepon}, Kendaraan: ${pelanggan.kendaraanDisewa}`);
            });
        }
    }
}

const sistem = new SistemPenyewaan();

// Contoh Penggunaan
// sistem.sewaKendaraan("Budi Santoso", "08123456789", "Mobil Toyota Avanza");
// sistem.sewaKendaraan("Siti Aminah", "08234567890", "Motor Honda Vario");
// sistem.tampilkanPelanggan();
