import { Outlet, Link } from "react-router-dom";
export default function Header (){
    const Headerr=()=>{
        return(
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                height:'70px',
                backgroundColor:"black",
                fontSize:'30px',
                
              }}>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Project Management</Link>
                <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
                <Link to="/signUp" style={{ color: 'white', textDecoration: 'none' }}>SignUp</Link>
                <Link to="/addProject" style={{ color: 'white', textDecoration: 'none' }}>AddProject</Link>
                <Link to="/logout" style={{ color: 'white', textDecoration: 'none' }}>Logout</Link>
            </div>
        )
    }
    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between'
        }}>
            <Headerr/>
                

               
                <Outlet />
               
            
        </div>
    )
}