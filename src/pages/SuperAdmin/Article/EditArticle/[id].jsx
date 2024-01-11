import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';

const EditArticle = () => {
  const router = useRouter();
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const id = router.query.id;

  useEffect(() => {
    const getArticleById = async () => {
      const response = await axios.get(`https://backendlayang.azurewebsites.net/api/articles/${id}`);
      setAuthor(response.data.data[0].author);
      setDate(response.data.data[0].date);
      setTitle(response.data.data[0].title);
      setContent(response.data.data[0].content);
      setFile(response.data.data[0].image);
      setPreview(response.data.data[0].url);
    };

    getArticleById();
  }, [getArticleById]);

  const loadImage = (e) => {
    const image = e.target.files[0];
    if (image) {
      setFile(image);
      setPreview(URL.createObjectURL(image));
    }
  };

  const updateArticle = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('file', file);
    formData.append('author', author);
    formData.append('date', formattedDate);
    formData.append('title', title);
    formData.append('content', content);
    try {
      await axios.patch(`https://backendlayang.azurewebsites.net/api/articles/${id}`, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      router.push('/SuperAdmin');
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;

        if (status === 404 && data.msg === 'Data tidak ditemukan') {
          alert(data.msg);
        } else if (status === 422 && data.msg === 'Format image tidak sesuai') {
          alert(data.msg);
        } else if (status === 422 && data.msg === 'Ukuran maksimal image hanya 5 MB') {
          alert(data.msg);
        } else {
          alert(`Error: ${status} - ${data.msg}`);
        }
      }
    }
  };

  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });

  return (
    <div className="flex items-center justify-center mt-5">
      <div className="w-3/4 mt-10">
        <form onSubmit={updateArticle} className="bg-white  px-8 pt-6 pb-8 mb-4 rounded-[30px] border-[1px] border-[#D9D9D9] hover:border-transparent hover:shadow-lg transition-all duration-300">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Author:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Article Name"
              className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Date:</label>
            <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Article Name"
              className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Content:</label>
            <textarea
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Article Name"
              className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Image:</label>
            <input type="file" onChange={loadImage} className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          {preview && (
            <div className="mb-4">
              <Image src={preview} alt="Preview Image" className="w-32 h-32 object-cover" />
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

export default EditArticle;
