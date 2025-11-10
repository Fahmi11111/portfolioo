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

// ======== LOGIKA LOGIN / REGISTER ===========
$message = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = trim($_POST["email"]);
    $password = trim($_POST["password"]);

    // REGISTER
    if (isset($_POST["register"])) {
        $cek = mysqli_query($koneksi, "SELECT * FROM users WHERE email='$email'");
        if (mysqli_num_rows($cek) > 0) {
            $message = "❌ Email sudah digunakan.";
        } else {
            $hashed = password_hash($password, PASSWORD_DEFAULT);
            $query = "INSERT INTO users (email, password) VALUES ('$email', '$hashed')";
            if (mysqli_query($koneksi, $query)) {
                $message = "✅ Akun berhasil dibuat! Silakan login.";
            } else {
                $message = "❌ Gagal menyimpan data: " . mysqli_error($koneksi);
            }
        }
    }

    // LOGIN
    elseif (isset($_POST["login"])) {
        $result = mysqli_query($koneksi, "SELECT * FROM users WHERE email='$email'");
        if (mysqli_num_rows($result) == 1) {
            $user = mysqli_fetch_assoc($result);
            if (password_verify($password, $user['password'])) {
                $_SESSION["login"] = true;
                $_SESSION["user_email"] = $email;

                if (isset($_POST["remember"])) {
                    setcookie("remember_email", $email, time() + (86400 * 7), "/");
                    setcookie("remember_pass", $password, time() + (86400 * 7), "/");
                } else {
                    setcookie("remember_email", "", time() - 3600, "/");
                    setcookie("remember_pass", "", time() - 3600, "/");
                }

                header("Location: admin.php");
                exit;
            } else {
                $message = "⚠️ Password salah!";
            }
        } else {
            $message = "⚠️ Email / Username belum terdaftar!";
        }
    }
}

// Ambil cookie (jika ada)
$cookie_email = isset($_COOKIE["remember_email"]) ? $_COOKIE["remember_email"] : "";
$cookie_pass  = isset($_COOKIE["remember_pass"]) ? $_COOKIE["remember_pass"] : "";
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Login</title>
    <link rel="icon" href="assets/img/universitas-indraprasta-pgri-logo.png" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet" />
    <style>
        * {
            box-sizing: border-box;
        }
        html, body {
            height: 100%;
            margin: 0;
            overflow-x: hidden;
        }
        body {
            background: linear-gradient(135deg, #2b4bb5, #1a2b70);
            font-family: 'Nunito', sans-serif;
            display: flex;
            flex-direction: column;
        }
        main {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px 10px;
        }
        .card {
            border-radius: 1rem;
            overflow: hidden;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
            margin-bottom: 20px;
            width: 100%;
            max-width: 950px;
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
                        <h4 class="fw-bold text-dark"><i class="fa fa-user-circle"></i> Login / Daftar</h4>
                    </div>

                    <?php if (!empty($message)) : ?>
                        <div class="alert alert-info text-center"><?= htmlspecialchars($message) ?></div>
                    <?php endif; ?>

                    <form method="POST">
                        <div class="form-group mb-3">
                            <input type="text" name="email" class="form-control form-control-user"
                                placeholder="Masukkan Email / Username"
                                value="<?= htmlspecialchars($cookie_email) ?>" required>
                        </div>

                        <div class="form-group mb-3 position-relative">
                            <input type="password" name="password" id="passwordInput"
                                class="form-control form-control-user" placeholder="Kata Sandi"
                                value="<?= htmlspecialchars($cookie_pass) ?>" required>
                            <span id="togglePassword" class="position-absolute"
                                style="top:50%;right:15px;transform:translateY(-50%);cursor:pointer;">
                                <i class="fa fa-eye"></i>
                            </span>
                        </div>

                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" name="remember" id="remember"
                                <?= $cookie_email ? 'checked' : '' ?>>
                            <label class="form-check-label" for="remember">Ingat saya</label>
                        </div>

                        <button type="submit" name="login" class="btn btn-primary btn-user w-100 mb-2">
                            <i class="fa fa-sign-in-alt"></i> Login
                        </button>

                        <a href="daftar_akun_baru.php" class="btn btn-success btn-user w-100">
                      <i class="fa fa-user-plus"></i> Daftar Akun Baru
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
        const togglePassword = document.querySelector("#togglePassword");
        const password = document.querySelector("#passwordInput");
        togglePassword.addEventListener("click", function() {
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
            this.querySelector("i").classList.toggle("fa-eye");
            this.querySelector("i").classList.toggle("fa-eye-slash");
        });
    </script>
</body>
</html>
