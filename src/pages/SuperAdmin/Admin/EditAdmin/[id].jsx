import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const EditAdmin = () => {
  const router = useRouter();
  const [nama, setNama] = useState('');
  const [pangkat, setPangkat] = useState('');
  const [nomor, setNomor] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alamat, setAlamat] = useState('');

  const [kelurahanList, setKelurahanList] = useState([]);
  const [KelurahanId, setKelurahanId] = useState('');
  const id = router.query.id;

  const getAdminById = async () => {
    try {
      const response = await axios.get(`https://layangapi-cc9d2c2831dc.herokuapp.com/api/admin/${id}`);
      setKelurahanId(response.data.data[0].kelurahan_id);
      setNama(response.data.data[0].nama);
      setPangkat(response.data.data[0].pangkat);
      setNomor(response.data.data[0].nomor);
      setEmail(response.data.data[0].email);
      setPassword(response.data.data[0].password);
      setAlamat(response.data.data[0].alamat);
    } catch (error) {
      console.error('Error getting admin by ID:', error);
    }
  };

  useEffect(() => {
    getAdminById();
  }, []); // Tidak perlu menyertakan getAdminById di sini

  const handleKelurahanChange = (e) => {
    setKelurahanId(e.target.value);
    loadKelurahan();
  };

  const updateAdmin = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('kelurahan_id', KelurahanId);
    formData.append('nama', nama);
    formData.append('pangkat', pangkat);
    formData.append('nomor', nomor);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('alamat', alamat);

    try {
      await axios.patch(`https://layangapi-cc9d2c2831dc.herokuapp.com/api/admin/${id}`, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      router.push('/SuperAdmin');
    } catch (error) {
      console.error('Error updating admin:', error);
    }
  };


  useEffect(() => {
    const loadKelurahan = async () => {
      try {
        const response = await axios.get('https://layangapi-cc9d2c2831dc.herokuapp.com/api/daerah/kelurahan/all');
        const kelurahanData = response.data;
        console.log(KelurahanId)
        if (kelurahanData && Array.isArray(kelurahanData)) {
          setKelurahanList(kelurahanData);
        } else {
          console.error('Invalid data format for kelurahan:', response.data);
        }
      } catch (error) {
        console.error('Error loading kelurahan:', error);
      }
    };
  
    loadKelurahan(); // Panggil fungsi loadKelurahan di dalam useEffect
  }, [KelurahanId]); 

  return (
    <>
      <div className="flex items-center justify-center mt-5">
        <div className="w-3/4 mt-10">
          <form onSubmit={updateAdmin} className="bg-white  px-8 pt-6 pb-8 mb-4 rounded-[30px] border-[1px] border-[#D9D9D9] hover:border-transparent hover:shadow-lg transition-all duration-300">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Nama:</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Admin Name"
                className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Pangkat:</label>
              <input
                type="text"
                value={pangkat}
                placeholder="Admin Name"
                onChange={(e) => setPangkat(e.target.value)}
                className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Nomor:</label>
              <input
                type="text"
                value={nomor}
                onChange={(e) => setNomor(e.target.value)}
                placeholder="Admin Name"
                className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Admin Name"
                className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Admin Name"
                className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Alamat:</label>
              <textarea
                type="text"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                placeholder="Admin Name"
                className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Provinsi:</label>
              <select
                value={KelurahanId}
                onChange={handleKelurahanChange}
                className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Pilih Kelurahan</option>
                {kelurahanList.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            

            <div className="flex items-center justify-end">
              <button type="submit" className="bg-[#27005D] rounded-[10px] py-[10px] px-[42px] text-white font-Poppins text-[16px] font-semibold hover:bg-[#0F0024]">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditAdmin;
