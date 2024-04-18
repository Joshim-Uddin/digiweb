import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Home';
import Error from '../Error';
import Services from '../Pages/Services';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        errorElement: <Error />,
        children:[
            {
                path:"/",
                element: <Home />
            },
            {
                path:"/services",
                element: <Services />
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
])
const Routes = () => {
    return <RouterProvider router={router} ></RouterProvider>
};

export default Routes;