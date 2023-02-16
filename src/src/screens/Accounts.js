import React, {useState, useEffect} from 'react'

import { AccountsData } from './../constants/data'
import { Delete,Edit, Description, Payment, Group ,Close, ViewColumn,} from '@mui/icons-material';
import { Dialog, Button } from '@mui/material';
const dialogStyle = {
  display:"flex",
  flexDirection:"column",
  height: "45%",
  marginTop: '6%',
  width: '30%',
  maxWidth: '100%',
  marginLeft: '600px',
  maxHeight: '100%',
  boxShadow: 'none',
  overFlow: 'hidden',
  background: 'white',
  borderRadius: "20px",
  boxShadow: "5px 5px 10px 5px yellow ",
}
export default function Accounts() {
   
  const [isEdit,setIsEdit]=useState(false);
  const [accountEdit,setAccountEdit]=useState([])
  
  const [price,setPrice]=useState(0);
  const [name,setName]=useState("");
 
  useEffect(()=>{
    
  },[AccountsData])

  const SingleAccount = ({ acc }) => {
    return (<div style={{
      display: 'flex',
      flexDirection:'column',
      width:"95%",
      borderWidth: '2px',
      borderColor: 'yellow',
      borderRadius: '10px',
      borderStyle: 'solid',
      marginLeft: '10px',
      marginRight: '10px',
      marginTop: '5px',
      padding: "10px",
      backgroundColor: "black",
    }}
    >
      <Dialog
        open={isEdit}
        PaperProps={{ sx: dialogStyle }}
        hideBackdrop={true}
      >
        <div style={{
          position: 'absolute',
          right: '5px',
          
        }}><Close onClick={()=>setIsEdit(false)} /></div>
        <div style={{
          marginTop:"20px",
          display:'flex',
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
        }}>
        <p style={{color:"black", fontSize: '20px',fontWeight:"600",}}>Name</p>
        <input
          value={name}
          placeholder={`Name`}
          multiple={true}
          autoFocus={true}
          style={{
            marginTop:'-20px',
            height: "100%",
            width: "200px",
            borderWidth: '2px',
            borderStyle: 'double',
            paddingLeft: '5px',
            paddingRight: '5px',
            fontSize: '17px',
            fontWeight:"600",
            borderRadius: '10px',
            backgroundColor: "##FFFFF7 ",
            borderColor: "black"
          }}
          onChange={(e) =>{setName(e.target.value); console.log(e.target.value)} }
        />
          <p style={{color:"black",fontSize: '20px',fontWeight:"600", }}>Balanace</p>
          <input
          value={price}
          placeholder={`Enter Balance`}
          multiple={true}
          autoFocus={true}
          style={{
            marginTop:'-20px',
            height: "100%",
            width: "200px",
            borderWidth: '2px',
            borderStyle: 'double',
            paddingLeft: '5px',
            paddingRight: '5px',
            fontSize: '17px',
            fontWeight:"600",
            borderRadius: '10px',
            backgroundColor: "##FFFFF7 ",
            borderColor: "black"
          }}
          onChange={(e) =>{setPrice(e.target.value); console.log(e.target.value)} }
        />
          <Button variant="contained" style={{
            borderRadius: "10px",
            height: "50px",
            width: "150px",
            fontSize: "20px",
            marginTop: '20px'
          }}
            onClick={() => { 
              AccountsData.map(ac=>{
                if(ac.id===accountEdit.id){
                  ac.Name=name;
                  ac.Balanace=price;
                }
              })
              setIsEdit(false);
            }}
          >Done</Button>
          </div>
      </Dialog>
      {/*Detail */}
      <div style={{display:"flex", width:"100%",}}>
        <div style={{display:"flex",flexDirection:"row", width:"100%", alignItems:"center", justifyContent:"space-between"}}>
         <div style={{display:'flex', flexDirection:"column"}}>
        <p style={{color:"white", fontFamily:"-moz-initial",fontSize:"17px"}}>Name::  {acc.Name}</p>
        <p style={{color:"white",marginTop:"-10px",fontFamily:"-moz-initial",fontSize:"17px"}}>Balanace::  {acc.Balanace}</p>
        </div>
        <div style={{display:'flex', flexDirection:"column"}}>
        <Delete fontSize="medium" style={{ color: 'red' }}  onClick={()=>{
          AccountsData.map(ac=>{
            if(ac.id==acc.id){
              AccountsData.splice(ac,1);
            }
          })
        }}/>
        <Edit fontSize="medium" style={{ color: 'gray' }} onClick={()=>{setName(acc.Name);setPrice(acc.Balanace); setAccountEdit(acc);setIsEdit(true)}} />
        </div>
        </div>
      </div>
    </div >
    )
  }
  return (
    <div style={{
      display: "flex",
      width: "87%",
      minHeight: '100vh',
      maxHeight: '100vh',
      backgroundImage: "url(" + "https://i.pinimg.com/originals/95/47/1b/95471b227550b665b4933002299d3b9e.gif" + ")",
     // overflowY: 'scroll',

    }}
    >
      <div style={{
        display: 'flex',
        flexDirection:"column",
        width: "100%",
        height: "82%",
        marginLeft: "10%",
        marginRight: "5%",
        marginTop: "5%",
        marginBottom: '5%',
        backgroundColor: "green",
        borderRadius: '10px',
        borderWidth: '2px',
        borderStyle: 'double',
        borderColor: "white",
        
        alignItems: "center",
        justifyContent: 'center',

       //  overflowY: 'scroll',
      }}>
        
        <div style={{
          display: "flex",
          height: "5%",
          width: "100%",
          alignItems: "center",
        justifyContent: 'center',
        marginTop:'10px'
        }}>
        <p style={{ fontSize: '25px',fontFamily:"-moz-initial" ,color: "yellow" }}>Accounts</p>
        </div>
         <div style={{
          display:"flex",
          flexDirection:"column",
          marginTop:"10px",
          justifyContent:"center",
          alignItems:"center",
           height: "100%",
           width: "100%",
          // marginTop: '10px',
          overflowY:AccountsData.length>4? 'scroll':"",
          
        }}> 
          {
            AccountsData.map((acc, indes) => (
              <>
                <SingleAccount acc={acc} />
              </>
            ))
          }
        </div>
      </div>
    </div>
  )
}
