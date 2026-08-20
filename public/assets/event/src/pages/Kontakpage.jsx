import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Kontakpage = () => {
  const form = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    emailjs.init({
      publicKey: "wyTbGThhpGbrNFVrC",
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setStatus(null);

    try {
      const response = await emailjs.sendForm(
        "service_co0s5eo",
        "template_z15x0ei",
        form.current,
      );

      console.log("EmailJS SUCCESS:", response.status, response.text);

      setStatus({
        type: "success",
        title: "Pesan Berhasil Dikirim!",
        message:
          "Terima kasih telah menghubungi kami. Pesan Anda telah diterima dan akan segera kami tindak lanjuti.",
      });

      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        type: "error",
        title: "Pesan Gagal Dikirim",
        message:
          error?.text ||
          "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi beberapa saat kemudian.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className="py-24 lg:py-32 bg-stone-950 relative overflow-hidden font-sans text-stone-100 selection:bg-indigo-500 selection:text-white"
      id="kontak"
    >
      {/* Ambient Glow Latar Belakang */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/20 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="bg-stone-900/80 border border-stone-700/60 backdrop-blur-md w-fit py-2 px-4 rounded-full flex items-center gap-3 mx-auto mb-6 shadow-xl">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-ping"></span>

            <p className="text-indigo-300 font-medium text-xs sm:text-sm tracking-wider uppercase">
              Layanan Informasi & Diskusi
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
            Mari Terhubung &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Berkolaborasi
            </span>
          </h1>

          <p className="text-stone-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Memiliki pertanyaan seputar acara, peluang kerja sama, atau ingin
            berdiskusi mengenai proyek teknologi Anda? Kirimkan pesan dan kami
            akan segera merespons.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start max-w-6xl mx-auto">
          {/* Side Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email */}
            <div className="bg-stone-900/40 border border-stone-800/80 p-6 md:p-8 rounded-3xl backdrop-blur-md hover:border-indigo-500/40 transition-all duration-300 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-stone-800 border border-stone-700/50 flex items-center justify-center mb-6">
                <i className="ri-mail-send-fill text-indigo-400 text-2xl"></i>
              </div>

              <h3 className="text-white text-xl font-bold mb-2">Email Resmi</h3>

              <p className="text-stone-400 text-sm mb-4">
                Untuk pertanyaan umum, kemitraan, atau informasi sertifikat.
              </p>

              <a
                href="mailto:fahmimuhammad409@gmail.com"
                className="text-indigo-400 hover:text-indigo-300 font-semibold text-sm transition-colors flex items-center gap-2"
              >
                fahmimuhammad409@gmail.com
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>

            {/* Waktu Respons */}
            <div className="bg-stone-900/40 border border-stone-800/80 p-6 md:p-8 rounded-3xl backdrop-blur-md hover:border-indigo-500/40 transition-all duration-300 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-stone-800 border border-stone-700/50 flex items-center justify-center mb-6">
                <i className="ri-time-fill text-purple-400 text-2xl"></i>
              </div>

              <h3 className="text-white text-xl font-bold mb-2">
                Waktu Respons
              </h3>

              <p className="text-stone-400 text-sm">
                Tim operasional kami akan meninjau pesan Anda dan memberikan
                tanggapan dalam kurun waktu 1x24 jam kerja.
              </p>
            </div>

            {/* Lokasi */}
            <div className="bg-stone-900/40 border border-stone-800/80 p-6 md:p-8 rounded-3xl backdrop-blur-md hover:border-indigo-500/40 transition-all duration-300 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-stone-800 border border-stone-700/50 flex items-center justify-center mb-6">
                <i className="ri-map-pin-2-fill text-pink-400 text-2xl"></i>
              </div>

              <h3 className="text-white text-xl font-bold mb-2">
                Lokasi Utama
              </h3>

              <p className="text-stone-400 text-sm">
                Paris Van Java (PVJ), Kota Bandung, Jawa Barat, Indonesia.
              </p>
            </div>
          </div>

          {/* Form Container */}
          <div className="lg:col-span-7">
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 bg-stone-900/40 border border-stone-800/80 p-8 md:p-10 rounded-3xl backdrop-blur-md shadow-2xl hover:border-indigo-500/30 transition-all duration-300"
            >
              {/* Input Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nama */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="nama"
                    className="block text-xs font-semibold text-stone-300 uppercase tracking-wider ml-1"
                  >
                    Nama Lengkap
                  </label>

                  <input
                    type="text"
                    id="nama"
                    name="name"
                    required
                    placeholder="Masukkan nama Anda"
                    className="p-4 bg-stone-950 border border-stone-800 rounded-xl text-white placeholder-stone-600 focus:outline-none focus:border-indigo-500 transition-all duration-300 text-sm"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-stone-300 uppercase tracking-wider ml-1"
                  >
                    Alamat Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="nama@email.com"
                    className="p-4 bg-stone-950 border border-stone-800 rounded-xl text-white placeholder-stone-600 focus:outline-none focus:border-indigo-500 transition-all duration-300 text-sm"
                  />
                </div>
              </div>

              {/* Textarea */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="pesan"
                  className="block text-xs font-semibold text-stone-300 uppercase tracking-wider ml-1"
                >
                  Pesan Anda
                </label>

                <textarea
                  id="pesan"
                  name="message"
                  required
                  rows="5"
                  placeholder="Tuliskan detail pertanyaan atau topik pembahasan Anda di sini..."
                  className="p-4 bg-stone-950 border border-stone-800 rounded-xl text-white placeholder-stone-600 focus:outline-none focus:border-indigo-500 transition-all duration-300 resize-y min-h-[120px] text-sm"
                ></textarea>
              </div>

              {/* Status Notification */}
              {status && (
                <div
                  className={`rounded-2xl border p-4 flex items-start gap-3 ${
                    status.type === "success"
                      ? "bg-emerald-500/10 border-emerald-500/20"
                      : "bg-red-500/10 border-red-500/20"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                      status.type === "success"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-red-500/15 text-red-400"
                    }`}
                  >
                    <i
                      className={`text-xl ${
                        status.type === "success"
                          ? "ri-checkbox-circle-fill"
                          : "ri-error-warning-fill"
                      }`}
                    ></i>
                  </div>

                  <div>
                    <h4
                      className={`font-semibold text-sm ${
                        status.type === "success"
                          ? "text-emerald-400"
                          : "text-red-400"
                      }`}
                    >
                      {status.title}
                    </h4>

                    <p className="text-stone-400 text-sm mt-1 leading-relaxed">
                      {status.message}
                    </p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="mt-2 w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl h-14 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <i className="ri-loader-4-line animate-spin text-xl"></i>
                    <span>Mengirim Pesan...</span>
                  </>
                ) : (
                  <>
                    <span>Kirim Pesan</span>
                    <i className="ri-send-plane-fill"></i>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontakpage;
