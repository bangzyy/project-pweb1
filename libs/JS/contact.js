$(document).ready(function() {
    $("#HubungiKami").submit(function(event) {
      event.preventDefault();
      var nama = $("#nama").val();
      var email = $("#email").val();
      var telepon = $("#telepon").val();
      if (!nama || !email || !telepon) {
        alert("Semua data harus diisi!");
        return;
      }
      alert("Pesan Anda Berhasil Dikirim Dengan Nama: " + nama + ", Email: " + email + ", No Handphone: " + telepon);
    });
  });