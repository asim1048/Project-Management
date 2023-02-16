import React, {  useState, useContext } from 'react'
import { Link,Navigate } from "react-router-dom";
import { Dialog, Checkbox, Button, DialogActions } from '@mui/material'
import { Close } from '@mui/icons-material';
import {UserProvider} from './../../Context'

const dialogStyle = {
  height: '52%',
  marginTop: '8%',
  width: '30%',
  maxWidth: '100%',
  marginLeft: '600px',
  maxHeight: '100%',
  boxShadow: 'none',
  background: 'white',
  borderRadius: "20px"
}
export default function Login() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [checked, setChecked] = React.useState(false);
  const[open,setOpen]=useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "87%",
        minHeight: '100vh',
        opacity: '1',
        backgroundImage: "url(" + "https://i.pinimg.com/originals/95/47/1b/95471b227550b665b4933002299d3b9e.gif" + ")",
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
        }}><Close onClick={()=>{setOpen(false)}} /></div>
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
            placeholder='Enter email'
            type={"email"}
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
          <div style={{
            display: 'flex',
            width: "210px",
            backgroundColor: "##FFFFF7 ",
            marginBlockStart: '-0.7rem'
          }}>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <p style={{ fontSize: '20px' }}>Remember me</p>

          </div>
          <Button variant="contained" style={{
            borderRadius: "10px",
            height: "50px",
            width: "150px",
            fontSize: "20px",
          }}
            onClick={() => { console.log("clicked"); }}
          >Login</Button>
          <div
            style={{
              display: 'flex',
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <p style={{ fontSize: '15px' }}>Don't have an account?</p>
            <Link to="/signUp" style={{ color: 'black', textDecoration: 'none', fontSize: '15px', marginLeft: '5px', }}>SignUp</Link>
          </div>
        </div>
      </Dialog>
      {!open &&  <Navigate to="/" replace={true} />}

    </div>
  )
}
