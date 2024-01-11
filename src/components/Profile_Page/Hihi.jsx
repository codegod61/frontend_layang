import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';


function Hihi() {

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <div className="container flex mt-[70px]">
        <div className="containerLeft font-Poppins w-[652px] ml-[200px]">
          <h1 className="text-[#444BD3] font-semibold" data-aos="fade-up" data-aos-delay='0'>BERGABUNGLAH BERSAMA KAMI !</h1>
          <h1 className="text-slate-950 text-[44px] font-bold" data-aos="fade-up" data-aos-delay='100'>LAYANG</h1>
          <p className="text-slate-950 text-[18PX] mt-[40px] font-normal" data-aos="fade-up" data-aos-delay='200'>
            <span className="font-semibold">LAYANG</span> adalah sebuah platform inovatif yang memudahkan proses pelaporan online dan pembuatan surat pengantar secara efisien. Sebagai perusahaan yang berkomitmen untuk menyediakan solusi
            praktis, Layang hadir untuk mempermudah kehidupan sehari-hari Anda.
          </p>

          <p className="text-slate-950 text-[18PX] mt-[20px] font-normal" data-aos="fade-up" data-aos-delay='300'>
            Dengan <span className="font-semibold">LAYANG,</span> Anda dapat dengan mudah membuat laporan online tanpa ribet dan mendapatkan surat pengantar dalam hitungan menit. Kami menggabungkan kemudahan penggunaan dengan teknologi
            terkini untuk memastikan pengalaman pelaporan yang lancar dan pembuatan surat pengantar yang cepat.
          </p>

          <h1 className="text-slate-950 text-[24px] mt-[56px] font-bold" data-aos="fade-up" data-aos-delay='400'>Visi dan Misi</h1>
          <p className="text-slate-950 text-[18PX] mt-[26px] font-normal" data-aos="fade-up" data-aos-delay='500'>
            Visi : Menjadi pemimpin dalam mengubah cara masyarakat berinteraksi dengan layanan pelaporan online dan pembuatan surat pengantar, menciptakan ekosistem yang terkoneksi dan memberdayakan pengguna untuk berpartisipasi aktif dalam
            proses-proses ini.
          </p>

          <p className="text-slate-950 text-[18PX] mt-[8px] font-normal " data-aos="fade-up" data-aos-delay='600'>Misi : </p>

          <ul className="list-disc ml-[20px]" data-aos="fade-up" data-aos-delay='600'>
            <li className="mt-[16px]">menyediakan platform pelaporan online yang efisien dan pembuatan surat pengantar dengan teknologi inovatif.</li>
            <li className="mt-[16px]">memberikan kemudahan akses tanpa hambatan, keamanan data pengguna sebagai prioritas utama</li>
            <li className="mt-[16px] mb-[100px]">memperkuat keterlibatan masyarakat, memberdayakan mereka untuk berkontribusi positif melalui proses pelaporan dan pembuatan surat pengantar.</li>
          </ul>
        </div>

        <div className="containerRight h-[456px] w-[456px]  ml-[107px] z-0 ">
          <Image src="/imgProfile/profile.png" alt="Profile" width={992} height={992} data-aos="fade-up" data-aos-delay='0'/>
        </div>
      </div>
    </div>
  );
}

export default Hihi;
