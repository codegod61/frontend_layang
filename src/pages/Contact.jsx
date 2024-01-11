import BgContact from '../../public/img/bg-contact.png'

export default function Contact() {
  return (
    <div className='flex'>
        <div className="w-[516px] h-[735px] pt-[96px] pl-[156px] pr-[96px] " style={{backgroundImage: `url(${BgContact.src})`}}>
            
                <h1 className="text-white text-[24px] font-bold">
                Info Kontak
                </h1>
                <p className="text-white text-[14px] mt-[24px]">
                Apakah Anda memiliki pertanyaan, umpan balik, atau ingin berbagi pengalaman Anda dengan aplikasi Layang? Jangan ragu untuk menghubungi kami melalui salah satu opsi di bawah ini:
                </p>

                <div className="flex mt-[36px] gap-[12px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5C3.44772 5 3 5.44772 3 6V7.43381L12 12.8338L21 7.43381V6C21 5.44772 20.5523 5 20 5H4ZM21 9.76619L13.029 14.5488C12.3956 14.9288 11.6044 14.9288 10.971 14.5488L3 9.76619V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V9.76619Z" fill="white"/>
                    </svg>

                    <p className="text-white text-[14px] ">
                    supportLayang@website.com
                    </p>
                </div>

                <div className="flex mt-[36px] gap-[12px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.47517 3.72657C4.54793 2.2247 6.74784 2.13444 7.94003 3.54339L9.84666 5.79669C10.3997 6.45028 10.4754 7.3834 10.0349 8.11756L8.56609 10.5655C8.68383 10.7582 8.84338 10.9882 9.04748 11.2504C9.41145 11.7181 9.87652 12.2372 10.3952 12.7559C11.2686 13.6293 12.2464 14.454 13.0881 15.0113L15.4884 13.5711C16.2226 13.1306 17.1557 13.2063 17.8093 13.7593L20.1713 15.7579C21.5251 16.9034 21.4384 19.0172 19.9953 20.048C17.7699 21.6375 14.779 22.0156 12.3285 20.52C10.6392 19.489 8.56919 18.0334 6.7173 16.1815C5.00043 14.4647 3.7486 12.6849 2.8755 11.2044C1.43721 8.76557 1.94262 5.87214 3.47517 3.72657ZM6.41326 4.83527C6.0633 4.42169 5.41753 4.44818 5.10263 4.88904C3.91121 6.55703 3.65587 8.59052 4.59823 10.1885C5.4046 11.5558 6.55758 13.1934 8.13152 14.7673C9.83586 16.4717 11.7655 17.8333 13.3704 18.8128C15.0242 19.8221 17.1456 19.6257 18.8328 18.4205C19.2149 18.1476 19.2378 17.588 18.8794 17.2847L16.5174 15.2861L13.5958 17.039C13.2864 17.2246 12.9011 17.2292 12.5875 17.0511C11.4392 16.3991 10.097 15.2861 8.98094 14.1701C8.41748 13.6066 7.89457 13.0254 7.46916 12.4788C7.0556 11.9474 6.68959 11.3926 6.49279 10.8881C6.3803 10.5998 6.40767 10.2756 6.56692 10.0102L8.31989 7.08857L6.41326 4.83527Z" fill="white"/>
                </svg>

                <p className="text-white text-[14px] ">
                (480) 555-0103
                </p>
                </div>
            
        </div>

        <div className="pl-[120px] pt-[96px]">
            <div className="w-[648px]">
                <h1 className='text-[#27005D] text-[24px] font-bold mb-[40px]'>Kirim Pesan</h1>
                <div className="flex gap-[24px] mb-[24px]">
                    <div className="">
                        <label className='text-[#27005D] text-[14px] font-bold pb-[10px]' >Nama</label>
                        <input className='border border-1 border-gray-300 flex rounded-[8px] w-[312px] h-[52px] bg-white px-4' placeholder='nama anda...'/>
                    </div>
                    <div className="">
                        <label className='text-[#27005D] text-[14px] font-bold pb-[10px]'>Email</label>
                        <input className='border border-1 border-gray-300 flex rounded-[8px] w-[312px] h-[52px] bg-white px-4'  placeholder='email anda...'/>
                    </div>
                </div>

                <div className="flex gap-[24px] mb-[24px]">
                    <div className="">
                        <label className='text-[#27005D] text-[14px] font-bold pb-[10px]' >Nomor Handphone</label>
                        <input className='border border-1 border-gray-300 flex rounded-[8px] w-[312px] h-[52px] bg-white px-4' placeholder='+62 888 8888 8888' />
                    </div>
                    <div className="">
                        <label className='text-[#27005D] text-[14px] font-bold pb-[10px]'>Subjek</label>
                        <input className='border border-1 border-gray-300 flex rounded-[8px] w-[312px] h-[52px] bg-white px-4' placeholder='pengunjung' />
                    </div>
                </div>

                <div className="mb-[48px]">
                    <label className='text-[#27005D] text-[14px] font-bold pb-[10px]'>Pesan</label>
                    <textarea className='border border-1 border-gray-300 flex rounded-[8px] w-[648px] h-[153px] bg-white p-3 px-4' placeholder='ketik disini...' />
                </div>
                <div className="flex justify-end w-[648px] ">
                <button className='w-[122px] h-[52px] py-[14px] px-[32px] bg-[#27005D] text-white rounded-[8px] font-semibold '>
                    Submit
                </button>
                </div>
            </div>
        </div>
    </div>

  )
}