import Image from "next/image";

export default function CardNewArticle () {
    return (
        <>
        <div className="w-[500px] flex flex-col py-[46px] px-[34px] bg-[#F2F2F2] rounded-[30px] gap-[20px] hover:border-transparent hover:shadow-lg transition-all duration-300">
        <h1 className="text-[40px] font-bold text-[#27005D]">Post Terbaru</h1>
        <div className="flex w-[400px] mb-[30px]">
            <Image src='/img/CardArticle.png' width={100} height={100} alt="Article" className="w-[100px] h-[100px] rounded-2xl object-cover"/>
            <div className="ml-[22px]">
            <h1 className="text-[20px] font-bold  mb-[10px]">Banjir di desa menyebab kan salah satu...</h1>
            <div className="flex justify-between">
            <h2 className="text-[18px]">Mei 03, 2023</h2>
            <h2 className="text-[18px]">3 menit lalu</h2>
            </div>
            </div>
        </div>
        <div className="flex w-[400px] mb-[30px]">
            <Image src='/img/NewArticle1.png' width={102} height={101} alt="Article2"/>
            <div className="ml-[22px]">
            <h1 className="text-[20px] font-bold  mb-[10px]">Banjir di desa menyebab kan salah satu...</h1>
            <div className="flex justify-between">
            <h2 className="text-[18px]">Mei 03, 2023</h2>
            <h2 className="text-[18px]">3 menit lalu</h2>
            </div>
            </div>
        </div>
        <div className="flex w-[400px]">
            <Image src='/img/NewArticle3.png' width={100} height={100} alt="Article3"/>
            <div className="ml-[22px]">
            <h1 className="text-[20px] font-bold  mb-[10px]">Banjir di desa menyebab kan salah satu...</h1>
            <div className="flex justify-between">
            <h2 className="text-[18px]">Mei 03, 2023</h2>
            <h2 className="text-[18px]">3 menit lalu</h2>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}