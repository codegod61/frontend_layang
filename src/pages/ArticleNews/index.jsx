import CardArticle from '@/components/Cards/CardArticle';
import CardNewArticle from '@/components/Cards/CardNewArticle';
import Layout from '@/components/Layout';
import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';

export default function NewsList() {

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);

  const [article, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const response = await axios.get("https://layangapi-cc9d2c2831dc.herokuapp.com/api/articles");
    setArticles(response.data.data);
  };


  return (

    <>
    <Layout>
      <div className="relative bg-cover z-0 h-[]" style={{ backgroundImage: `url(img/bg-Newlist.png)` }}>
        <div className=" flex flex-col items-center">

          {/*Title */}

          <div className="mt-10">
            <div>
              <div className="Article font-Poppins gap-[12px] text-center mt-[50px] mb-[100px]">
                <h1 className="text-[#444BD3] text-[16px] font-semibold mt-[20px]" data-aos="fade-up" data-aos-delay='0'>ARTIKEL KAMI</h1>
                <h1 className="text-[#27005D] text-[44px] font-bold" data-aos="fade-up" data-aos-delay='100'>Semua Informasi di Desa Anda</h1>
                <p className="text-[18px] opacity-50" data-aos="fade-up" data-aos-delay='200'>
                  Baca informasi informasi penting di desa anda yang dikelola langsung oleh <br /> warga setempat
                </p>
              </div>
            </div>

            {/* Content */}

            <div className="flex gap-[75px]" data-aos="fade-up" data-aos-delay='300'>
              <div className="flex flex-col gap-[63px]">
                {article.map((value) => (
                  <CardArticle  
                  key={value.article_id}
                  title = {value.title} 
                  author = {value.author} 
                  imgUrl = {value.url} 
                  date = {value.date} 
                  content1 = {value.content} 
                  id = {value.article_id} 
                 />
                ))}
              </div>

              <div data-aos="fade-up" data-aos-delay='200'>
                <CardNewArticle />
              </div>
            </div>

            <div className="flex justify-end mt-[55px] mb-[100px] items-center">
              <h1 className="text-[25px] font-bold">1 / 3</h1>
              <button className="text-white text-[18px] ml-[46px] font-semibold bg-[#27005D] rounded-lg py-2 px-8">Next</button>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
}
