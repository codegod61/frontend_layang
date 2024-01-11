import BgFooter from '../../../public/img/Bg-footer.png'
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div>

      </div>
      <div className='bg-[#27005D] rounded-t-[30px] ' style={{ backgroundImage: `url(${BgFooter.src})` }}>
        <div className="flex justify-center">
          <div className="w-[1128px]">
            <div className="container font-Poppins pt-[100px] rounded-t-[30px] mt-[-25px]" >
              <div className='pr-64'>
                <div className="logo flex items-center font-bold text-2xl cursor-pointer">
                  <Image className="mr-[19px]" src={"/img/logo.png"} alt={"Logo"} width={38} height={69} />
                  {/* <Image className="mr-[19px]" src="img/logo.png" alt="" /> */}
                  <h1 className="text-white">LAYANG</h1>
                </div>
                <p className="text-white opacity-30 w-[360px] my-[24px]">Jln. Panji Tilar no. 13, Karang Anyar, Lombok Utara, Nusa Tenggara Barat</p>
              </div>
              <div className="flex gap-[32px]">
                <a href="">
                  <Image src="/img/logo-facebook.png" alt="logoFacebook" width={24} height={24} />
                </a>
                <a href="">
                  <Image src="/img/logo-twitter.png" alt="logoTwitter" width={24} height={24} />
                </a>
                <a href="">
                  <Image src="/img/logo-instagram.png" alt="logoInstagram" width={24} height={24} />
                </a>
                <a href="">
                  <Image src="/img/logo-github.png" alt="logoGithub" width={24} height={24} />
                </a>
              </div>

              <div className="produk-kami  grid justify-center -mt-[170px] ml-[-250px]">
                <span className="text-white opacity-40 font-semibold text-[14px] mb-[20px] ">PRODUK KAMI</span>
                <div className=" grid text-white text-[16px] gap-[8px]">
                  <a href="">Aplikasi</a>
                  <a href="">Website</a>
                  <a href="">Admin</a>
                </div>
              </div>

              <div className="tentang-kami  grid justify-center -mt-[130px] ml-[120px]">
                <span className="text-white opacity-40 font-semibold text-[14px] mb-[20px]">TENTANG KAMI</span>

                <div className=" grid text-white text-[16px] gap-[8px]">
                  <a href="">Perusahaan</a>
                  <a href="">Visi</a>
                  <a href="">Misi</a>
                  <a href="">Mitra</a>
                </div>
              </div>

              <div className="Artikel  grid justify-center -mt-[162px] ml-[490px] ">
                <span className="text-white opacity-40 font-semibold text-[14px] mb-[20px] ">ARTIKEL</span>
                <div className=" grid text-white text-[16px] gap-[8px]">
                  <a href="">Blog</a>
                  <a href="">Kategori</a>
                  <a href="">Penulis</a>
                </div>
              </div>

              <div className="Kontak-Kami  grid justify-center py-[150px] mt-[-280px] ml-[890px]">
                <span className="text-white opacity-40 font-semibold text-[14px] mb-[22px]">KONTAK KAMI</span>
                <div className=" grid text-white text-[16px] gap-[8px]">
                  <a href="">FAQ</a>
                  <a href="">Kebijakan Privasi</a>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="flex justify-center border-t border-gray-600 w-[1230px] mt-[42px] py-[40px]">
                  <span className="text-white opacity-40 text-[16px] ">© 2023 Powered by PT Layang Warga Indonesia</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
