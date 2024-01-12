import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faTools, faFileAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import Article from './Article';
import Kelurahan from './Kelurahan';
import Admin from './Admin';
import Link from 'next/link';
import Image from 'next/image';

const Index = () => {
  const [activeTab, setActiveTab] = useState('article');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'article':
        return <Article />;
      case 'admin':
        return <Admin />;
      case 'kelurahan':
        return <Kelurahan />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="fixed w-screen h-screen flex">
        <ul className="absolute top-0 left-0 z-10">
          <div className="bg-[#27005D] w-64 pb-4 rounded-r-3xl border-r-4 border-white h-screen">
            <div className="mb-1">
              <Image className="w-52 h-52 mx-auto" src="/img/adminlogo.png" alt="logoAdmin" width={196} height={199} />
            </div>

            <nav className="mb-8 pb-8 font-Poppins md:pt-16 lg:pt-16">
              <ul className=" py-4 pl-16 ml-auto">
                <li className={activeTab === 'article' ? 'mb-1 bg-white hover:bg-gray-300 cursor-pointer rounded-tl-xl py-2' : 'mb-1 bg-white hover:bg-gray-300 cursor-pointer py-2 rounded-tl-xl'} onClick={() => handleTabChange('article')}>
                  <a className="text-black text-xl pl-5 ">
                    <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
                    Article
                  </a>
                </li>
                <li className={activeTab === 'admin' ? 'mb-1 bg-white hover:bg-gray-300 cursor-pointer py-2 ' : 'mb-1 bg-white hover:bg-gray-300 cursor-pointer py-2'} onClick={() => handleTabChange('admin')}>
                  <a className="text-black text-xl pl-5 ">
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    Admin
                  </a>
                </li>

                <li className={activeTab === 'kelurahan' ? 'mb-1 bg-white hover:bg-gray-300 cursor-pointer py-2 rounded-bl-xl' : 'mb-1 bg-white hover:bg-gray-300 cursor-pointer py-2 rounded-bl-xl'} onClick={() => handleTabChange('kelurahan')}>
                  <a className="text-black text-xl pl-5 ">
                    <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                    Kelurahan
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex justify-center pt-1">
              <Link href="/" className="text-[#27005D] hover:text-gray-400 bg-white py-2 px-14 rounded-xl font-Poppins">
                Logout
              </Link>
            </div>
          </div>
        </ul>

        <div className="flex flex-col flex-grow">
          <div className="bg-[#27005D] p-4 flex justify-between items-center rounded-br-3xl">
            <div className="text-white">
              <span className="font-semibold text-2xl pl-64 font-Poppins">Dashboard Super Admin</span>
            </div>
            <div className="pr-10">
              {/* <Image src={} alt="" className="w-12 h-12 rounded-full bg-slate-300" /> */}
            </div>
          </div>

          <div className="ml-[265px] pl-1 pr-4 pt-4 pb-3 z-0 overflow-y-auto max-h-screen">{renderContent()}</div>
        </div>
      </div>
    </>
  );
};

export default Index;
