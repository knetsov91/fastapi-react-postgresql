import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Register from './components/Auth/Register';
import Layout from './components/Pages/Layout';
import Home from './components/Pages/Home';
import Login from './components/Auth/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Users from './components/Pages/Users';
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
            },
            
    ]},
    {
        path: "/home",
        element:<Layout />,
        children: [
            {index: true, element: <ProtectedRoute><Home /></ProtectedRoute>}
        ]
    }, 
    {
        path: "/users",
        element: <Layout />,
        children: [
            {index: true, element: <Users />}
        ]
     }
    ])

    return (
        <RouterProvider router={router} />
  
    );
}

export default Routes;