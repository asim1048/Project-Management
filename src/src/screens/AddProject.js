import React, { useState } from 'react'
import { Projects, Accounts } from './../constants/data'
import { Navigate } from "react-router-dom";

import { Dialog, Checkbox, Button, } from '@mui/material'
import { Close, } from '@mui/icons-material';
const dialogStyle = {
  height: '80%',
  alignItems: "center",
  width: '50%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  background: 'white',
  borderRadius: "20px",
}
export default function AddProject() {
  const [projectName, setProjectName] = useState("")
  const [budget, setBudget] = useState()
  const [totalExperts, setTotalExperts] = useState(0)
  const [next, setNext] = useState(true);
  const [open, setOpen] = useState(true);
  const [contributtionInNumber, setContributtionInNumber] = React.useState(true);
  const [contributtionInPercentage, setContributtionInPercentage] = React.useState(false);
  const [tempp, setTempp] = useState([])
  var Experts = [];
  let TExpert = {
    "ExpertName": '',
    "countribution": 0,
  }
  let temp = [];
  var project;
  const addPoject = () => {
    project = {
      "key":0,
      "projectName": projectName,
      "budget": budget,
      "totalExperts": totalExperts,
      "expert": tempp
    }
    if (contributtionInNumber) {
      let sum = 0;
      project.expert.map((item, index) => sum +=parseInt(item.countribution))
      if (sum != project.budget) {
        alert( `SUM OF ALL EXPERT'S CONTRIBUTION MUST BE EQUAL TO ${project.budget}. PLEASE CHECK IT`)
      }
    }
    else { // contribution in percentage
      let sum = 0;
      project.expert.map((item, item2) => sum +=parseInt(item.countribution))
      if (sum != 100) {
        alert("SUM OF ALL EXPERT'S CONTRIBUTION MUST BE EQUAL TO 100. PLEASE CHECK IT")
      }
      //conservation percentage to amount   Formula (%/100)*totalbudget
      project.expert.map((item,index)=>{
        let a=item.countribution;
        item.countribution= (a/100)*project.budget;
      })
    }
    
    console.log(project)
    //Now Sending Contribution in their accounts
  }
  const hanleNext = () => {
    if (totalExperts <= 0 || budget <= 0 || projectName === "") {
      alert("INALID INPUT")
    }
    else {
      setNext(false)
      for (let i = 0; i < totalExperts; i++) {
        let a = {
          "key": temp.length,
          "expertName": "a",
          "countribution": 0
        }
        Experts.push(TExpert);
        temp.push(a);
      }
      setTempp(temp)
    }
  }

  const Expert = ({ index }) => {
    return (
      <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', width: "100%", }}>
        <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'blue', height: '30%', borderRadius: '5px', alignItems: 'center' }}>Detail of Expert {index + 1}</p>
        <input
          placeholder={`Name`}
          multiple={true}
          type={"text"}
          style={{
            height: "35px",
            width: "100%",
            marginBlockStart: '-1.2rem',
            borderWidth: '2px',
            borderStyle: "solid",
            paddingLeft: '5px',
            paddingRight: '5px',
            fontSize: '17px',
            borderRadius: '4px',
            justifyContent: "center",
            backgroundColor: "##FFFFF7 ",
            borderColor: "blue"
          }}
          onChange={(e) => tempp[index].expertName = e.target.value}
        />
        <input
          placeholder={`Contribution`}
          multiple={true}
          type={"text"}
          style={{
            marginTop: '5px',
            height: "35px",
            width: "100%",
            borderWidth: '2px',
            borderStyle: "solid",
            paddingLeft: '5px',
            paddingRight: '5px',
            fontSize: '17px',
            borderRadius: '4px',
            justifyContent: "center",
            backgroundColor: "##FFFFF7 ",
            borderColor: "blue"
          }}
          onChange={(e) => { tempp[index].countribution = e.target.value; {/*console.log(tempp)*/ } }}
        />
      </div>
    )
  }
  return (
    <div
      style={{
        display: "flex",
        width: "87%",
        minHeight: '100vh',
        backgroundImage: "url(" + "https://i.pinimg.com/originals/95/47/1b/95471b227550b665b4933002299d3b9e.gif" + ")",
        alignItems: "center",
        justifyContent: 'center'
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
        }}><Close onClick={() => { setOpen(false) }} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: "50%"
          }}
        >
          <p
            style={{
              fontSize: '20px',
              fontWeight: 'solid',
              fontFamily: "cursive"
            }}
          >
            Adding new Project
          </p>

          <input
            placeholder='Project Name'
            multiple={true}
            type={"text"}
            style={{
              height: "35px",
              width: "100%",
              borderWidth: '2px',
              borderStyle: "solid",
              paddingLeft: '5px',
              paddingRight: '5px',
              fontSize: '17px',
              borderRadius: '4px',
              justifyContent: "center",
              backgroundColor: "##FFFFF7 ",
              borderColor: "blue"
            }}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <input
            placeholder='Total Budget($)'
            multiple={true}
            type={"text"}
            style={{
              marginTop: '10px',
              height: "35px",
              width: "100%",
              borderWidth: '2px',
              borderStyle: "solid",
              paddingLeft: '5px',
              paddingRight: '5px',
              fontSize: '17px',
              borderRadius: '4px',
              justifyContent: "center",
              backgroundColor: "##FFFFF7 ",
              borderColor: "blue"
            }}
            onChange={(e) => setBudget(e.target.value)}
          />
          <input
            placeholder='Total Experts'
            multiple={true}
            type={"text"}
            style={{
              marginTop: '10px',
              height: "35px",
              width: "100%",
              borderWidth: '2px',
              borderStyle: "solid",
              paddingLeft: '5px',
              paddingRight: '5px',
              fontSize: '17px',
              borderRadius: '4px',
              justifyContent: "center",
              backgroundColor: "##FFFFF7 ",
              borderColor: "blue"
            }}
            onChange={(e) => setTotalExperts(e.target.value)}
          />

          {next &&
            <Button variant="contained" style={{
              borderRadius: "10px",
              height: "50px",

              width: "100px",
              fontSize: "20px",
              marginTop: '15px',
            }}
              onClick={() => hanleNext()}
            >Next</Button>
          }
          {!next &&
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'space-between', width: '100%', marginBlockEnd: '-1.5rem' }}>
              <p style={{ fontSize: '20px', fontWeight: '600' }}>CONTRIBUTION IN</p>
              <div style={{ display: 'flex', justifyContent: "space-between", marginBlockStart: '-1.5rem' }}>
                <>
                  <p>AMOUNT</p>
                  <Checkbox
                    checked={contributtionInNumber}
                    onChange={() => { setContributtionInNumber(!contributtionInNumber); setContributtionInPercentage(!contributtionInPercentage) }}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                </>
                <>
                  <p>PERCENTAGE</p>
                  <Checkbox
                    checked={contributtionInPercentage}
                    onChange={() => { setContributtionInNumber(!contributtionInNumber); setContributtionInPercentage(!contributtionInPercentage) }}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                </>
              </div>

            </div>
          }
          {tempp.map((user, index) => (
            <>
              <Expert index={index} />

            </>
          ))}
        </div>
        {!next &&
          <Button variant="contained" style={{
            borderRadius: "10px",
            height: "50px",

            width: "100px",
            fontSize: "20px",
            marginTop: '15px',
          }}
            onClick={() => addPoject()}
          >ADD</Button>
        }
        <div style={{ marginTop: '10px' }}>
        </div>
        <p>{project}</p>
      </Dialog>

      {!open && <Navigate to="/" replace={true} />}
    </div>
  )
}
