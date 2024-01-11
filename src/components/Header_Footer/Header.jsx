import Link from 'next/link';
import Image from "next/image";
export default function Header() {
  return (
    <>
      <div className="flex justify-center ">
        <div className="navbar bg-opacity-0 bg-transparent z-50 w-[1128px] mt-[31px]">
          <div className="header flex items-center justify-between text-black">
            <div className="logo flex items-center font-bold text-2xl cursor-pointer">
              <Image className="mr-[19px]" src="/img/logoBlack.png" alt="logoLayang" width={40} height={40} />
                <h1>LAYANG</h1>
            </div>

            <ul className="flex ">
              <li className="space-x-12 text-black ml-[56px]">
                <Link href="/">Home</Link>
              </li>
              <li className="space-x-12 text-black ml-[56px]">
                <Link href="./Product">Produk Kami</Link>
              </li>
              <li className="space-x-12 text-black ml-[56px]">
                <Link href="./Profile ">Tentang Kami</Link>
              </li>
              <li className="space-x-12 text-black ml-[56px]">
                <Link href="./ArticleNews">Artikel</Link>
              </li>
              <li className="space-x-12 text-black ml-[56px]">
                <Link href="./Contact">Kontak Kami</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
