import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const AddAdmin = () => {
  const router = useRouter();

  const [nama, setNama] = useState([]);
  
  const [provinsiList, setProvinsiList] = useState([]);
  const [kabupatenList, setKabupatenList] = useState([]);
  const [kecamatanList, setKecamatanList] = useState([]);

  const [ProvinsiId, setProvinsiId] = useState('');
  const [KabupatenId, setKabupatenId] = useState('');
  const [KecamatanId, setKecamatanId] = useState('');


  const handleProvinsiChange = (e) => {
    setProvinsiId(e.target.value);
    loadKabupaten();
  };

  const handleKabupatenChange = (e) => {
    setKabupatenId(e.target.value);
    loadKecamatan();
  };

  useEffect(() => {
    const loadProvinsi = async () => {
      try {
        const response = await axios.get('https://backendlayang.azurewebsites.net/api/daerah/provinsi/all');
        const provinsiData = response.data.data;
        console.log(ProvinsiId)
        if (provinsiData && Array.isArray(provinsiData)) {
          setProvinsiList(provinsiData);
        } else {
          console.error('Invalid data format for provinsi:', response.data.data);
        }
      } catch (error) {
        console.error('Error loading provinsi:', error);
      }
    };

    loadProvinsi();
  }, []);

  useEffect(() => {
    if (ProvinsiId) {
      loadKabupaten();
    }
  }, [ProvinsiId]);

  useEffect(() => {
    if (KabupatenId) {
      loadKecamatan();
    }
  }, [KabupatenId]);

  const saveKelurahan = async (e) => {
    e.preventDefault();
    const formData = new FormData();
  
    formData.append('name', nama);
    formData.append('district_id', KecamatanId);
  
    try {
    await axios.post(`https://backendlayang.azurewebsites.net/api/daerah/kelurahan/create`, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      router.push('/SuperAdmin');
    } catch (error) {
      console.error('Error updating admin:', error);
    }
  };

  const loadKabupaten = async () => {
    try {
      const response = await axios.get(`https://backendlayang.azurewebsites.net/api/daerah/kabupaten/${ProvinsiId}`);
      const kabupatenData = response.data;
      if (kabupatenData && Array.isArray(kabupatenData)) {
        setKabupatenList(kabupatenData);
        console.log()
      } else {
        console.error('Invalid data format for kabupaten:', response.data);
      }

    } catch (error) {
      console.error('Error loading kabupaten:', error);
    }
  };
  
  const loadKecamatan = async () => {
    try {
      const response = await axios.get(`https://backendlayang.azurewebsites.net/api/daerah/kecamatan/${KabupatenId}`);
      const kecamatanData = response.data;
      if (kecamatanData && Array.isArray(kecamatanData)) {
        setKecamatanList(kecamatanData);
      } else {
        console.error('Invalid data format for kecamatan:', response.data);
      }
    } catch (error) {
      console.error('Error loading kecamatan:', error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center mt-5">
        <div className="w-3/4 mt-10">
          <form onSubmit={saveKelurahan} className="bg-white  px-8 pt-6 pb-8 mb-4 rounded-[30px] border-[1px] border-[#D9D9D9] hover:border-transparent hover:shadow-lg transition-all duration-300">

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Provinsi:</label>
              <select
                value={ProvinsiId}
                onChange={handleProvinsiChange}
                className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Pilih Provinsi</option>
                {provinsiList.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Kabupaten:</label>
              <select
                value={KabupatenId}
                onChange={handleKabupatenChange}
                className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Pilih Kabupaten</option>
                {kabupatenList.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Kecamatan:</label>
              <select
                value={KecamatanId}
                onChange={ (e) => {
                  setKecamatanId(e.target.value);
                  loadKabupaten();
                  
                }}
                className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Pilih Kecamatan</option>
                {kecamatanList.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Kelurahan:</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Admin Name"
                className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex items-center justify-end">
              <button type="submit" className="bg-[#27005D] rounded-[10px] py-[10px] px-[42px] text-white font-Poppins text-[16px] font-semibold hover:bg-[#0F0024]">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddAdmin;