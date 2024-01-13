import { FaTrash, FaEdit } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Service = () => {
  const router = useRouter('');
  const [activeTab, setActiveTab] = useState('All');
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [editId, setEditId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [service, setService] = useState([]);
  const [serviceById, setServiceById] = useState([]);
  const [proses, setProses] = useState('Terkirim');
  const id = router.query.id;

  const filteredTableData = activeTab === 'All' ? service : service.filter((item) => item.proses === activeTab);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const getServices = async () => {
      const response = await axios.get(`https://layangapi-cc9d2c2831dc.herokuapp.com/api/pengajuan/user/${id}`);
      setService(response.data.data);
    };

    if (id) {
      getServices();
    }
  }, [id]);

  useEffect(() => {
    const getServicesById = async () => {
      const response = await axios.get(`https://layangapi-cc9d2c2831dc.herokuapp.com/api/pengajuan/${editId}`);
      setServiceById(response.data.data);
    };

    if (editId) {
      getServicesById();
    }
  }, [editId]);

  const handleRouter = () => {
    router.push(`/Admin/${id}`);
  };


  const deleteUsers = async (id) => {
    try {
      await axios.delete(`https://layangapi-cc9d2c2831dc.herokuapp.com/api/pengajuan/delete/${id}`);
      setShowModal(false);
      handleRouter();
      getServices();
    } catch (error) {}
  };

  const updateProses = async (id) => {
    const formData = new FormData();
    formData.append('proses', proses);

    try {
      await axios.patch(`https://layangapi-cc9d2c2831dc.herokuapp.com/api/pengajuan/update/${id}`, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      setShowModalEdit(false);
      handleRouter();
      getServices();
      console.log(id)
    } catch (error) {}
  };

  const ConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
    return (
      <div className={`fixed inset-0 z-10 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex items-center justify-center h-screen bg-black bg-opacity-5">
          <div className="bg-white p-4 rounded shadow-md">
            <p>Apakah Anda yakin ingin menghapus pengajuan ini?</p>
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

  const ConfirmationModalEdit = ({ isOpen, onCancel, onConfirm }) => {
    return (
      <div className={`fixed inset-0 z-10 ${isOpen ? 'block' : 'hidden'} rounded-xl`}>
        <div className="flex items-center justify-center h-screen bg-black bg-opacity-5 ">
          <div className="bg-white p-4 shadow-md rounded-xl">
            <table className="w-full mt-4">
              <thead>
                <tr className="bg-[#27005D] text-white">
                  <th className="py-2 px-4">ID</th>
                  <th className="py-2 px-4">Nama</th>
                  <th className="py-2 px-4">NIK</th>
                  <th className="py-2 px-4">Agama</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Jenis</th>
                  <th className="py-2 px-4">Tanggal</th>
                  <th className="py-2 px-4">Process</th>
                </tr>
              </thead>
              <tbody>
                {serviceById.map((item) => (
                  <tr key={item.id}>
                    <td className="py-2 px-4">{item.pengajuan_id}</td>
                    <td className="py-2 px-4">{item.username}</td>
                    <td className="py-2 px-4">{item.no_nik}</td>
                    <td className="py-2 px-4">{item.agama}</td>
                    <td className="py-2 px-4">{item.status}</td>
                    <td className="py-2 px-4">{item.jenis_surat}</td>
                    <td className="py-2 px-4">{item.formatted_tanggal}</td>
                    <td className="py-2 px-4">
                      <select
                        value={proses}
                        onChange={(e) => {
                          setProses(e.target.value);
                        }}
                      >
                        <option value="Terkirim">Terkirim</option>
                        <option value="Diproses">Diproses</option>
                        <option value="Sudah Diproses">Sudah Diproses</option>
                        <option value="Selesai">Selesai</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='flex justify-end pt-4'>
            <button className="mr-2 px-4 py-2 bg-[#27005D] text-white rounded" onClick={onConfirm}>
                Simpan
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
    <div className="p-2 rounded-2xl bg-[#F1F1FF]">
      <ul className="flex mb-4 mt-5 mx-[29px]">
        <li className={`ml-4 mr-6 cursor-pointer ${activeTab === 'All' ? 'text-[#27005D] border-b-2 border-black' : ''}`} onClick={() => handleTabChange('All')}>
          All
        </li>
        <li className={`mr-6 cursor-pointer ${activeTab === 'Terkirim' ? 'text-[#27005D] border-b-2 border-black' : ''}`} onClick={() => handleTabChange('Terkirim')}>
          Terkirim
        </li>
        <li className={`mr-6 cursor-pointer ${activeTab === 'Diproses' ? 'text-[#27005D] border-b-2 border-black' : ''}`} onClick={() => handleTabChange('Diproses')}>
          Diproses
        </li>
        <li className={`mr-6 cursor-pointer ${activeTab === 'Sudah Diproses' ? 'text-[#27005D] border-b-2 border-black' : ''}`} onClick={() => handleTabChange('Sudah Diproses')}>
          Sudah Diproses
        </li>

        <li className={`mr-6 cursor-pointer ${activeTab === 'Selesai' ? 'text-[#27005D] border-b-2 border-black' : ''}`} onClick={() => handleTabChange('Selesai')}>
          Selesai
        </li>
      </ul>
      <div className="px-2 bg-[#FFFFFF] rounded-2xl mx-[29px]">
        <table className="w-full border-collapse text-[14px]">
          <thead>
            <tr className="text-left">
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '3%' }}>
                id
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '20%' }}>
                Nama
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '18%' }}>
                NIK
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '8%' }}>
                Agama
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '12%' }}>
                Status
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '18%' }}>
                Jenis
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '16%' }}>
                Tanggal
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '12%' }}>
                Proses
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '2%' }}></th>
            </tr>
          </thead>
          <tbody>
            {filteredTableData.map((item) => (
              <tr key={item.pengajuan_id} className="" value={item.pengajuan_id}>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.pengajuan_id}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.username.length > 30 ? `${item.username.slice(0, 20)}...` : item.username}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.no_nik.length > 30 ? `${item.no_nik.slice(0, 20)}...` : item.no_nik}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.agama.length > 30 ? `${item.agama.slice(0, 20)}...` : item.agama}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.status.length > 30 ? `${item.status.slice(0, 20)}...` : item.status}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.jenis_surat.length > 30 ? `${item.jenis_surat.slice(0, 20)}...` : item.jenis_surat}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.formatted_tanggal.length > 30 ? `${item.formatted_tanggal.slice(0, 50)}...` : item.formatted_tanggal}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.proses.length > 30 ? `${item.proses.slice(0, 30)}...` : item.proses}
                </td>
                <td className="py-2" style={{ verticalAlign: 'top' }}>
                  <div className="flex gap-4 justify-end px-5">
                    {activeTab === 'All' && <></>}
                    {activeTab === 'Terkirim' && (
                      <FaEdit
                        className="text-[#D9D9D9] text-xl cursor-pointer hover:text-[#919191]"
                        onClick={() => {
                          setEditId(item.pengajuan_id);
                          setShowModalEdit(true);
                        }}
                      />
                    )}

                    {activeTab === 'Diproses' && (
                      <FaEdit
                        className="text-[#D9D9D9] text-xl cursor-pointer hover:text-[#919191]"
                        onClick={() => {
                          setEditId(item.pengajuan_id);
                          setShowModalEdit(true);
                        }}
                      />
                    )}
                    {activeTab === 'Sudah Diproses' && (
                      <FaEdit
                        className="text-[#D9D9D9] text-xl cursor-pointer hover:text-[#919191]"
                        onClick={() => {
                          setEditId(item.pengajuan_id);
                          setShowModalEdit(true);
                        }}
                      />
                    )}

                    {activeTab === 'Selesai' && (
                      <FaTrash
                        className="text-[#D9D9D9] text-lg cursor-pointer hover:text-[#919191]"
                        onClick={() => {
                          setDeleteItemId(item.pengajuan_id);
                          setShowModal(true);
                        }}
                      />
                    )}
                  </div>
                  <ConfirmationModal isOpen={showModal} onCancel={() => setShowModal(false)} onConfirm={() => deleteUsers(deleteItemId)} />

                  <ConfirmationModalEdit isOpen={showModalEdit} onCancel={() => setShowModalEdit(false)} onConfirm={() => updateProses(editId)} editId={editId} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Service;