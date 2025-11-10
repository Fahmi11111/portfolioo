<?php
    session_start();
     if (!isset($_SESSION["login"]) || $_SESSION["login"] !== true) {
    echo "<script>
        alert('Silahkan login / daftar dahulu 😉');
        window.location.href = 'register.php';
    </script>";
    exit;
    
$server = "sql303.infinityfree.com"; 
$user = "if0_40337471";           
$password = "Visitorrrr"; 
$database = "if0_40337471_db_visitorhub"; 

$koneksi = mysqli_connect($server, $user, $password, $database);
if (!$koneksi) {
    die("Koneksi gagal: " . mysqli_connect_error());
}   
}  
   
include "header.php";
include "koneksi.php";

// PROSES SIMPAN DATA
if (isset($_POST['kirim_internal']) || isset($_POST['kirim_tamu'])) {
    $nama   = htmlspecialchars($_POST['nama']);
    $tgl    = date('Y-m-d');
    $tujuan = htmlspecialchars($_POST['tujuan']);

    // SIMPAN DATA INTERNAL
    if (isset($_POST['kirim_internal'])) {
        $nama   = htmlspecialchars($_POST['nama']);
        $idkar  = htmlspecialchars($_POST['id_dosen']);
        $tujuan = htmlspecialchars($_POST['tujuan']);

        $query = "INSERT INTO tinternal (nama, id_dosen, tujuan, tanggal, kategori)
              VALUES ('$nama', '$idkar', '$tujuan', '$tgl', 'Internal')";
        $kirim = mysqli_query($koneksi, $query);

        if ($kirim) {
            echo "<script>alert('Data internal berhasil disimpan!');</script>";
        } else {
            echo "<script>alert('Gagal menyimpan data internal: " . mysqli_error($koneksi) . "');</script>";
        }
    }

    // SIMPAN DATA TAMU
    if (isset($_POST['kirim_tamu'])) {
        $nama   = htmlspecialchars($_POST['nama']);
        $npm    = htmlspecialchars($_POST['npm']);
        $kelas  = htmlspecialchars($_POST['kelas']);
        $prodi  = htmlspecialchars($_POST['prodi']);
        $tujuan = htmlspecialchars($_POST['tujuan']);

        $query = "INSERT INTO ttamu (nama, npm, kelas, prodi, tujuan, tanggal, kategori)
              VALUES ('$nama', '$npm', '$kelas', '$prodi', '$tujuan', '$tgl', 'Tamu')";
        $kirim = mysqli_query($koneksi, $query);

        if ($kirim) {
            echo "<script>alert('Data tamu berhasil disimpan!');</script>";
        } else {
            echo "<script>alert('Gagal menyimpan data tamu: " . mysqli_error($koneksi) . "');</script>";
        }
    }
}
?>

<!-- HEADER -->
<div class="text-center mb-4" style="margin-top: -70px;">
    <img src="assets/img/universitas-indraprasta-pgri-logo.png" width="150" alt="Logo Universitas Indraprasta PGRI">
    <h3 class="text-white mt-1">Buku Pengunjung Perpustakaan</h3>
</div>

<!-- FORM IDENTITAS -->
<div class="container my-3">
    <div class="row justify-content-center g-4">
        <!-- FORM INTERNAL -->
        <div class="col-lg-6 col-md-6">
            <div class="card shadow-lg border-0 rounded-4">
                <div class="card-body p-4">
                    <div class="text-center mb-4">
                        <h4 class="fw-bold text-primary"><i class="fa-solid fa-user-tie me-2"></i> Identitas Internal</h4>
                        <p class="text-muted small">Silakan isi data diri</p>
                    </div>

                    <form method="POST" action="">
                        <div class="mb-3">
                            <input type="text" class="form-control" name="nama" placeholder="Nama Dosen" required>
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" name="id_dosen" placeholder="ID Dosen" required>
                        </div>
                        <div class="mb-4">
                            <input type="text" class="form-control" name="tujuan" placeholder="Tujuan Kunjungan" required>
                        </div>

                        <button type="submit" name="kirim_internal" class="btn btn-primary w-100 py-2 fw-semibold">
                            <i class="fa-solid fa-paper-plane me-1"></i> Kirim
                        </button>
                    </form>

                    <hr>
                    <div class="text-center small text-muted">Mahasiswa Unindra © <?= date('Y'); ?>. All rights reserved.</div>
                </div>
            </div>
        </div>

        <!-- FORM TAMU -->
        <div class="col-lg-6 col-md-6">
            <div class="card shadow-lg border-0 rounded-4">
                <div class="card-body p-4">
                    <div class="text-center mb-4">
                        <h4 class="fw-bold text-primary"><i class="fa-solid fa-users me-2"></i> Identitas Tamu</h4>
                        <p class="text-muted small">Isi data tamu sesuai identitas</p>
                    </div>

                    <form method="POST" action="">
                        <div class="mb-3"><input type="text" class="form-control" name="nama" placeholder="Nama Lengkap" required></div>
                        <div class="mb-3"><input type="text" class="form-control" name="npm" placeholder="NPM / NIK" required></div>
                        <div class="mb-3"><input type="text" class="form-control" name="kelas" placeholder="Kelas" required></div>
                        <div class="mb-3"><input type="text" class="form-control" name="prodi" placeholder="Program Studi" required></div>
                        <div class="mb-4"><input type="text" class="form-control" name="tujuan" placeholder="Tujuan Kunjungan" required></div>

                        <button type="submit" name="kirim_tamu" class="btn btn-primary w-100 py-2 fw-semibold">
                            <i class="fa-solid fa-paper-plane me-1"></i> Kirim
                        </button>
                    </form>

                    <hr>
                    <div class="text-center small text-muted">Mahasiswa Unindra © <?= date('Y'); ?>. All rights reserved.</div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- DATA PENGUNJUNG -->
<div class="container mt-4">
    <div class="card shadow border-0">
        <div class="card-header bg-primary text-white fw-bold text-center">
            <i class="fa-solid fa-users"></i> Data Pengunjung Hari Ini (<?= date('Y-m-d'); ?>)
        </div>

        <div class="card-body">
            <!-- Tombol Logout -->
            <div class="d-flex justify-content-end mb-3 flex-wrap gap-2">
                <a href="logout.php" class="btn btn-danger">
                    <i class="fa fa-sign-out-alt"></i> Logout
                </a>
            </div>

            <!-- === TAB NAV === -->
            <ul class="nav nav-tabs mb-3" id="pengunjungTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="internal-tab" data-bs-toggle="tab" data-bs-target="#tabInternal" type="button" role="tab">
                        <i class="fa-solid fa-user-tie"></i> Internal
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="tamu-tab" data-bs-toggle="tab" data-bs-target="#tabTamu" type="button" role="tab">
                        <i class="fa-solid fa-users"></i> Tamu
                    </button>
                </li>
            </ul>

            <div class="tab-content" id="pengunjungTabsContent">
                <!-- === TAB INTERNAL === -->
                <div class="tab-pane fade show active" id="tabInternal" role="tabpanel" aria-labelledby="internal-tab">
                    <?php
                    $tgl = date('Y-m-d');
                    $limit_internal = isset($_GET['limit_internal']) ? intval($_GET['limit_internal']) : 10;
                    $page_internal = isset($_GET['page_internal']) ? intval($_GET['page_internal']) : 1;
                    $search_internal = isset($_GET['search_internal']) ? $_GET['search_internal'] : '';
                    $offset_internal = ($page_internal - 1) * $limit_internal;

                    $where_internal = $search_internal
                        ? "AND (nama LIKE '%$search_internal%' OR id_dosen LIKE '%$search_internal%' OR tujuan LIKE '%$search_internal%')"
                        : '';

                    $q_total_internal = mysqli_query($koneksi, "SELECT COUNT(*) AS total FROM tinternal WHERE tanggal='$tgl' $where_internal");
                    $total_internal = mysqli_fetch_assoc($q_total_internal)['total'];
                    $total_pages_internal = ceil($total_internal / $limit_internal);

                    $q_internal = mysqli_query($koneksi, "SELECT * FROM tinternal WHERE tanggal='$tgl' $where_internal ORDER BY id DESC LIMIT $limit_internal OFFSET $offset_internal");
                    ?>

                    <!-- Filter & Search -->
                    <div class="d-flex justify-content-between flex-wrap gap-2 mb-3">
                        <form method="get" class="d-flex align-items-center gap-2">
                            <label class="fw-semibold text-secondary mb-0">Tampilkan:</label>
                            <select name="limit_internal" class="form-select" style="width:80px;" onchange="this.form.submit()">
                                <option <?= $limit_internal == 10 ? 'selected' : ''; ?>>10</option>
                                <option <?= $limit_internal == 20 ? 'selected' : ''; ?>>20</option>
                                <option <?= $limit_internal == 50 ? 'selected' : ''; ?>>50</option>
                            </select>
                        </form>

                        <form method="get" class="d-flex" style="max-width:250px;">
                            <input type="text" name="search_internal" class="form-control" placeholder="Cari data..." value="<?= htmlspecialchars($search_internal) ?>">
                        </form>
                    </div>

                    <!-- Tabel Internal -->
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped align-middle text-center">
                            <thead class="table-primary sticky-top">
                                <tr>
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th>ID Dosen</th>
                                    <th>Tujuan</th>
                                    <th>Tanggal</th>
                                    <th>Kategori</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php if (mysqli_num_rows($q_internal) > 0): $no = $offset_internal + 1;
                                    while ($data = mysqli_fetch_assoc($q_internal)): ?>
                                        <tr>
                                            <td><?= $no++ ?></td>
                                            <td><?= htmlspecialchars($data['nama']) ?></td>
                                            <td><?= htmlspecialchars($data['id_dosen']) ?></td>
                                            <td><?= htmlspecialchars($data['tujuan']) ?></td>
                                            <td><?= htmlspecialchars($data['tanggal']) ?></td>
                                            <td><span class="badge bg-info text-dark">Internal</span></td>
                                        </tr>
                                    <?php endwhile;
                                else: ?>
                                    <tr>
                                        <td colspan="6" class="text-center text-muted">Tidak ada pengunjung internal hari ini.</td>
                                    </tr>
                                <?php endif; ?>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- === TAB TAMU === -->
                <div class="tab-pane fade" id="tabTamu" role="tabpanel" aria-labelledby="tamu-tab">
                    <?php
                    $limit_tamu = isset($_GET['limit_tamu']) ? intval($_GET['limit_tamu']) : 10;
                    $page_tamu = isset($_GET['page_tamu']) ? intval($_GET['page_tamu']) : 1;
                    $search_tamu = isset($_GET['search_tamu']) ? $_GET['search_tamu'] : '';
                    $offset_tamu = ($page_tamu - 1) * $limit_tamu;

                    $where_tamu = $search_tamu
                        ? "AND (nama LIKE '%$search_tamu%' OR npm LIKE '%$search_tamu%' OR prodi LIKE '%$search_tamu%' OR tujuan LIKE '%$search_tamu%')"
                        : '';

                    $q_total_tamu = mysqli_query($koneksi, "SELECT COUNT(*) AS total FROM ttamu WHERE tanggal='$tgl' $where_tamu");
                    $total_tamu = mysqli_fetch_assoc($q_total_tamu)['total'];
                    $total_pages_tamu = ceil($total_tamu / $limit_tamu);

                    $q_tamu = mysqli_query($koneksi, "SELECT * FROM ttamu WHERE tanggal='$tgl' $where_tamu ORDER BY id DESC LIMIT $limit_tamu OFFSET $offset_tamu");
                    ?>

                    <!-- Filter & Search -->
                    <div class="d-flex justify-content-between flex-wrap gap-2 mb-3">
                        <form method="get" class="d-flex align-items-center gap-2">
                            <label class="fw-semibold text-secondary mb-0">Tampilkan:</label>
                            <select name="limit_tamu" class="form-select" style="width:80px;" onchange="this.form.submit()">
                                <option <?= $limit_tamu == 10 ? 'selected' : ''; ?>>10</option>
                                <option <?= $limit_tamu == 20 ? 'selected' : ''; ?>>20</option>
                                <option <?= $limit_tamu == 50 ? 'selected' : ''; ?>>50</option>
                            </select>
                        </form>

                        <form method="get" class="d-flex" style="max-width:250px;">
                            <input type="text" name="search_tamu" class="form-control" placeholder="Cari data..." value="<?= htmlspecialchars($search_tamu) ?>">
                        </form>
                    </div>

                    <!-- Tabel Tamu -->
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped align-middle text-center">
                            <thead class="table-primary sticky-top">
                                <tr>
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th>NPM / NIK</th>
                                    <th>Kelas</th>
                                    <th>Program Studi</th>
                                    <th>Tujuan</th>
                                    <th>Tanggal</th>
                                    <th>Kategori</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php if (mysqli_num_rows($q_tamu) > 0): $no = $offset_tamu + 1;
                                    while ($data = mysqli_fetch_assoc($q_tamu)): ?>
                                        <tr>
                                            <td><?= $no++ ?></td>
                                            <td><?= htmlspecialchars($data['nama']) ?></td>
                                            <td><?= htmlspecialchars($data['npm']) ?></td>
                                            <td><?= htmlspecialchars($data['kelas']) ?></td>
                                            <td><?= htmlspecialchars($data['prodi']) ?></td>
                                            <td><?= htmlspecialchars($data['tujuan']) ?></td>
                                            <td><?= htmlspecialchars($data['tanggal']) ?></td>
                                            <td><span class="badge bg-success">Tamu</span></td>
                                        </tr>
                                    <?php endwhile;
                                else: ?>
                                    <tr>
                                        <td colspan="8" class="text-center text-muted">Tidak ada pengunjung tamu hari ini.</td>
                                    </tr>
                                <?php endif; ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Tambahkan Script Bootstrap jika belum -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>


<!-- FOOTER SISTEM INFORMASI & STATISTIK -->
<footer class="footer-section mt-4 py-4 text-white">
    <div class="container">
        <div class="row g-3">
            <!-- SISTEM INFORMASI -->
            <div class="col-md-4">
                <div class="info-box h-100">
                    <h5><i class="fa-solid fa-laptop-code text-info me-2"></i> Sistem Informasi Perpustakaan</h5>
                    <p class="mt-2">
                        Sistem Informasi Perpustakaan Universitas Indraprasta PGRI merupakan sistem informasi berbasis web yang dapat digunakan melalui browser seperti Mozilla Firefox, Google Chrome, Opera, dan lainnya.
                    </p>
                </div>
            </div>

            <!-- INFORMASI KONTAK -->
            <div class="col-md-4">
                <div class="info-box h-100">
                    <h5><i class="fa-solid fa-address-book text-success me-2"></i> Informasi Kontak</h5>
                    <ul class="list-unstyled mt-2">
                        <li class="mb-2">
                            <i class="fa-solid fa-phone text-warning me-2"></i> (021) 78853283
                        </li>
                        <li class="mb-2">
                            <i class="fa-solid fa-location-dot text-danger me-2"></i>
                            Jl. Raya Tengah, Gedong, Pasar Rebo, Jakarta Timur
                        </li>
                        <li>
                            <i class="fa-solid fa-building text-primary me-2"></i>
                            Jl. Nangka Raya, Tanjung Barat, Jagakarsa, Jakarta Selatan
                        </li>
                    </ul>
                </div>
            </div>

            <!-- STATISTIK -->
            <div class="col-md-4">
                <div class="info-box h-100">
                    <h5><i class="fa-solid fa-chart-column text-warning me-2"></i> Statistik Pengunjung</h5>
                    <?php
                    function tanggal_indo($tanggal)
                    {
                        $hari = [1 => 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
                        $bulan = [1 => 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
                        $num_hari = date('N', strtotime($tanggal));
                        $tgl = date('j', strtotime($tanggal));
                        $num_bulan = date('n', strtotime($tanggal));
                        $tahun = date('Y', strtotime($tanggal));
                        return $hari[$num_hari] . ', ' . $tgl . ' ' . $bulan[$num_bulan] . ' ' . $tahun;
                    }

                    $tgl_sekarang = date('Y-m-d');
                    $tgl_kemarin  = date('Y-m-d', strtotime('-1 day', strtotime($tgl_sekarang)));
                    $bulan_ini    = date('m');
                    $tgl_awal_minggu = date('Y-m-d', strtotime('monday this week'));
                    $tgl_akhir_minggu = date('Y-m-d', strtotime('sunday this week'));

                    // === HITUNG JUMLAH MAHASISWA (ttamu) ===
                    $m_hari_ini   = mysqli_fetch_assoc(mysqli_query($koneksi, "SELECT COUNT(*) AS jml FROM ttamu WHERE tanggal='$tgl_sekarang'"))['jml'];
                    $m_kemarin    = mysqli_fetch_assoc(mysqli_query($koneksi, "SELECT COUNT(*) AS jml FROM ttamu WHERE tanggal='$tgl_kemarin'"))['jml'];
                    $m_minggu_ini = mysqli_fetch_assoc(mysqli_query($koneksi, "SELECT COUNT(*) AS jml FROM ttamu WHERE tanggal BETWEEN '$tgl_awal_minggu' AND '$tgl_akhir_minggu'"))['jml'];
                    $m_bulan_ini  = mysqli_fetch_assoc(mysqli_query($koneksi, "SELECT COUNT(*) AS jml FROM ttamu WHERE MONTH(tanggal)='$bulan_ini'"))['jml'];
                    $m_total      = mysqli_fetch_assoc(mysqli_query($koneksi, "SELECT COUNT(*) AS jml FROM ttamu"))['jml'];

                    // === HITUNG JUMLAH KARYAWAN/DOSEN (tinternal) ===
                    $i_hari_ini   = mysqli_fetch_assoc(mysqli_query($koneksi, "SELECT COUNT(*) AS jml FROM tinternal WHERE tanggal='$tgl_sekarang'"))['jml'];
                    $i_kemarin    = mysqli_fetch_assoc(mysqli_query($koneksi, "SELECT COUNT(*) AS jml FROM tinternal WHERE tanggal='$tgl_kemarin'"))['jml'];
                    $i_minggu_ini = mysqli_fetch_assoc(mysqli_query($koneksi, "SELECT COUNT(*) AS jml FROM tinternal WHERE tanggal BETWEEN '$tgl_awal_minggu' AND '$tgl_akhir_minggu'"))['jml'];
                    $i_bulan_ini  = mysqli_fetch_assoc(mysqli_query($koneksi, "SELECT COUNT(*) AS jml FROM tinternal WHERE MONTH(tanggal)='$bulan_ini'"))['jml'];
                    $i_total      = mysqli_fetch_assoc(mysqli_query($koneksi, "SELECT COUNT(*) AS jml FROM tinternal"))['jml'];
                    ?>

                    <div class="mt-3 small">
                        <div class="d-flex justify-content-between align-items-center mb-2 border-bottom pb-1">
                            <span><i class="fa-solid fa-calendar-day text-info me-2"></i>Hari Ini</span>
                            <span><?= $m_hari_ini; ?> Mahasiswa & <?= $i_hari_ini; ?> Dosen</span>
                        </div>

                        <div class="d-flex justify-content-between align-items-center mb-2 border-bottom pb-1">
                            <span><i class="fa-regular fa-calendar text-info me-2"></i>Kemarin</span>
                            <span><?= $m_kemarin; ?> Mahasiswa & <?= $i_kemarin; ?> Dosen</span>
                        </div>

                        <div class="d-flex justify-content-between align-items-center mb-2 border-bottom pb-1">
                            <span><i class="fa-solid fa-calendar-week text-info me-2"></i>Minggu Ini</span>
                            <span><?= $m_minggu_ini; ?> Mahasiswa & <?= $i_minggu_ini; ?> Dosen</span>
                        </div>

                        <div class="d-flex justify-content-between align-items-center mb-2 border-bottom pb-1">
                            <span><i class="fa-solid fa-calendar-days text-info me-2"></i>Bulan Ini</span>
                            <span><?= $m_bulan_ini; ?> Mahasiswa & <?= $i_bulan_ini; ?> Dosen</span>
                        </div>

                        <div class="d-flex justify-content-between align-items-center fw-bold border-top pt-2 mt-2">
                            <span><i class="fa-solid fa-layer-group text-warning me-2"></i>Total</span>
                            <span><?= $m_total; ?> Mahasiswa & <?= $i_total; ?> Dosen</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- GARIS PEMBATAS -->
        <hr class="mt-4 mb-3 text-light">

        <!-- COPYRIGHT -->
        <div class="text-center small text-white mt-3">
             Mahasiswa Unindra © <?= date('Y'); ?>. All rights reserved.
            <br>
            <span id="clock" class="fw-semibold text-black"></span>
        </div>

        <script>
            // Jam & tanggal berjalan real-time 
            function updateClock() {
                const now = new Date();

                // Nama hari dan bulan dalam Bahasa Indonesia
                const hariList = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
                const bulanList = [
                    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
                    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
                ];

                const hari = hariList[now.getDay()];
                const tanggal = now.getDate();
                const bulan = bulanList[now.getMonth()];
                const tahun = now.getFullYear();

                const jam = now.toLocaleTimeString('id-ID', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                });

                // Format lengkap: "Jumat, 10 Oktober 2025 | 21:45:12"
                const waktuLengkap = `${hari}, ${tanggal} ${bulan} ${tahun} | ${jam}`;
                document.getElementById('clock').textContent = waktuLengkap;
            }

            setInterval(updateClock, 1000);
            updateClock(); // tampilkan langsung pertama kali
        </script>
</footer>

<!-- CSS STYLE -->
<style>
    .footer-section {
        background: linear-gradient(135deg, #102b5c, #1b3c74);
    }

    .info-box {
        background: rgba(255, 255, 255, 0.08);
        border-radius: 10px;
        padding: 15px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        transition: 0.3s;
    }

    .info-box:hover {
        transform: translateY(-3px);
        background: rgba(255, 255, 255, 0.12);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    .info-box h5 {
        font-weight: 600;
        border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        padding-bottom: 6px;
        margin-bottom: 10px;
    }

    .info-box p,
    .info-box li {
        font-size: 14px;
        color: #f1f1f1;
    }

    .info-box i {
        width: 18px;
        text-align: center;
    }

    @media (max-width: 768px) {
        .info-box {
            text-align: center;
        }

        .info-box h5 {
            justify-content: center;
            text-align: center;
        }
    }
</style>


<!-- JS -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.datatables.net/1.13.1/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.13.1/js/dataTables.bootstrap5.min.js"></script>

<style>
    .dataTables_wrapper .dataTables_length,
    .dataTables_wrapper .dataTables_filter {
        margin-bottom: 10px;
    }

    .dataTables_wrapper .dataTables_filter label {
        font-weight: 500;
    }

    .dataTables_wrapper .dataTables_length select {
        padding: 6px 28px 6px 12px !important;
        border: 1px solid #ced4da;
        border-radius: 6px;
        background-color: #fff;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230d6efd' viewBox='0 0 16 16'%3E%3Cpath d='M1.5 5.5l6 6 6-6H1.5z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 10px center;
        background-size: 12px;
        cursor: pointer;
    }

    table.dataTable thead th {
        background-color: #0d6efd;
        color: white;
        text-align: center;
    }

    table.dataTable tbody td {
        vertical-align: middle;
    }

    .dataTables_wrapper .dataTables_paginate .paginate_button {
        border-radius: 6px !important;
        padding: 4px 10px !important;
        margin: 0 2px;
        background-color: #f8f9fa;
        border: 1px solid #dee2e6;
        color: #0d6efd !important;
        transition: 0.2s;
    }

    .dataTables_wrapper .dataTables_paginate .paginate_button.current {
        background-color: #0d6efd !important;
        color: #fff !important;
        border: 1px solid #0d6efd;
    }

    .dataTables_wrapper .dataTables_paginate .paginate_button:hover {
        background-color: #0b5ed7 !important;
        color: #fff !important;
    }

    @media (max-width: 768px) {

        .dataTables_wrapper .dataTables_length,
        .dataTables_wrapper .dataTables_filter {
            width: 100%;
            float: none !important;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }

        .dataTables_wrapper .dataTables_length label,
        .dataTables_wrapper .dataTables_filter label {
            width: 100%;
        }

        .dataTables_wrapper .dataTables_filter input {
            width: 60% !important;
            max-width: 220px;
            margin-left: 8px;
            border-radius: 6px;
            padding: 6px 10px;
        }

        .dataTables_wrapper .dataTables_info,
        .dataTables_wrapper .dataTables_paginate {
            text-align: center;
            float: none !important;
            width: 100%;
        }
    }
</style>

<!-- Script DataTable -->
<script>
    $(document).ready(function() {
        const table = $('#dataTable').DataTable({
            responsive: true,
            lengthMenu: [
                [10, 20, 50, 100],
                [10, 20, 50, 100]
            ],
            pageLength: 10,
            language: {
                lengthMenu: "Tampilkan _MENU_ data per halaman",
                zeroRecords: "Data tidak ditemukan",
                info: "Menampilkan _START_ sampai _END_ dari _TOTAL_ data",
                infoEmpty: "Menampilkan 0 sampai 0 dari 0 data",
                search: "Cari:",
                paginate: {
                    first: "Awal",
                    last: "Akhir",
                    next: "Berikutnya",
                    previous: "Sebelumnya"
                }
            },
            order: [
                [0, "asc"]
            ]
        });

        // Filter kategori (dropdown)
        $('#filterKategori').on('change', function() {
            const val = $(this).val();
            if (val) {
                table.column(7).search(val).draw();
            } else {
                table.column(7).search('').draw();
            }
        });
    });
</script>

<?php include "footer.php"; ?>