<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Visitor</title>
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

  <meta http-equiv="refresh" content="3;url=register.php">
  
  <style>
    /* Menggunakan Font Google yang umum */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

    /* BARIS PERBAIKAN 2: Mendefinisikan Variabel Warna yang dibutuhkan oleh ikon */
    :root {
        --accent-color: #white; /* Kuning, digunakan untuk warna ikon */
    }

    body {
      /* **PERBAIKAN UTAMA: Memastikan body sebagai container Flex penuh** */
      display: flex;
      justify-content: center; /* Memastikan pusat horizontal */
      align-items: center; /* Memastikan pusat vertikal */
      height: 100vh;
      margin: 0; /* Penting untuk menghilangkan margin default browser */
      
      background: linear-gradient(135deg, #007bff, #0056b3); 
      color: #ffffff;
      font-family: 'Poppins', sans-serif;
      flex-direction: column;
      text-align: center;
      transition: background 0.5s ease;
    }
    .container {
      /* Kelas container ini sudah memastikan isinya terpusat di tengah */
      background: rgba(255, 255, 255, 0.1);
      padding: 40px 60px;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(5px);
      margin: 0; 
    }
    .logo-section {
     margin-bottom: 25px;
    }
    .logo-section i {
        font-size: 4rem; /* Ukuran ikon lebih besar */
        /* Warna diambil dari variabel CSS --accent-color */
        color: var(--accent-color); 
        margin-bottom: 15px;
        filter: drop-shadow(0 3px 5px rgba(0,0,0,0.3));
        /* Animasi pulse ditambahkan agar ikon terlihat lebih hidup */
        animation: pulse 2s infinite ease-in-out;
    }
    /* Keyframes untuk animasi pulse */
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    h1 {
      font-size: 2.2rem;
      margin-bottom: 5px;
      font-weight: 700;
      letter-spacing: 1px;
    }
    p {
      font-size: 1.1rem;
      opacity: 0.95;
      margin-bottom: 25px; /* Memberi jarak ke loader */
      font-weight: 400;
    }
    .loader {
      margin: 20px auto; /* Memberi margin atas/bawah, dan auto untuk centering horizontal */
      border: 6px solid rgba(255, 255, 255, 0.2);
      border-top: 6px solid #ffffff;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      animation: spin 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <div class="container">
      <div class="logo-section">
      <i class="fas fa-book-reader"></i> 
      </div>
    <h1>Selamat Datang</h1>
    <p>Sistem Buku Pengunjung Perpustakaan</p>
    <div class="loader"></div>
    <p>Akan dialihkan ke halaman login / register</p>
  </div>
</body>
</html>