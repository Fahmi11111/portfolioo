const express = require("express");
const cors = require("cors");
const midtransClient = require("midtrans-client");

const app = express();
app.use(cors());
app.use(express.json());

// Inisialisasi Midtrans Snap SDK
let snap = new midtransClient.Snap({
  isProduction: false, // Set 'true' jika sudah siap dipublikasikan
  serverKey: "SB-Mid-server-Lqaer9JwxmtFGYFpgCldCYWc", // Masukkan Server Key dari Dashboard Midtrans
});

// Endpoint yang dipanggil oleh React
app.post("/api/create-payment", async (req, res) => {
  const { nama, email, noHp, grossAmount } = req.body;

  const parameter = {
    transaction_details: {
      order_id: `EVENT-${Date.now()}`,
      gross_amount: grossAmount,
    },
    customer_details: {
      first_name: nama,
      email: email,
      phone: noHp,
    },
  };

  try {
    const transaction = await snap.createTransaction(parameter);
    res.json({ snapToken: transaction.token });
  } catch (error) {
    console.error("Error Midtrans:", error);
    res.status(500).json({ message: error.message });
  }
});

// Jalankan Server di Port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Backend berjalan di http://localhost:${PORT}`);
});
