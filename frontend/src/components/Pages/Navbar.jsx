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
        <>
        <ul>
          <li>
            {
              !authToken ? <>
                <Link to="/register"> Register</Link>
                <Link to="/login"> Login</Link>
              </> :
              <>
                <Link to="/users"> Users</Link>
                <Link to="/items"> Items</Link>
                <Link to="/logout"> Logout</Link>              
              </>  
            }
          </li>  
        </ul>
        {email && <p>Hello {email }<b></b></p> }
        </>
    );
        
}

export default Navbar;