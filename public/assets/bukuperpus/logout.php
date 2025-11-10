<?php
//session start
session_start();
session_unset();
session_destroy();

//hilangkan session yg udh di set
unset($_SESSION['id_user']);
unset($_SESSION['password']);
unset($_SESSION['nama_pengguna']);
unset($_SESSION['username']);

session_destroy();
echo "<script> 
alert('Anda telah keluar dari halaman');
document.location='register.php';
</script>";
