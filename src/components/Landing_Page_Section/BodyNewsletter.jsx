export default function BodyNewsletter() {
  return (
    <>
        <div className="flex justify-center">
      <div className="container py-[20px] font-Poppins bg-[#27005D] rounded-t-[30px] mb-[-50px] flex justify-center">
          <div className="w-[1128px]">
            <div className="w-[575px] mb-[-120px] my-[100px] ">
              <h1 className="text-[32px] font-bold text-white">Hubungi kami untuk info lebih lanjut</h1>
              <p className="text-white opacity-50">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit.</p>
            </div>
            <div className="relative flex justify-end ">
              <div className="form">
                <div className="border-1 flex rounded-[10px] w-[458px] h-[52px] bg-white gap-[156px] py-[6px] px-[16px] mb-[12px]">
                  <h1 className="mt-[8px] text-[14px] opacity-40">Masukkan Email Anda</h1>
                </div>
                <div className="border-1 flex rounded-[10px] w-[458px] h-[52px] bg-white gap-[156px] py-[6px] px-[16px]">
                  <input className="w-[458px] text-[14px]" placeholder="Masukkan Pesan" type="text" />
                </div>
                <div className="flex justify-end mt-[10px] cursor-pointer">
                  <div className="border-1 w-[100px] h-[60px] rounded-[8px] bg-white">
                    <h1 className="text-center text-[16px] font-medium pt-[18px] text-[#27005D]">Kirim</h1>
                  </div>
                </div>
                <p className="text-[12px] text-white opacity-50 my-[12px]">
                  Kami peduli terhadap perlindungan data anda. Baca
                  <span className="text-white font-bold opacity-100"> kebijakan privasi</span> kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
