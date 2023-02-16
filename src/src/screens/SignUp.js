import React, { useEffect, useState, useContext } from 'react'
import { Link,Navigate } from "react-router-dom";

import { Close } from '@mui/icons-material';
import { Dialog, Checkbox, Button } from '@mui/material'
import { UserProvider } from './../../Context'

const dialogStyle = {
  height: '55%',
  marginTop: '8%',
  width: '30%',
  maxWidth: '100%',
  marginLeft: '600px',
  maxHeight: '100%',
  boxShadow: 'none',
  overFlow: 'hidden',
  background: 'white',
  borderRadius: "20px",
}
//https://i.pinimg.com/originals/93/c6/aa/93c6aaa4424c468db1c9f7904eb400d8.gif
export default function SignUp() {
  const [email, setEmail] = useState()
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [checked, setChecked] = React.useState(false);
  
  //const {headerHandler}=useContext(UserProvider);

  const[open,setOpen]=useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div
      style={{
        display: "flex",
        minHeight: '100vh',
        width:"87%",
        backgroundColor: '#224957',
        opacity: '1',
        backgroundImage: "url(" + "https://i.pinimg.com/originals/93/c6/aa/93c6aaa4424c468db1c9f7904eb400d8.gif" + ")",
      }}
    >
      
      <Dialog
        open={open}
        PaperProps={{ sx: dialogStyle }}
        hideBackdrop={true}
      >
        <div style={{
          position: 'absolute',
          right: '5px',
          
        }}><Close onClick={()=>setOpen(false)} /></div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              fontSize: '20px',
              fontWeight: 'bold'
            }}
          >
            PROJECT MANAGEMENT
          </p>
          <input
            autoFocus={true}
            placeholder='Enter name'
            type={"text"}
            style={{
              height: "30px",
              width: "200px",
              borderWidth: '2px',
              borderStyle: 'double',
              paddingLeft: '5px',
              paddingRight: '5px',
              fontSize: '15px',
              borderRadius: '10px',
              backgroundColor: "##FFFFF7 ",
              borderColor: "black"
            }}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            autoFocus={true}
            placeholder='Enter email'
            type={"email"}
            style={{
              height: "30px",
              width: "200px",
              borderWidth: '2px',
              borderStyle: 'double',
              paddingLeft: '5px',
              marginTop: "10px",
              paddingRight: '5px',
              fontSize: '15px',
              borderRadius: '10px',
              backgroundColor: "##FFFFF7 ",
              borderColor: "black"
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            autoFocus={true}
            placeholder='Enter password'
            type={"password"}
            style={{
              height: "30px",
              width: "200px",
              marginTop: '10px',
              borderWidth: '2px',
              borderStyle: 'double',
              paddingLeft: '5px',
              paddingRight: '5px',
              fontSize: '15px',
              borderRadius: '10px',
              backgroundColor: "##FFFFF7 ",
              borderColor: "black"
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            autoFocus={true}
            placeholder='Confirm password'
            type={"password"}
            style={{
              height: "30px",
              width: "200px",
              marginTop: '10px',
              borderWidth: '2px',
              borderStyle: 'double',
              paddingLeft: '5px',
              paddingRight: '5px',
              fontSize: '15px',
              borderRadius: '10px',
              backgroundColor: "##FFFFF7 ",
              borderColor: "black"
            }}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button variant="contained" style={{
            borderRadius: "10px",
            height: "50px",
            width: "150px",
            fontSize: "20px",
            marginTop: '10px'
          }}
            onClick={() => { console.log("clicked"); }}
          >SignUp</Button>
          <div
            style={{
              display: 'flex',
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            <p style={{ fontSize: '15px' }}>Already have an account?</p>
            <Link to="/login" style={{ color: 'black', textDecoration: 'none',fontSize:'15px',marginLeft:'5px' ,}}>Login</Link>
          </div>
        </div>
      </Dialog>
      {!open &&  <Navigate to="/" replace={true} />}
    </div>
  )
}
