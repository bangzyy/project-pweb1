// Validasi form tambah data kamar
function validateDataKamar() {
    const idKamar = document.getElementById("ik").value;
    const gambar = document.getElementById("img").value;
    const jenisKamar = document.getElementById("jenis_kamar").value;
    const hargaKamar = document.getElementById("price_kamar").value;
    const fasilitasKamar = document.getElementById("fasilitas_kamar").value;
    if (!idKamar || idKamar <= 0) {
      alert("Id Kamar harus diisi dengan angka positif.");
      return false;
    }if (!gambar) {
      alert("Gambar ruangan harus diupload.");
      return false;
    }if (!jenisKamar) {
      alert("Jenis kamar harus dipilih.");
      return false;
    }if (!hargaKamar || hargaKamar < 100000) {
      alert("Harga kamar minimal 100.000.");
      return false;
    }if (!fasilitasKamar) {
      alert("Fasilitas kamar harus dipilih.");
      return false;
    }
    return true;
  }
  // Validasi form tambah data fasilitas
  function validateDataFasilitas() {
    const idFasilitas = document.getElementById("id_fasilitas").value;
    const namaFasilitas = document.getElementById("nama_fasilitas").value;
    const fasilitas = document.getElementById("fasilitas").value;
    const hargaWeekend = document.getElementById("harga_weekend").value;
    const hargaWeekday = document.getElementById("harga_weekday").value;
    const kuota = document.getElementById("kuota").value;
    const jamBuka = document.getElementById("jambuka").value;
    const jamTutup = document.getElementById("jamtutup").value;
if (!idFasilitas || idFasilitas <= 0) {
      alert("Id Fasilitas harus diisi dengan angka positif.");
      return false;
    } if (!namaFasilitas) {
      alert("Nama fasilitas harus diisi.");
      return false;
    }if (!fasilitas) {
      alert("Fasilitas harus dipilih.");
      return false;
    }if (!hargaWeekend || hargaWeekend < 120000) {
      alert("Harga weekend minimal 120.000.");
      return false;
    }if (!hargaWeekday || hargaWeekday < 100000) {
      alert("Harga weekday minimal 100.000.");
      return false;
    }if (!kuota || kuota <= 0) {
      alert("Kuota harus diisi dengan angka positif.");
      return false;
    }if (!jamBuka || !jamTutup) {
      alert("Jam buka dan jam tutup harus diisi.");
      return false;
    }if (jamTutup <= jamBuka) {
      alert("Jam tutup harus lebih besar dari jam buka.");
      return false;
    }
    return true;
  }