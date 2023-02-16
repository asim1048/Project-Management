import { Outlet, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserProvider } from './Context';
import { AirlineSeatFlatAngledSharp, GroupWorkTwoTone } from '@mui/icons-material';

export default function LeftHeader() {
    const [focusedPage, setFocusedPage] = useState(false)//for login
    const [SignUpPage, setSignUpPage] = useState(false)
    const [addProjectPage, setAddProjectPage] = useState(false)
    const [logoutPage, setLogoutPage] = useState(false)
    const [projectsPage, setProjectsPage] = useState(false)
    const [accountsPage, setAccountsPage] = useState(false)
    
    var styledLogin;
    var styledSignUp;
    var styledAddProject;
    var styledLogout;
    var styledProjects;
    var styledAccounts;
    var a = {
        color: 'black',
        textDecoration: 'none',
        backgroundColor: 'yellowgreen',
        height: "35px",
    }
    var b = {
        color: 'white',
        textDecoration: 'none',
        backgroundColor: 'black',
    }

    if (focusedPage) {
        styledLogin = a;
    }
    else {
        styledLogin = b;
    }

    if (SignUpPage) {
        styledSignUp = a;
    }
    else {
        styledSignUp = b;
    }

    if (addProjectPage) {
        styledAddProject = a;
    }
    else {
        styledAddProject = b;
    }
    if (logoutPage) {
        styledLogout = a;
    }
    else {
        styledLogout = b;
    }
    if (projectsPage) {
        styledProjects = a;
    }
    else {
        styledProjects = b;
    }
    if (accountsPage) {
        styledAccounts = a;
    }
    else {
        styledAccounts = b;
    }
    // useEffect(()=>{
    //     setFocusedPage(false); setSignUpPage(false);setAddProjectPage(false);setLogoutPage(false)
    // },[state])

    const Headerr = () => {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100vh',
                width: "13%",
                backgroundColor: "black",
                fontSize: '20px',

            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                    height: '50%',
                    width:'100%',
                    alignItems:'center'
                }}>
                    <div style={{ display: 'flex' }} >
                        <>
                            <Link to="/" style={{ color: 'gray', textDecoration: 'none' }}><GroupWorkTwoTone style={{ color: 'white' }} fontSize="large" /></Link>
                        </>
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: "2px" }}>
                            <Link to="/" style={{ color: 'gray', textDecoration: 'none' }}>Project</Link>
                            <Link to="/" style={{ color: 'gray', textDecoration: 'none' }}>Management</Link>
                        </div>
                    </div>
                    <Link onClick={() => { setFocusedPage(false); setSignUpPage(false); setAddProjectPage(false); setLogoutPage(false); setProjectsPage(true); setAccountsPage(false) }} to="/projects" style={styledProjects}>Projects</Link>
                    <Link onClick={() => { setFocusedPage(false); setSignUpPage(false); setAddProjectPage(true); setLogoutPage(false); setProjectsPage(false); setAccountsPage(false) }} to="/addProject" style={styledAddProject}>Add Project</Link>
                    <Link onClick={() => { setFocusedPage(false); setSignUpPage(false); setAddProjectPage(false); setLogoutPage(false); setProjectsPage(false); setAccountsPage(true) }} to="/accounts" style={styledAccounts}>Accounts</Link>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    height: '30%'
                }}>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                    height: '20%',
                }}>
                    <Link onClick={() => { setFocusedPage(false); setSignUpPage(true); setAddProjectPage(false); setLogoutPage(false); setProjectsPage(false); setAccountsPage(false) }} to="/signUp" style={styledSignUp}>SignUp</Link>
                    <Link onClick={() => { setFocusedPage(false); setSignUpPage(false); setAddProjectPage(false); setLogoutPage(true); setProjectsPage(false); setAccountsPage(false) }} to="/logout" style={styledLogout}>Logout</Link>
                    <Link onClick={() => { setFocusedPage(true); setSignUpPage(false); setAddProjectPage(false); setLogoutPage(false); setProjectsPage(false); setAccountsPage(false) }} to="/login" style={styledLogin}>Login</Link>
                </div>
            </div>
        )
    }
    return (
        <div style={{
            display: 'flex',
        }}>
            <Headerr />
            <Outlet />
        </div>
    )
}