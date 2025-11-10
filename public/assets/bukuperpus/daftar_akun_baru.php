<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();

// ======== KONEKSI DATABASE ===========
$server   = "sql303.infinityfree.com"; 
$user     = "if0_40337471";           
$password = "Visitorrrr"; 
$database = "if0_40337471_db_visitorhub"; 

$koneksi = mysqli_connect($server, $user, $password, $database);
if (!$koneksi) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

// ======== LOGIKA REGISTER ===========
$message = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = trim($_POST["email"]);
    $password = trim($_POST["password"]);
    $confirm = trim($_POST["confirm"]);

    if ($password !== $confirm) {
        $message = "❌ Konfirmasi password tidak cocok!";
    } elseif (strlen($password) < 8) {
        $message = "⚠ Password minimal 8 karakter!";
    } else {
        $cek = mysqli_query($koneksi, "SELECT * FROM users WHERE email='$email'");
        if (mysqli_num_rows($cek) > 0) {
            $message = "⚠ Email sudah digunakan.";
        } else {
            $hashed = password_hash($password, PASSWORD_DEFAULT);
            $query = "INSERT INTO users (email, password) VALUES ('$email', '$hashed')";
            if (mysqli_query($koneksi, $query)) {
                $message = "✅ Akun berhasil dibuat! Anda akan diarahkan ke halaman login...";
                header("Refresh: 2; url=register.php");
            } else {
                $message = "❌ Gagal menyimpan data: " . mysqli_error($koneksi);
            }
        }
    }
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Daftar Akun Baru</title>
    <link rel="icon" href="assets/img/universitas-indraprasta-pgri-logo.png" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet" />
    <style>
        html, body { height: 100%; margin: 0; overflow-x: hidden; }
        body {
            background: linear-gradient(135deg, #2b4bb5, #1a2b70);
            font-family: 'Nunito', sans-serif;
            display: flex;
            flex-direction: column;
        }
        main {
            flex: 1; display: flex; align-items: center; justify-content: center; padding: 20px 10px;
        }
        .card {
            border-radius: 1rem;
            overflow: hidden;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
            margin-bottom: 20px;
            width: 100%; max-width: 950px;
        }
        .bg-login-side {
            background: linear-gradient(160deg, #1a2b70, #0066cc);
            color: white;
        }
        .btn-user {
            border-radius: 40px;
            font-weight: 600;
            transition: all 0.3s ease;
            padding: 0.5rem 0;
        }
        .btn-user:hover { transform: scale(1.03); }
        .form-control-user {
            border-radius: 40px;
            padding: 0.6rem 1rem;
        }
        .position-relative i {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            color: #777;
        }
        .alert { border-radius: 10px; font-size: 13px; padding: 8px 15px; }
        footer {
            background-color: #1a2b70;
            color: white;
            padding: 20px 0;
            width: 100%;
            margin-top: auto;
        }
        footer h5 { font-weight: bold; font-size: 1rem; }
        footer p, footer li { font-size: 0.9rem; }
        .error-text { color: red; font-size: 13px; margin-top: 4px; display: none; }
        @media (max-width: 768px) {
            .bg-login-side { display: none; }
            .card { margin: 1rem; }
        }
    </style>
</head>
<body>
    <main>
        <div class="card border-0 shadow-lg">
            <div class="row g-0">
                <!-- Kolom Kiri -->
                <div class="col-lg-6 bg-login-side d-flex flex-column justify-content-center align-items-center text-center p-5">
                    <img src="assets/img/universitas-indraprasta-pgri-logo.png" width="150" alt="Logo Unindra" class="mb-3" />
                    <h3 class="fw-bold mb-2">Buku Pengunjung</h3>
                    <p class="fw-light mb-0">Perpustakaan Universitas Indraprasta PGRI</p>
                </div>

                <!-- Kolom Kanan -->
                <div class="col-lg-6 col-md-12 p-5">
                    <div class="text-center mb-4">
                        <h4 class="fw-bold text-dark"><i class="fa fa-user-plus"></i> Daftar Akun Baru</h4>
                    </div>

                    <?php if (!empty($message)) : ?>
                        <div class="alert alert-info text-center"><?= htmlspecialchars($message) ?></div>
                    <?php endif; ?>

                    <form method="POST" id="registerForm" novalidate>
                        <div class="form-group mb-3">
                            <input type="email" name="email" class="form-control form-control-user"
                                placeholder="Masukkan Email" required>
                        </div>

                        <div class="form-group mb-3 position-relative">
                            <input type="password" name="password" id="passwordInput"
                                class="form-control form-control-user" placeholder="Password" minlength="8" required>
                            <i class="fa fa-eye" style="color: black;" id="togglePassword"></i>
                        </div>

                        <div class="form-group mb-3 position-relative">
                            <input type="password" name="confirm" id="confirmInput"
                                class="form-control form-control-user" placeholder="Konfirmasi Password" required>
                            <i class="fa fa-eye"  style="color: black;" id="toggleConfirm"></i>
                        </div>

                        <button type="submit" class="btn btn-success btn-user w-100 mb-2">
                            <i class="fa fa-user-plus"></i> Buat Akun
                        </button>

                        <a href="register.php" class="btn btn-secondary btn-user w-100">
                            <i class="fa fa-arrow-left"></i> Kembali ke Login
                        </a>
                    </form>
                </div>
            </div>
        </div>
    </main>

    <!-- FOOTER -->
    <footer>
        <div class="container text-center">
            <div class="row g-4">
                <div class="col-md-6">
                    <h5><i class="fa-solid fa-laptop-code text-info me-2"></i> Sistem Informasi Perpustakaan</h5>
                    <p class="mt-2">sistem berbasis web untuk Manajemen Data Pengunjung Perpustakaan Universitas Indraprasta PGRI (UNINDRA). Sistem ini dirancang                                      untuk menggantikan buku tamu manual dengan solusi digital yang efisien, akurat, dan mudah diakses.</p>
                </div>
                <div class="col-md-6">
                    <h5><i class="fa-solid fa-address-book text-success me-2"></i> Kontak</h5>
                    <ul class="list-unstyled mt-2">
                        <li><i class="fa-solid fa-phone me-2 text-warning"></i> (021) 78853283</li>
                        <li><i class="fa-solid fa-location-dot me-2 text-danger"></i> Jl. Raya Tengah, Gedong, Pasar Rebo, Jakarta Timur</li>
                    </ul>
                </div>
            </div>
            <hr class="my-3 border-light">
            <div class="text-center small">Mahasiswa Unindra © <?= date('Y'); ?></div>
        </div>
    </footer>

    <script>
        const passwordInput = document.getElementById("passwordInput");
        const confirmInput = document.getElementById("confirmInput");
        const passwordError = document.getElementById("passwordError");
        const confirmError = document.getElementById("confirmError");
        const togglePassword = document.getElementById("togglePassword");
        const toggleConfirm = document.getElementById("toggleConfirm");

        // Toggle visibility password
        togglePassword.addEventListener("click", () => {
            const type = passwordInput.type === "password" ? "text" : "password";
            passwordInput.type = type;
            togglePassword.classList.toggle("fa-eye");
            togglePassword.classList.toggle("fa-eye-slash");
        });

        toggleConfirm.addEventListener("click", () => {
            const type = confirmInput.type === "password" ? "text" : "password";
            confirmInput.type = type;
            toggleConfirm.classList.toggle("fa-eye");
            toggleConfirm.classList.toggle("fa-eye-slash");
        });

        // Validasi real-time
        passwordInput.addEventListener("input", () => {
            if (passwordInput.value.length < 8) {
                passwordError.style.display = "block";
            } else {
                passwordError.style.display = "none";
            }
        });

        confirmInput.addEventListener("input", () => {
            if (confirmInput.value !== passwordInput.value) {
                confirmError.style.display = "block";
            } else {
                confirmError.style.display = "none";
            }
        });

        // Validasi sebelum submit
        document.getElementById("registerForm").addEventListener("submit", (e) => {
            let valid = true;
            if (passwordInput.value.length < 8) {
                passwordError.style.display = "block";
                valid = false;
            }
            if (confirmInput.value !== passwordInput.value) {
                confirmError.style.display = "block";
                valid = false;
            }
            if (!valid) e.preventDefault();
        });
    </script>
</body>
</html>