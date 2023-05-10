"clint "


import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";



const Nav = () => {

  const router = useRouter();



  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {

    return null;
  }


  const hndler = () => {
    Cookies.remove('user')
    router.push('/')

  }




  return (
    <>
      <header class=" nav-m text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">RoadSafety</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" class="mr-5 hover:text-gray-900">Home</a>
            <a class="mr-5 hover:text-gray-900">About Us</a>
            {
              !Cookies.get('user') ? (<></>) : (<> <a href="/qrcode" class="mr-5 hover:text-gray-900">Get QR</a></>)
            }
            {
              <a href="/register" class="mr-5 hover:text-gray-900">Register</a>
            }
          </nav>
          {
            !Cookies.get('user') ? (<><a href="/login" class="mr-5 hover:text-gray-900">Login</a></>) : (<><a style={{ cursor: 'pointer' }} onClick={() => { hndler() }} class="mr-5 hover:text-gray-900">Log out</a></>)


          }
        </div>
      </header >
    </>
  );
};

export default Nav;
