import {Link} from 'react-router';
import Register from '../Auth/Register';
import { useAuth } from '../../context/authContext';
import {decodeJwt} from '../../utils';
const Navbar = () => {

    const {authToken} = useAuth()
    
    let email;
    if (authToken) {
      let decodedJwt = decodeJwt(authToken)
      email = decodedJwt.email
    }
        
    return (
        <div className="navbar">
        <ul>
          
            {
              !authToken ? <>
                <li><Link to="/register"> Register</Link></li>
                <li><Link to="/login"> Login</Link></li>
              </> :
              <>
                <li><Link to="/users"> Users</Link></li>
                <li><Link to="/items"> Items</Link></li>
                <li><Link to="/logout"> Logout</Link></li>   
                 {email &&<li> Hello <b>{email}</b></li>}           
              </>  
            }
        </ul>
       
        </div>
    );
        
}

export default Navbar;