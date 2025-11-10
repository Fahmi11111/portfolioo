<?php
$server   = "sql303.infinityfree.com"; // contoh: sql303.byetcluster.com
$user     = "if0_40337471";           // username MySQL kamu di hosting
$password = "Visitorrrr"; // isi dengan password MySQL hosting
$database = "if0_40337471_db_visitorhub"; // nama database di hosting

$koneksi = mysqli_connect($server, $user, $password, $database);

if (!$koneksi) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>
