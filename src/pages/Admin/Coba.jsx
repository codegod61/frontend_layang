import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';

const EditService = () => {
  const router = useRouter();
  const [nama, setNama] = useState('');
  const [nik, setNik] = useState('');
  const [ttl, setTtl] = useState('');
  const [agama, setAgama] = useState('');
  const [status, setStatus] = useState('');
  const [alamat, setAlamat] = useState('');
  const [jenis, setJenis] = useState('');
  const [proses, setProses] = useState('');
  const [fileKtp, setFileKtp] = useState(null);
  const [fileKk, setFileKk] = useState(null);
  const [previewKtp, setPreviewKtp] = useState('');
  const [previewKk, setPreviewKk] = useState('');
  const id = router.query.service_id;

  useEffect(() => {
    if (id) {
      getServiceById();
    }
  }, [id]);

  const getServiceById = async () => {
    const response = await axios.get(`https://backendlayang.azurewebsites.net/services/${id}`);
    setNama(response.data.nama);
    setNik(response.data.nik);
    setTtl(response.data.ttl);
    setAgama(response.data.agama);
    setStatus(response.data.status);
    setAlamat(response.data.alamat);
    setJenis(response.data.jenis);
    setProses(response.data.proses);
    setFileKtp(response.data.ktp);
    setFileKk(response.data.kk);
    setPreviewKtp(response.data.urlKtp);
    setPreviewKk(response.data.urlKk);
  };

  const loadKtp = (e) => {
    const ktp = e.target.files[0];
    if (ktp) {
      setFileKtp(ktp);
      setPreviewKtp(URL.createObjectURL(ktp));
    }
  };

  const loadKk = (e) => {
    const kk = e.target.files[0];
    if (kk) {
      setFileKk(kk);
      setPreviewKk(URL.createObjectURL(kk));
    }
  };

  const updateService = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('fileKtp', fileKtp);
    formData.append('fileKk', fileKk);
    formData.append('nama', nama);
    formData.append('nik', nik);
    formData.append('ttl', ttl);
    formData.append('alamat', alamat);
    formData.append('jenis', jenis);
    formData.append('proses', proses);

    try {
      await axios.patch(`https://backendlayang.azurewebsites.net/services/${id}`, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      router.push('/Admin');
    } catch (error) {
      if (error.response) {
      }
    }
  };

  return (
    <div className="flex items-center justify-center mt-5">
      <div className="w-3/4 mt-10">
        <form onSubmit={updateService} className="bg-white  px-8 pt-6 pb-8 mb-4 rounded-[30px] border-[1px] border-[#D9D9D9] hover:border-transparent hover:shadow-lg transition-all duration-300">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Nama:</label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Nama"
              className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">NIK:</label>
            <input
              type="text"
              value={nik}
              onChange={(e) => setNik(e.target.value)}
              placeholder="Nik"
              className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Tempat Tanggal Lahir:</label>
            <input
              type="text"
              value={ttl}
              onChange={(e) => setTtl(e.target.value)}
              placeholder="ttl"
              className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Agama:</label>
            <input
              type="text"
              value={agama}
              onChange={(e) => setAgama(e.target.value)}
              placeholder="agama"
              className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Status:</label>
            <input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="status"
              className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Alamat:</label>
            <textarea
              type="text"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              placeholder="Alamat"
              className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Jenis:</label>
            <input
              type="text"
              value={jenis}
              onChange={(e) => setJenis(e.target.value)}
              placeholder="ttl"
              className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Proses:</label>
            <input
              type="text"
              value={proses}
              onChange={(e) => setProses(e.target.value)}
              placeholder="proses"
              className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Image:</label>
            <input type="file" onChange={loadKtp} className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          {previewKtp && (
            <div className="mb-4">
              <Image src={previewKtp} alt="Preview Image" className="w-32 h-32 object-cover" />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Image:</label>
            <input type="file" onChange={loadKk} className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          {previewKk && (
            <div className="mb-4">
              <Image src={previewKk} alt="Preview Image" className="w-32 h-32 object-cover" />
            </div>
          )}

          <div className="flex items-center justify-end">
            <button type="submit" className="bg-[#27005D] rounded-[10px] py-[10px] px-[42px] text-white font-Poppins text-[16px] font-semibold hover:bg-[#0F0024]">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditService;
