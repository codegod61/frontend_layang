import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';

function BodyProduct() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <div className="container flex mt-[111px]">
        <div className="containerLeft font-Poppins w-[652px]">
          <h1
            className="text-slate-950 text-[32px] font-bold"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Surat Pengantar
          </h1>
          <p
            className="text-slate-950 text-2xl font-normal pt-10 text-justify"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Surat Pengantar online yang terintegrasi dalam situs web kelurahan
            membawa kemudahan bagi warga dalam mengajukan permohonan atau
            mengurus berbagai keperluan administratif. Melalui fitur ini, warga
            dapat mengakses formulir surat pengantar tanpa harus datang langsung
            ke kantor kelurahan, menghemat waktu dan tenaga. Proses pengajuan
            surat pengantar online dapat dimulai dengan mengisi formulir yang
            telah disediakan di situs web kelurahan. Warga diharapkan
            menyertakan informasi lengkap, seperti maksud pengajuan, identitas
            diri, dan alasan permohonan surat pengantar. Setelah formulir
            terisi, warga dapat mengirimkannya secara online. Keuntungan utama
            dari sistem Surat Pengantar online ini adalah efisiensi
            administratif. Pihak kelurahan dapat memproses permohonan dengan
            cepat dan memberikan konfirmasi status kepada pemohon. Warga pun
            dapat memantau perkembangan permohonan mereka secara real-time
            melalui situs web.
          </p>
        </div>

        <div
          className="flex items-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="containerRight  mb-[120px]">
            <Image src="/imgProduct/product2.png" alt="" />
          </div>
        </div>
      </div>

      <div className="container flex mt-[px]">
        <div
          className="flex items-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="containerRight  mb-[120px]">
            <Image src="/imgProduct/product2.png" alt="" />
          </div>
        </div>

        <div className="containerLeft font-Poppins w-[652px]">
          <h1
            className="text-slate-950 text-[32px] font-bold"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Pelaporan Online
          </h1>
          <p
            className="text-slate-950 text-2xl font-normal pt-10 text-justify"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Pelaporan online ke kelurahan melalui situs web merupakan langkah
            positif menuju partisipasi masyarakat yang lebih aktif dalam
            pengelolaan lingkungan mereka. Dengan fitur pelaporan online, warga
            dapat dengan mudah mengirimkan laporan, pengaduan, atau permintaan
            bantuan langsung melalui platform yang telah disediakan oleh situs
            web kelurahan. Prosesnya sangat sederhana. Warga hanya perlu
            mengakses bagian pelaporan online di situs web kelurahan, kemudian
            mengisi formulir pelaporan yang telah disediakan. Informasi yang
            diperlukan bisa melibatkan kategori laporan, deskripsi permasalahan,
            dan jika mungkin, menyertakan foto terkait. Setelah itu, warga dapat
            mengirimkan pelaporannya. Kelebihan sistem pelaporan online ini
            adalah kemudahan aksesibilitas. Warga tidak perlu datang langsung ke
            kantor kelurahan untuk menyampaikan keluhan atau permintaan bantuan.
            Mereka dapat melakukannya kapan saja dan di mana saja, asalkan
            terhubung ke internet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BodyProduct;
