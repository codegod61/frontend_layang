import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
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
            className="text-[#444BD3] font-semibold"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            FITUR UTAMA APLIKASI LAYANG
          </h1>
          <h1
            className="text-slate-950 text-[32px] font-bold"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            2 FITUR UTAMA YANG KAMI TAWARKAN...
          </h1>
          <p
            className="text-slate-950 text-2xl font-normal"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Kami memahami kebutuhan desa Anda. Aplikasi kami menawarkan dua
            fitur utama yang revolusioner:
            <span className="font-semibold">
              {" "}
              Pembuatan Surat Pengantar secara Online dan Pelaporan Online
              Masalah Desa.
            </span>
          </p>

          <div className="flex pt-10 mb-10">
            <div className="w-1/2 pr-4">
              <h1
                className="font-bold text-xl"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Surat Pengantar
              </h1>
              <p
                className="text-[#121127] pt-3 pb-6 text-lg"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Pembuatan surat pengantar sekarang dapat dilakukan dengan
                beberapa ketukan jari. Masukkan informasi, dan surat pengantar
                akan segera di proses.
              </p>
              <Link href = "/BodyProductLanjut"
                className="text-[#444BD3] text-lg inline-flex items-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Pelajari Lebih Lanjut
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Link>
            </div>
            <div className="w-1/2 pl-4">
              <h1
                className="font-bold text-xl"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Pelaporan Online
              </h1>
              <p
                className="text-[#121127] pt-3 pb-6 text-lg"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Sampaikan permasalahan seputar infrastruktur, lingkungan, atau
                keamanan secara langsung dari ponsel Anda dan pihak terkait akan
                segera bertindak.
              </p>
             
              <Link href ="/BodyProductLanjut">
              <h1 className="text-[#444BD3] text-lg inline-flex items-center" data-aos="fade-up"
                data-aos-delay="600">
                Pelajari Lebih Lanjut
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </h1>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="flex items-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="containerRight  mb-[120px]">
            <Image src="/imgProduct/product2.png" alt="ExampleProduct2" width={547} height={456} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyProduct;
