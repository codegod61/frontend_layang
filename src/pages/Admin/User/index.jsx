import { FaTrash, FaEdit } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

const User = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState([]);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const id = router.query.id

  const deleteUsers = async (id) => {
    try {
      await axios.delete(`https://backendlayang.azurewebsites.net/api/users/${id}`);
      setShowModal(false);
      
      router.push(`/Admin/${id}`)
      getUsers();
    } catch (error) {
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(`https://backendlayang.azurewebsites.net/api/users/kel_id/${id}`);
        if (Array.isArray(response.data.data)) {
          setUser(response.data.data);
        } else {
          console.error('Data yang diterima bukan array:', response.data.data);
        }
      } catch (error) {
        console.error('Error saat mengambil data user:', error);
      }
    };

    getUsers();
  }, []);

  const ConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
    return (
      <div className={`fixed inset-0 z-10 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex items-center justify-center h-screen bg-black bg-opacity-25">
          <div className="bg-white p-4 rounded shadow-md">
            <p>Apakah Anda yakin ingin menghapus user ini?</p>
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
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '12%' }}>
                Username
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '12%' }}>
                Nomor
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '12%' }}>
                Email
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '12%' }}>
                Password
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '24%' }}>
                Alamat
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '12%' }}>
                Kota
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '10%' }}></th>
            </tr>
          </thead>
          <tbody>
            {user.map((item) => (
              <tr key={item.user_id} className="" value={item.user_id}>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.user_id}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.kelurahan_id}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.username.length > 30 ? `${item.username.slice(0, 20)}...` : item.username}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.nomor.length > 30 ? `${item.nomor.slice(0, 20)}...` : item.nomor}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.email.length > 30 ? `${item.email.slice(0, 20)}...` : item.email}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.password.length > 30 ? `${item.password.slice(0, 20)}...` : item.password}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.alamat.length > 30 ? `${item.alamat.slice(0, 50)}...` : item.alamat}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.kota.length > 30 ? `${item.kota.slice(0, 30)}...` : item.kota}
                </td>
                <td className="py-2" style={{ verticalAlign: 'top' }}>
                  <div className="flex gap-4 justify-end px-5">
                    <FaTrash
                      className="text-[#D9D9D9] text-xl cursor-pointer hover:text-[#919191]"
                      onClick={() => {
                        setDeleteItemId(item.user_id);
                        setShowModal(true);
                      }}
                    />
                  </div>
                  <ConfirmationModal isOpen={showModal} onCancel={() => setShowModal(false)} onConfirm={() => deleteUsers(deleteItemId)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;