import CardArticle from '../Cards/CardArticle';
import ButtonArticle from '../Buttons/ButtonArticle';
import ArticleJson from '@/JSON/Article.json';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Article() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);

  const articlesToShow = ArticleJson.slice(0, 2);

  return (
    <>
      <div className="Article font-Poppins gap-[12px] text-center mt-[50px] mb-[100px]">
        <h1 className="text-[#27005D] text-[44px] font-bold" data-aos="fade-up" data-aos-delay="0">
          Semua Informasi di Desa Anda
        </h1>
        <p className="text-[18px] opacity-50" data-aos="fade-up" data-aos-delay="200">
          Baca informasi informasi penting di desa anda yang dikelola langsung oleh <br /> warga setempat
        </p>
      </div>
      <div className="flex gap-[38px] font-Poppins " data-aos="fade-up" data-aos-delay="400">
        {articlesToShow.map((value) => (
          <CardArticle key={value.post_id} title={value.title} author={value.author} imgUrl={value.imgUrl} date={value.date_published} content1={value.content1} id={value.post_id} link={value.link} />
        ))}
        <div className="lainnya ml-[66px] " data-aos="fade-up" data-aos-delay="600">
          <h1 className="text-[44px] font-bold text-[#27005D] mb-[26px]">
            Baca Artikel <br /> Lainnya
          </h1>
          <Link href="./NewsList">
            <ButtonArticle />
          </Link>
        </div>
      </div>
    </>
  );
}
