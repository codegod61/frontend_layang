import CardMenu from '../Cards/CardMenu'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Hero(){
    
    useEffect(() => {
        AOS.init({
          once: true,
          duration: 2000,
        });
      }, []);
    



    return(
        <>
        <div className="container py-[96px] font-Poppins">
            <h2 className='text-[#444BD3] font-semibold text-[16px]' data-aos="fade-up" data-aos-delay='0'>MENGAPA HARUS LAYANG?</h2>
            <h1 className='text-[#27005D] text-[40px] font-bold mb-[40px] mt-[8px]' data-aos="fade-up" data-aos-delay='0'>Beberapa keunggulan LAYANG yang akan membuat anda selalu ingin menggunakannya</h1>
            <div className="card flex gap-[26px]">
                <div data-aos="fade-up" data-aos-delay='0'>
                <CardMenu menu = 'Cepat' menuDesc = 'Layang terbukti cepat memproses laporan sehingga akan menghemat waktu anda' />
                </div>
                <div data-aos="fade-up" data-aos-delay='200'>
                <CardMenu menu = 'Aman' menuDesc = 'Keamana data anda menjadi prioritas utama kami dalam melayani kebutuhan anda' />
                </div>
                <div data-aos="fade-up" data-aos-delay='400'>
                <CardMenu menu = 'Praktis' menuDesc = 'Layang dapat diakses di smartphone anda sehingga pempermudah anda' />
                </div>
                <div data-aos="fade-up" data-aos-delay='600'>
                <CardMenu menu = 'Simpel' menuDesc = 'Layang tidak akan membuat kamu kebingungan saat melalukan pelaporan ' />
                </div>
            </div>
        </div>
        </>
    )
}