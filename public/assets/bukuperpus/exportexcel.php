<?php
include "koneksi.php";

// Header untuk download file Excel
header("Content-Type: application/vnd.ms-excel");
header("Content-Disposition: attachment; filename=Data Pengunjung " . date('Y-m-d') . ".xls");
header("Pragma: no-cache");
header("Expires: 0");

// Ambil filter tanggal jika ada
if (isset($_POST['tanggal1']) && isset($_POST['tanggal2'])) {
    $tgl1 = $_POST['tanggal1'];
    $tgl2 = $_POST['tanggal2'];
    $tampil = mysqli_query($koneksi, "SELECT * FROM ttamu WHERE tanggal BETWEEN '$tgl1' AND '$tgl2' ORDER BY tanggal DESC");
    $judul = "Rekap Data Pengunjung ($tgl1 s/d $tgl2)";
} else {
    $tampil = mysqli_query($koneksi, "SELECT * FROM ttamu ORDER BY tanggal DESC");
    $judul = "Rekap Data Pengunjung Keseluruhan";
}
?>

<link rel="icon" href="assets/img/universitas-indraprasta-pgri-logo.png" type="image/x-icon">


<html>

<head>
    <meta charset="UTF-8">
</head>

<body>
    <table border="1" cellspacing="0" cellpadding="5" style="border-collapse:collapse; width:100%; font-family:'Times New Roman', Times, serif; font-size:12pt;">
        <thead>
            <tr>
                <th colspan="6" style="background-color:#cfe2ff; font-size:16pt; font-weight:bold; text-align:center;">
                    <?= $judul; ?>
                </th>
            </tr>
            <tr style="background-color:#f8f9fa; text-align:center; font-weight:bold;">
                <th style="font-family:'Times New Roman', Times, serif; font-size:12pt;">No</th>
                <th style="font-family:'Times New Roman', Times, serif; font-size:12pt;">Nama</th>
                <th style="font-family:'Times New Roman', Times, serif; font-size:12pt;">NPM</th>
                <th style="font-family:'Times New Roman', Times, serif; font-size:12pt;">Kelas</th>
                <th style="font-family:'Times New Roman', Times, serif; font-size:12pt;">Tujuan Kunjungan</th>
                <th style="font-family:'Times New Roman', Times, serif; font-size:12pt;">Tanggal</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $no = 1;
            while ($data = mysqli_fetch_assoc($tampil)) {
            ?>
                <tr>
                    <td style="font-family:'Times New Roman'; font-size:12pt;"><?= $no++; ?></td>
                    <td style="font-family:'Times New Roman'; font-size:12pt;"><?= htmlspecialchars($data['nama']); ?></td>
                    <td style="font-family:'Times New Roman'; font-size:12pt; mso-number-format:'\@';"><?= htmlspecialchars($data['npm']); ?></td>
                    <td style="font-family:'Times New Roman'; font-size:12pt;"><?= htmlspecialchars($data['kelas']); ?></td>
                    <td style="font-family:'Times New Roman'; font-size:12pt;"><?= htmlspecialchars($data['tujuan']); ?></td>
                    <td style="font-family:'Times New Roman'; font-size:12pt;"><?= htmlspecialchars($data['tanggal']); ?></td>
                </tr>
            <?php } ?>
        </tbody>
    </table>
</body>

</html>