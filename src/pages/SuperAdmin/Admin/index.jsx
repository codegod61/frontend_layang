import { FaTrash, FaEdit } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Admin = () => {
  const [showModal, setShowModal] = useState(false);
  const [admin, setAdmin] = useState([]);
  const [deleteItemId, setDeleteItemId] = useState(null);

  const deleteArticles = async (id) => {
    try {
      await axios.delete(`https://layangapi-cc9d2c2831dc.herokuapp.com/api/admin/${id}`);
      setShowModal(false);
      getAdmins();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdmins();
  }, []);

  const getAdmins = async () => {
    try {
      const response = await axios.get('https://layangapi-cc9d2c2831dc.herokuapp.com/api/admin');
      if (Array.isArray(response.data.data)) {
        setAdmin(response.data.data);
      } else {
        console.error('Data yang diterima bukan array:', response.data.data);
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
            <p>Apakah Anda yakin ingin menghapus artikel ini?</p>
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
        <Link href="/SuperAdmin/Admin/AddAdmin">
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
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '3%' }}>
                kel_id
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '16%' }}>
                Nama
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '14%' }}>
                Pangkat
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '14%' }}>
                Nomor
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '14%' }}>
                Email
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '14%' }}>
                Password
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '22%' }}>
                Alamat
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '10%' }}></th>
            </tr>
          </thead>
          <tbody>
            {admin.map((item) => (
              <tr key={item.id} className="" value={item.id}>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.id}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.kelurahan_id}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.nama.length > 30 ? `${item.nama.slice(0, 20)}...` : item.nama}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.pangkat.length > 30 ? `${item.nik.slice(0, 20)}...` : item.pangkat}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.nomor.length > 30 ? `${item.ttl.slice(0, 20)}...` : item.nomor}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.email.length > 30 ? `${item.agama.slice(0, 20)}...` : item.email}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.password.length > 30 ? `${item.status.slice(0, 20)}...` : item.password}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.alamat.length > 30 ? `${item.alamat.slice(0, 50)}...` : item.alamat}
                </td>
              
                <td className="py-2" style={{ verticalAlign: 'top' }}>
                  <div className="flex gap-4 justify-end px-5">
                    <Link href={`/SuperAdmin/Admin/EditAdmin/${item.id}`}>
                      <FaEdit className="text-black  text-xl cursor-pointer hover:text-[#919191]" />
                    </Link>
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
