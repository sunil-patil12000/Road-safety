import axios from "axios";
import Nav from "./compontions/Nav";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";



const Login = () => {
  const r = useRouter();

  const [uname, setUname] = useState();
  const [password, setPassword] = useState();


  // const [data, setData] = useState();




  const url = process.env.BACK || 'http://localhost:4545';


  const logindata = () => {
    axios.post(url + '/login', {
      email: uname,
      pass: password,
    }).then((res) => {

      console.log(res.data._id);

      if (!res.data._id) {


      }
      else {
        Cookies.set('user', res.data._id);
        r.push("/")

      }


    }).catch((e) => {
      console.error("error", e);
    })

















  }



  return (
    <>
      <Nav />
      <div className="mc ">
        <div className="logc  w-full h-full ">
          <div className="cdiv container">
            <section class="">
              <div class="container h-full px-6 py-24">
                <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                  <div class="logimg mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                    <img src="/lg-img.jpg" class="w-full" alt="Phone image" />
                  </div>

                  <div class="md:w-8/12 lg:ml-6 lg:w-5/12">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <div class="relative mb-6" data-te-input-wrapper-init>
                        <input
                          type="text"
                          class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput3"
                          onChange={(e) => { setUname(e.target.value) }}
                          placeholder="Email address"



                        />
                        <label
                          htmlFor="exampleFormControlInput3"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                        >
                          Email address
                        </label>
                      </div>

                      <div class="relative mb-6" data-te-input-wrapper-init>
                        <input
                          type="password"
                          class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput33"
                          placeholder="Password"

                          onChange={(e) => { setPassword(e.target.value) }}
                        />
                        <label
                          htmlFor="exampleFormControlInput33"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                        >
                          Password
                        </label>
                      </div>

                      <div class="mb-6 flex items-center justify-between">
                        <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"></div>

                        <a
                          href="#!"
                          class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                        >
                          Forgot password?
                        </a>
                      </div>

                      <button
                        type="submit"
                        class="inline-block w-full rounded bg-blue-500 hover:bg-blue-900 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                        data-te-ripple-init
                        data-te-ripple-color="light"

                        onClick={logindata}
                      >
                        Sign in
                      </button>


                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
