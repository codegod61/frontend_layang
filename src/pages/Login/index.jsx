import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from 'next/image';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [KelurahanId, setKelurahanId] = useState('')


  useEffect(() => {
    getAdmins();
  }, []);

  const getAdmins = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/daerah/kelurahan/all');
      if (Array.isArray(response.data)) {
        setKelurahanId(response.data.data.id);
      } else {
        console.error('Data yang diterima bukan array:', response.data);
      }
    } catch (error) {
      console.error('Error saat mengambil data admin:', error);
    }
  };


  async function login(e) {
    e.preventDefault();
    await axios
      .post("https://backendlayang.azurewebsites.net/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        localStorage.setItem("token", response.data.accessToken);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    router.push("/Admin/1");
  }

  return (
   
    <div className="flex h-screen">
      <div className="hidden md:flex items-center justify-center w-3/6 pr-20">
        <Image src="/img/bg-login.png" alt="LogoLogin" width={516} height={735} className="h-screen ml-[-30px]" />
      </div>
      <div className="flex items-center justify-center w-3/4 p-4 py-6 bg-white">
        <div className=" w-full space-y-8 px-20">
          <form className=" text-[#27005D] mr-[100px]" onSubmit={console.log(KelurahanId)}>
            <h2 className="text-4xl font-bold">Login Admin</h2>
            
            <div className="pt-10">
              <label htmlFor="email" className="block text-xl font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                onInput={(e) => setEmail(e.target.value)}
                name="email"
                autoComplete="email"
                placeholder="Username"
                required
                className="mt-1 p-5 w-full border rounded-md"
              />
            </div>
            
            <div className="mt-4">
              <label htmlFor="password" className="block text-xl font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                onInput={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Password"
                required
                className="mt-1 p-5 w-full border rounded-md"
              />
            </div>
            
            <div className="flex justify-end mt-20">
              <button
                onClick={(e) => login(e)}
                type="submit"
                className="bg-[#27005D] rounded-[10px] py-[14px] px-[42px] text-white font-Poppins text-[16px] font-semibold hover:bg-[#0F0024]"
              >
                Login
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>

  );
};

export default LoginPage;
