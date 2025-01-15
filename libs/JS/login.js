$(document).ready(function() {
    // Handle form submission
    $('#loginForm').submit(function(event) {
      event.preventDefault(); // Prevent the form from submitting normally
  
      var username = $('#username').val();
      var password = $('#password').val();
  
      // Validate inputs (simple check for empty values)
      if (username && password) {
        // Show success notification
        $('#notification').text('Anda berhasil login').fadeIn();
  
        // After 2 seconds, redirect to dashboard
        setTimeout(function() {
          window.location.href = 'Dashboard.html'; // Ganti dengan halaman dashboard Anda
        }, 2000);
      } else {
        // Show error notification if credentials are invalid
        $('#notification').text('Mohon isi semua field').css('background-color', '#e74c3c').fadeIn();
      }
    });
  });
  