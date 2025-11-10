<?php include "header.php"; ?>

<link rel="icon" href="assets/img/universitas-indraprasta-pgri-logo.png" type="image/x-icon">


<!-- Awal Row -->
<div class="row">
    <!-- Awal Col -->
    <div class="col-md-12">
        <!-- Awal Card -->
        <div class="card shadow border-0 mt-3">
            <div class="card-header bg-primary text-white fw-bold">
                <h5 class="m-0"><i class="fa-solid fa-table"></i> Rekap Pengunjung</h5>
            </div>
            <div class="card-body">
                <form action="" method="POST" class="text-center">
                    <div class="row mb-3">
                        <div class="col-md-3"></div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="tanggal1">Dari Tanggal</label>
                                <input class="form-control" type="date" name="tanggal1" id="tanggal1" required>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="tanggal2">Sampai Tanggal</label>
                                <input class="form-control" type="date" name="tanggal2" id="tanggal2" required>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-4">
                        <div class="col-md-4"></div>
                        <div class="col-md-2">
                            <button class="btn btn-primary form-control" name="btampilkan">
                                <i class="fa fa-search"></i> Tampilkan
                            </button>
                        </div>
                        <div class="col-md-2">
                            <a href="admin.php" class="btn btn-danger form-control">
                                <i class="fa fa-backward"></i> Kembali
                            </a>
                        </div>
                    </div>
                </form>

                <?php if (isset($_POST['btampilkan'])): ?>
                    <?php
                    // Ambil tanggal dari form
                    $tgl1 = $_POST['tanggal1'];
                    $tgl2 = $_POST['tanggal2'];

                    // Query menampilkan data berdasarkan rentang tanggal
                    $tampil = mysqli_query($koneksi, "SELECT * FROM ttamu WHERE tanggal BETWEEN '$tgl1' AND '$tgl2' ORDER BY id DESC");
                    ?>

                    <div class="alert alert-info fw-bold text-center">
                        Data tanggal <b><?= $tgl1; ?></b> sampai <b><?= $tgl2; ?></b>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-bordered table-striped" id="dataTable" width="100%" cellspacing="0">
                            <thead class="table-primary">
                                <tr>
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th>NPM</th>
                                    <th>Kelas</th>
                                    <th>Tujuan Kunjungan</th>
                                    <th>Tanggal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                $no = 1;
                                while ($data = mysqli_fetch_array($tampil)) {
                                ?>
                                    <tr>
                                        <td><?= $no++ ?></td>
                                        <td><?= htmlspecialchars($data['nama']) ?></td>
                                        <td><?= htmlspecialchars($data['npm']) ?></td>
                                        <td><?= htmlspecialchars($data['kelas']) ?></td>
                                        <td><?= htmlspecialchars($data['tujuan']) ?></td>
                                        <td><?= htmlspecialchars($data['tanggal']) ?></td>
                                    </tr>
                                <?php } ?>
                            </tbody>
                        </table>
                        <center>
                            <form method="POST" action="exportexcel.php" target="_blank">
                                <div class="col-md-4">
                                    <!-- Hidden input untuk tanggal rentang -->
                                    <input type="hidden" name="tanggal1" value="<?= @$_POST['tanggal1']; ?>">
                                    <input type="hidden" name="tanggal2" value="<?= @$_POST['tanggal2']; ?>">

                                    <button type="submit" class="btn btn-success form-control" name="bexport">
                                        <i class="fa fa-download"></i> Export ke Excel
                                    </button>
                                </div>
                            </form>
                        </center>

                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>
<!-- Akhir Card & Row -->

<?php include "footer.php"; ?>

<!-- Script JS -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.datatables.net/1.13.1/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.13.1/js/dataTables.bootstrap5.min.js"></script>

<!-- Inisialisasi DataTable -->
<script>
    $(document).ready(function() {
        $('#dataTable').DataTable({
            "lengthMenu": [
                [10, 25, 50, 100],
                [10, 25, 50, 100]
            ],
            "language": {
                "lengthMenu": "Tampilkan _MENU_ data per halaman",
                "zeroRecords": "Data tidak ditemukan",
                "info": "Menampilkan _START_ sampai _END_ dari _TOTAL_ data",
                "infoEmpty": "Tidak ada data tersedia",
                "infoFiltered": "(disaring dari total _MAX_ data)",
                "search": "Cari:",
                "paginate": {
                    "first": "Awal",
                    "last": "Akhir",
                    "next": "Berikutnya",
                    "previous": "Sebelumnya"
                }
            },
            "pageLength": 10,
            "order": [
                [0, "asc"]
            ]
        });
    });
</script>

</body>

</html>