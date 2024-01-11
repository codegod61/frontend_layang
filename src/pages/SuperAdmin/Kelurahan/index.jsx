import { FaTrash} from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Admin = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [admin, setAdmin] = useState([]);
  const [deleteItemId, setDeleteItemId] = useState(null);

  const deleteArticles = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/daerah/kelurahan/delete/${id}`);
      setShowModal(false);
      getAdmins();
      router.push("/SuperAdmin")
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdmins();
  }, []);

  const getAdmins = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/daerah/kelurahan/all');
      if (Array.isArray(response.data)) {
        setAdmin(response.data);
      } else {
        console.error('Data yang diterima bukan array:', response.data);
      }
    } catch (error) {
      console.error('Error saat mengambil data admin:', error);
    }
  };

  const ConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
    return (
      <div className={`fixed inset-0 z-10 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex items-center justify-center h-screen bg-black bg-opacity-25">
          <div className="bg-white p-4 rounded shadow-md">
            <p>Apakah Anda yakin ingin menghapus kelurahan ini?</p>
            <div className="flex justify-end mt-4">
                <button className="mr-2 px-4 py-2 bg-red-500 text-white rounded" onClick={onConfirm}>
                  Hapus
                </button>
              <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded" onClick={onCancel}>
                Batal
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-2 py-4 rounded-2xl bg-[#F1F1FF]">
      <div className="px-4 pb-5 pt-2">
        <Link href="/SuperAdmin/Kelurahan/AddKelurahan">
          <button className="w-14 h-14 bg-[#27005D] hover:bg-[#171234] rounded-2xl overflow-hidden flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
        </Link>
      </div>

      <div className="px-2 bg-[#FFFFFF] rounded-2xl mx-4">
        <table className="w-full border-collapse text-[14px]">
          <thead>
            <tr className="text-left">
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '3%' }}>
                id
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '5%' }}>
                Kab_id
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '20%' }}>
                Kelurahan
              </th>

              <th className="border-b-2 border-black px-2 py-2" style={{ width: '20%' }}></th>
            </tr>
          </thead>
          <tbody>
            {admin.map((item) => (
              <tr key={item.id} className="" value={item.id}>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.id}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.district_id}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.name.length > 30 ? `${item.nik.slice(0, 20)}...` : item.name}
                </td>

                <td className="py-2" style={{ verticalAlign: 'top' }}>
                  <div className="flex gap-4 justify-end px-5">
                    <FaTrash
                      className="text-red-600 text-xl cursor-pointer hover:text-[#919191]"
                      onClick={() => {
                        setDeleteItemId(item.id);
                        setShowModal(true);
                      }}
                    />
                  </div>
                  <ConfirmationModal isOpen={showModal} onCancel={() => setShowModal(false)} onConfirm={() => deleteArticles(deleteItemId)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
