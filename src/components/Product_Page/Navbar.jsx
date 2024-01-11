import Image from 'next/image';

function Navbar() {
  return (
    <div>
        <div className='flex justify-center '>
              <div className="navbar bg-opacity-0 bg-transparent z-50 w-[1128px] mt-[31px]">
                  <div className="header flex items-center justify-between text-slate-50  font-Poppins">
                      <div className="logo flex items-center font-bold text-2xl">
                          <Image className="mr-[19px]" src="imgProduct/logo.png" alt="" />
                          <h1 className="text-[24px] text-slate-950">LAYANG</h1>
                      </div>
                      <ul className="">
                          <li className="space-x-12 text-slate-950">
                              <a className="pt-6 " href="">Produk Kami</a>
                              <a className="pt-6 " href="">Tentang Kami</a>
                              <a className="pt-6 " href="">Artikel</a>
                              <a className="pt-6 " href="">Kontak Kami</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Navbar