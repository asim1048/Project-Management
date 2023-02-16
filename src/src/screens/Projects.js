import React, { useState } from 'react'
import { Projects } from './../constants/data'
import { Link } from "react-router-dom";

import { Add, Description, Payment, Group } from '@mui/icons-material';

export default function Project(project) {
  const [detailProject, setDetailProject] = useState("")

  const ProjectsList = ({ proj }) => {
    return (<div style={{
      display: 'flex',
      flexDirection: 'column',
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
      onClick={(e) => setDetailProject(proj)}
    >
      <div style={{
        display: 'flex',
        color: "yellow",
        alignItems: 'center',
        fontSize: '20px',

      }}>
        <Description fontSize="large" style={{ color: 'white' }} />
        <p style={{ marginLeft: '4px', color: "white", background: 'black', }}>{proj.projectName}</p>
      </div>
      <div style={{
        display: 'flex',
        color: 'greenyellow',
        alignItems: 'center',
        fontSize: '20px',
        marginBlockStart: "-1.5rem",
        justifyContent: "space-between",
      }}>
        <div style={{ display: 'flex', alignItems: "center", }}>
          <Group fontSize="large" style={{ color: 'white' }} />
          <p style={{ marginLeft: '4px', color: "white", background: 'black', }}>{proj.totalExperts}</p>
        </div>
        <div style={{ display: 'flex', alignItems: "center" }}>
          <Payment fontSize="large" style={{ color: 'white' }} />
          <p style={{ marginLeft: '4px', color: "white", background: 'black', }}>{proj.budget}$</p>
        </div>
      </div>
    </div >
    )
  }

  const Member = ({ expert }) => {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        borderWidth: '2px',
        borderColor: 'yellow',
        borderRadius: '10px',
        borderStyle: 'solid',
        marginLeft: '10px',
        marginRight: '10px',
        marginTop: '5px',
        padding: "10px",
        backgroundColor: "black",
      }}>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: 'center',
            backgroundColor: 'green',
            borderWidth: '2px',
            borderColor: 'yellowGreen',
            borderRadius: '10px',
            borderStyle: 'solid',
          }}>
            <p style={{
              fontSize: '20px',
              fontFamily: 'cursive',
              color: "white",
            }}>{expert.expertName}:
            </p>
            <p style={{
              fontSize: '20px',
              fontFamily: 'cursive',
              color: "white",
              marginLeft:'10px'
            }}>{expert.countribution}
            </p>
        </div>
      </div>
    )
  }

  const ProjectDetails = () => {
    console.log(detailProject)
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection:'column',
        width:"100%",
        marginTop:"20%"

      }}>
        {detailProject === '' ?
          <div style={{
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center',
            
        
          }}>
            {/* <p style={{
              fontSize:'20px',
              fontFamily:'cursive',
              color:"white",
            }}>No Project Selected to see detail
            </p> */}
          </div>
          :
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: 'center',
            backgroundColor: 'green',
            borderWidth: '2px',
            borderColor: 'yellowGreen',
            borderRadius: '10px',
            borderStyle: 'solid',
            
        height: '100%',
          }}>
            <p style={{
              fontSize: '20px',
              fontFamily: 'cursive',
              color: "white",
            }}>{detailProject.projectName}:  {detailProject.budget}$
            </p>
            {/* <p style={{
              fontSize: '20px',
              fontFamily: 'cursive',
              color: "white",

              marginTop: "-17px"
            }}>{detailProject.budget}$
            </p> */}
            <p style={{
              fontSize: '20px',
              fontFamily: 'cursive',
              color: "yellow",

              marginTop: "-17px"
            }}>Contributers
            </p>
            <div style={{
            height:"300px",
            widthL:"249px",
        overflowY: 'scroll',
            }}>
            {

              detailProject.expert.map((expert, indes) => (
                <>
                  <Member expert={expert} />
                </>
              ))


            }
            
            </div>
          </div>
        }
        <div style={{
        width: '10%',
        height: '100%',
        margin: '10px'
      }}>
        </div>
      </div>
    )
  }
  return (
    <div
      style={{
        display: "flex",
        width: "87%",
        minHeight: '100vh',
        maxHeight: '100vh',
        backgroundImage: "url(" + "https://i.pinimg.com/originals/95/47/1b/95471b227550b665b4933002299d3b9e.gif" + ")",
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        margin: '10px',
        height: '100%',
        borderRightWidth: '2px',
        borderRightStyle: 'double',
        borderRightColor: "white",
        overflowY: 'scroll',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div></div>
          <p style={{
            fontSize: '25px',
            color: 'white'
          }}>
            Projects List
          </p>
          <Link to="/addProject" >
            <Add style={{
              color: 'white',
              marginRight: "10px",
            }} />
          </Link>
        </div>
        {
          Projects.map((proj, indes) => (
            <>
              <ProjectsList proj={proj} />
            </>
          ))
        }
      </div>
      <div style={{
        width: '50%',
        height: '100%',
        margin: '10px'
      }}>
        <ProjectDetails />
      </div>


    </div>
  )
}