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
      try {
        const response = await axios.get(`https://layangapi-cc9d2c2831dc.herokuapp.com/api/articles/${id}`);
        const articleData = response.data.data[0];
        setAuthor(articleData.author);
        setDate(articleData.date);
        setTitle(articleData.title);
        setContent(articleData.content);
        setFile(articleData.image);
        setPreview(articleData.url);
      } catch (error) {
        console.error('Error fetching article data:', error);
      }
    };

    getArticleById();
  }, [id]);

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
      await axios.patch(`https://layangapi-cc9d2c2831dc.herokuapp.com/api/articles/${id}`, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      router.push('/SuperAdmin');
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        handleErrorResponse(status, data);
      }
    }
  };

  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });

  const handleErrorResponse = (status, data) => {
    if (status === 404 && data.msg === 'Data tidak ditemukan') {
      alert(data.msg);
    } else if (status === 422 && data.msg === 'Format image tidak sesuai') {
      alert(data.msg);
    } else if (status === 422 && data.msg === 'Ukuran maksimal image hanya 5 MB') {
      alert(data.msg);
    } else {
      alert(`Error: ${status} - ${data.msg}`);
    }
  };

  return (
    <div className="flex items-center justify-center mt-5">
      <div className="w-3/4 mt-10">
        <form
          onSubmit={updateArticle}
          className="bg-white px-8 pt-6 pb-8 mb-4 rounded-[30px] border-[1px] border-[#D9D9D9] hover:border-transparent hover:shadow-lg transition-all duration-300"
        >
          {/* ... your form fields ... */}
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-[#27005D] rounded-[10px] py-[10px] px-[42px] text-white font-Poppins text-[16px] font-semibold hover:bg-[#0F0024]"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditArticle;
