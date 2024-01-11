import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';


function Hore() {

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);
  return (
    <div>
        <div className="hore flex mt-[40px] ">
          <div className="flex items-center">
              <div className="horeLeft font-Poppins w-[652px]">
                  <h1 className="text-slate-950 text-[40px] font-bold" data-aos="fade-up" data-aos-delay='0'>APLIKASI LAYANG AKAN MEMBANTUMU</h1>
                  <h4 className="text-slate-950 text-[18PX] font-normal" data-aos="fade-up" data-aos-delay='100'>Dengan Layang, melaporkan secara online dan membuat surat pengantar tidak pernah semudah ini. Segera dapatkan aplikasinya.</h4>
                  <div className="button flex my-5 space-x-4 text-center" data-aos="fade-up" data-aos-delay='300'>
                      <button className='pr-[32px] py-[14px] rounded-lg'>
                        <Image src="/imgProduct/gps.png" alt="GooglePlayStore" width={374} height={109} />
                      </button>
                      <button className='pr-[32px] py-[14px] rounded-lg'>
                        <Image src="/imgProduct/btnapp.png" alt="Apple" width={376} height={109} />
                      </button>
                  </div>
              </div>
              <div className="horeRight  z-0 " data-aos="fade-up" data-aos-delay='0'>
                  <Image src="/imgProduct/product.png" alt="ExampleProduct" width={932} height={500} className="rounded-r-[30px]"/>  
              </div>
              </div>
          </div>
    </div>
  )
}

export default Hore
