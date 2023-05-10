import React, { useState, useEffect } from 'react'
import QRCode from 'qrcode';
import Cookies from 'js-cookie';
import axios from 'axios';
import Nav from './compontions/Nav';
import { Router, useRouter } from 'next/router';

const qrcode = () => {
    const [src, setSrc] = useState();

    const r = useRouter()







    const [data, setData] = useState();

    const gh = Cookies.get('user');



    console.log(gh)



    useEffect(() => {
        const data = () => {
            axios.post('http://localhost:4545/getdata', {
                id: gh
            }).then((res) => {
                setData(res.data)
            })



            QRCode.toDataURL(`name : ${data.fname} \nphone: ${data.p_number}\naddress:${data.c_address}\ngardiun:${data.garden_name}\nBlood group:${data.BloodGroup} `, function (err, url) {
                setSrc(url)





            })
        }

        data()
    }, [gh])




    console.log(data)







    return (


        <>
            <Nav />
            <div className="qrhi">


                <div className="qrmain">

                    <img src={src} alt={src} />

                    {/* <button onClick={gen}>Get QRcode</button> */}
                </div>
            </div>


        </>
    )
}

export default qrcode