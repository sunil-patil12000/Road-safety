import React, { useEffect, useState } from 'react'
import Nav from './compontions/Nav'
import Cookies from 'js-cookie'
import QRCode from "react-qr-code";
import axios from 'axios';

const Service = () => {
  const [user, setUser] = useState();




  const df = Cookies.get('user')

  console.log(df)

  useEffect(() => {
    const data = () => {
      axios.post('http://localhost:4545/getdata', {
        id: df
      }).then((res) => {
        setUser(res.data)
      })
    }

    data()
  }, [df])










  return (
    <>
      <Nav />


      <div className="contera">


        <div className="fg">
          <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              level='L'
              value={user}
              viewBox={`0 0 256 256`}
            />
          </div>
        </div>








      </div>





    </>
  )
}

export default Service