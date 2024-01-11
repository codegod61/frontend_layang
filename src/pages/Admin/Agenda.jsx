import React, { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';

const Help = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const tableData = [
        { id: 1, tanggal: '2023-01-01',  kelurahan: 'Kelurahan A', judul: 'Laporan Keamanan A Laporan Keamanan A ', tempat: 'Gang A', Bukti: 'https://kodam4.mil.id/wp-content/uploads/2018/01/2201201809.jpg' },
        { id: 2, tanggal: '2023-01-02',  kelurahan: 'Kelurahan B', judul: 'Laporan Kegiatan B', tempat: 'Gang B', Bukti: 'https://desatapis.paserkab.go.id/po-content/uploads/jalan_(2).jpg' },
        { id: 3, tanggal: '2023-01-03',  kelurahan: 'Kelurahan C', judul: 'Laporan Lingkungan C', tempat: 'Gang C', Bukti: 'https://www.kba.one/files/images/20220520-7a4f1b00-6f65-4113-97dc-46c4fc8b5c46.jpg' },
        { id: 4, tanggal: '2023-01-04',  kelurahan: 'Kelurahan D', judul: 'Laporan Pelayanan Publik D', tempat: 'Gang D', Bukti: 'https://assets-a1.kompasiana.com/items/album/2021/04/28/pelayanan-publik-6088b783d541df4d0463c393.jpg' },
        { id: 5, tanggal: '2023-01-05', kelurahan: 'Kelurahan E', judul: 'Laporan Keamanan E', tempat: 'Gang E', Bukti: 'https://kodam4.mil.id/wp-content/uploads/2018/01/2201201809.jpg' },
        { id: 6, tanggal: '2023-01-06',  kelurahan: 'Kelurahan F', judul: 'Laporan Kegiatan F', tempat: 'Gang F', Bukti: 'https://desatapis.paserkab.go.id/po-content/uploads/jalan_(2).jpg' },
        { id: 7, tanggal: '2023-01-07',   kelurahan: 'Kelurahan G', judul: 'Laporan Lingkungan G', tempat: 'Gang G', Bukti: 'https://www.kba.one/files/images/20220520-7a4f1b00-6f65-4113-97dc-46c4fc8b5c46.jpg' },
        { id: 8, tanggal: '2023-01-08',   kelurahan: 'Kelurahan H', judul: 'Laporan Pelayanan Publik H', tempat: 'Gang H', Bukti: 'https://assets-a1.kompasiana.com/items/album/2021/04/28/pelayanan-publik-6088b783d541df4d0463c393.jpg' },
        { id: 9, tanggal: '2023-01-09',  kelurahan: 'Kelurahan I', judul: 'Laporan Keamanan I', tempat: 'Gang I', Bukti: 'https://kodam4.mil.id/wp-content/uploads/2018/01/2201201809.jpg' },
        { id: 10, tanggal: '2023-01-10',  kelurahan: 'Kelurahan J', judul: 'Laporan Kegiatan J', tempat: 'Gang J', Bukti: 'https://desatapis.paserkab.go.id/po-content/uploads/jalan_(2).jpg' },
    ];


    const filteredTableData = activeTab === 'All' ? tableData : tableData.filter(item => item.tempat === activeTab);

    return (
        <div className='p-2 rounded-2xl bg-[#F1F1FF]'>
            <ul className="flex mb-4 mt-5 font-Poppins mx-[29px]">
                <li className={`ml-4 mr-6 cursor-pointer ${activeTab === 'All' ? 'text-[#27005D] border-b-2 border-black' : ''}`} onClick={() => handleTabChange('All')}>All</li>
            </ul>
            <div className='px-2 bg-[#FFFFFF] rounded-2xl mx-[29px]'>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className='font-Poppins text-left'>
                            <th className="border-b-4 border-black px-3 py-2">ID</th>
                            <th className="border-b-4 border-black px-3 py-2">tanggal</th>
                            <th className="border-b-4 border-black px-3 py-2">kelurahan</th>
                            <th className="border-b-4 border-black px-3 py-2">judul</th>
                            <th className="border-b-4 border-black px-3 py-2">tempat</th>
                            <th className="border-b-4 border-black px-3 py-2">Bukti</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTableData.map(item => (
                            <tr key={item.id} className='font-Poppins'>
                                <td className="px-3 py-2">{item.id}</td>
                                <td className="px-3 py-2">{item.tanggal}</td>
                                <td className="px-3 py-2">{item.kelurahan.length > 30 ? `${item.kelurahan.slice(0, 60)}...` : item.kelurahan}</td>
                                <td className="px-3 py-2">{item.judul.length > 60 ? `${item.judul.slice(0, 60)}...` : item.judul}</td>
                                <td className="px-3 py-2">{item.tempat}</td>
                                <td className="px-3 py-2 cen">
                            {/* Display image using <img> element */}
                                <Image src={item.Bukti} alt={`Bukti ${item.id}`} style={{ maxWidth: '75%', maxHeight: '75px', cursor: 'pointer' }} onClick={() => openModal(item.Bukti)} />
                                 </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded"
                overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
            >
            
                {selectedImage && <Image src={selectedImage} alt="Modal Content" style={{ maxWidth: '100%', maxHeight: '100%' }} />}
            </Modal>

        </div>
    );
};

export default Help;