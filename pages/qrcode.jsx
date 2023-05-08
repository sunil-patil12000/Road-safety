import React, { useState, useEffect } from 'react'
import QRCode from 'qrcode';
import Cookies from 'js-cookie';
import axios from 'axios';

const qrcode = () => {
    const [src, setSrc] = useState();



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
        }

        data()
    }, [gh])




    console.log(data)



    


    const gen = () => {




        QRCode.toDataURL(`name : ${data.fname} \n phone: ${data.p_number} `, function (err, url) {
            setSrc(url)





        })




    }
    return (
        <>

            <div className="qrhi">


                <div className="qrmain">

                    <img src={src} alt={src} />

                    <button onClick={gen}>Download </button>
                </div>
            </div>


        </>
    )
}

export default qrcode