import hero1 from '../../../public/img/hero1.png';
import hero2 from '../../../public/img/hero2.png';
import hero3 from '../../../public/img/hero3.png';
import hero4 from '../../../public/img/hero4.png';
import hero5 from '../../../public/img/hero5.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MainBody() {
  const images = [hero1, hero2, hero3, hero4, hero5];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentImage, images.length]);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);

  return (
    <>
      <div className="relative bg-cover h-[895px] z-0" style={{ backgroundImage: `url(img/bg-landing-page.png)` }}>
      <div className="flex justify-center ">
        <div className="navbar bg-opacity-0 bg-transparent z-50 w-[1128px] mt-[31px]">
          <div className="header flex items-center justify-between text-white">
            <div className="logo flex items-center font-bold text-2xl cursor-pointer">
              <Image className="mr-[19px]" src={"/img/logo.png"} width={38} height={69} alt="LogoImage" />
                <h1>LAYANG</h1>
              
            </div>

            <ul className="flex ">
              <li className="space-x-12 text-white ml-[56px]">
                <Link href="/">Home</Link>
              </li>
              <li className="space-x-12 text-white ml-[56px]">
                <Link href="./Product">Produk Kami</Link>
              </li>
              <li className="space-x-12 text-white ml-[56px]">
                <Link href="./Profile ">Tentang Kami</Link>
              </li>
              <li className="space-x-12 text-white ml-[56px]">
                <Link href="./ArticleNews">Artikel</Link>
              </li>

              <li className="space-x-12 text-white ml-[56px]">
                <Link href="./Contact">Kontak Kami</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

        <div className="container flex mt-[111px]" >
          <div className="containerLeft font-Poppins w-[652px] ml-[200px] " >
            <h1 className="text-slate-50 text-[56px] font-bold mb-2 " data-aos="fade-up" data-aos-delay='0'>Pelaporan dan Pembuatan Surat Tanpa Ribet</h1>
            <h4 className="text-slate-50 text-xl font-medium mb-[35px] " data-aos="fade-up" data-aos-delay='200'>Selesaikan Urusan Tanpa Ribet: Layanan Pelaporan Online Kami, Cepat, Aman, dan Efisien!</h4>
            <div className="button flex my-5 space-x-4 text-center">
              <Link href='/Product'>
              <button className="px-[32px] py-[14px] rounded-lg bg-white text-[#27005D] hover:bg-gray-400 border-white" data-aos="fade-up" data-aos-delay='400'>Pelajari Lebih Lanjut</button>
              </Link>
              <Link href='/Product'>
              <button className="border-2 border-white px-[32px] py-[14px] rounded-lg text-white hover:bg-white hover:text-[#27005D]" data-aos="fade-up" data-aos-delay='600'>Download Aplikasi</button>
              </Link>
            </div>
          </div>
          <div className="containerRight mt-[-80px] ml-[100px]" data-aos="fade-up" data-aos-delay='400'>
            <Image src={images[currentImage]} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
