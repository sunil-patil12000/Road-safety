import { Toaster, toast } from "react-hot-toast";
import Nav from "./compontions/Nav";
import axios from "axios";
import { useEffect, useState } from "react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";








const register = () => {
  const router = useRouter()

  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [paddress, setPaddress] = useState();
  const [dob, setDob] = useState(new Date());
  const [bg, setBg] = useState();
  const [gn, setGn] = useState();
  const [gp, setGp] = useState();
  const [pass, setPass] = useState();
  const [cpass, setCpass] = useState();





  const handlesubmit = (e) => {

    e.preventDefault()


    if (pass === cpass && pass !== null) {





      axios.post("http://localhost:4545/register", {
        fname: fname,
        lname: lname,
        c_address: address,
        p_address: paddress,
        dob: dob,
        p_number: phone,
        bloodgroup: bg,
        garden_name: gn,
        g_number: gp,
        email: email,
        password: pass

      }).then((res) => {
        console.log(res)
        toast.success('Successfully Register')
        router.push('/')

        



      }).catch((e) => console.log(e))





    }
    else {
      alert('plz fill all fide & Check Password')
    }





  }







  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <Nav />
      <div className=" mg bg-slate-500 w-full">
        <div className="bg2 grid">
          <div className="imgh grid-cols-6">
            <img src="/register.jpg" alt="" />
          </div>
          <div className="inputgh grid-cols-6">
            <form>

              <div className="inputy">
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <label className="font-semibold text-lg" htmlFor="first name">First Name :</label>
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput3"
                    placeholder="Name"
                    onChange={(e) => setFname(e.target.value)}
                  />

                </div>

                <div class="relative ml-3 mb-6" data-te-input-wrapper-init>
                  <label className="font-semibold text-lg" htmlFor="Last name">Last Name :</label>

                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput33"
                    onChange={(e) => setLname(e.target.value)}

                  />

                </div>
              </div>
              <div className="inputy">
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <label className="font-semibold text-lg" htmlFor="first name">Email :</label>

                  <input
                    type="email"
                    class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput3"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                </div>

                <div class="relative ml-3 mb-6" data-te-input-wrapper-init>
                  <label className="font-semibold text-lg" htmlFor="first name">Phone :</label>

                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput33"
                    placeholder="Last Name"
                    onChange={(e) => setPhone(e.target.value)}
                  />

                </div>
              </div>

              <div className="inputy">
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <label className="font-semibold text-lg" htmlFor="first name">Current Address  :</label>

                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput3"
                    placeholder="Name"
                    onChange={(e) => setAddress(e.target.value)}
                  />


                </div>

                <div class="relative ml-3 mb-6" data-te-input-wrapper-init>
                  <label className="font-semibold text-lg" htmlFor="first name">permanent Address  :</label>

                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput33"
                    placeholder="Last Name"
                    onChange={(e) => setPaddress(e.target.value)}
                  />

                </div>
              </div>

              <div className="inputy">
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <label className="font-semibold text-lg" htmlFor="first name">DOB:</label>
                  <input
                    type="date"
                    class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput3"
                    placeholder="Name"
                    style={{ width: '13rem' }}
                    onChange={(e) => setDob(e.target.value)}
                  />

                </div>

                <div class="relative ml-3 mb-6" data-te-input-wrapper-init>
                  <label className="font-semibold text-lg" htmlFor="first name">Blood Group  :</label>

                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput33"
                    placeholder="Last Name"
                    onChange={(e) => setBg(e.target.value)}
                  />

                </div>
              </div>

              <div className="inputy">
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <label className="font-semibold text-lg" htmlFor="first name">Guardian Name :</label>

                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput3"
                    placeholder="Name"
                    onChange={(e) => setGn(e.target.value)}
                  />


                </div>

                <div class="relative ml-3 mb-6" data-te-input-wrapper-init>
                  <label className="font-semibold text-lg" htmlFor="first name">Guardian Phone  :</label>

                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput33"
                    placeholder="Last Name"
                    onChange={(e) => setGp(e.target.value)}
                  />

                </div>
              </div>

              <div className="inputy">
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <label className="font-semibold text-lg" htmlFor="first name">Password :</label>

                  <input
                    type="password"
                    class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput3"
                    placeholder="Name"
                    onChange={(e) => setPass(e.target.value)}
                  />


                </div>

                <div class="relative ml-3 mb-6" data-te-input-wrapper-init>
                  <label className="font-semibold text-lg" htmlFor="first name">Conform Password:</label>

                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput33"
                    placeholder="Last Name"
                    onChange={(e) => setCpass(e.target.value)}
                  />

                </div>
              </div>




              <button
                type="submit"
                class="inline-block w-full rounded bg-blue-500 hover:bg-blue-900 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={(e) => {


                  handlesubmit(e);
                }}
              >
                Register

              </button>

              <div class="mb-6 flex items-center justify-between">
                <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"></div>

                {/* <a
                  href="/login"
                  class="text-primary mt-4 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >
                  Already Register Log in
                </a> */}
              </div>






            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default register;
