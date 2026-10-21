<?php
$server   = "sql209.infinityfree.com"; // contoh: sql303.byetcluster.com
$user     = "if0_43223009"; // username MySQL kamu di hosting
$password = "Visitorhub123"; // isi dengan password MySQL hosting
$database = "if0_43223009_bukupengunjung"; // nama database di hosting

$koneksi = mysqli_connect($server, $user, $password, $database);

if (!$koneksi) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>
