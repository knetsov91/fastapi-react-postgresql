import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Register from './components/Auth/Register';
import Layout from './components/Auth/Layout';
import Home from './components/Auth/Home';
import Login from './components/Auth/Login';
const Routes = ({children}) => {


    const router = createBrowserRouter([
        
        {
            path: "/",
            element: <Layout />,
            children: [
                {index: true, element: <Home />},
                {
                    path: "/register",
                    element: <Register />
                },
                {
                    path: "/login",
                    element: <Login />
                }
            ]
            
        },
        
    ])

    return (
        <RouterProvider router={router} />
  
    );
}

export default Routes;