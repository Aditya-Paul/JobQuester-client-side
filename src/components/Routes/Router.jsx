import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Error from "../Error/Error";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Home from "../Home/Home/Home";
import Blog from "../Blog/Blog";
import Add_Job from "../Add_A_Job/Add_Job";
import All_jobs from "../All jobs/All_jobs";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/', 
                element: <Home></Home>,
            },
            {
                path: '/JobQuester/login', 
                element: <Login></Login>,
            },
            {
                path: '/JobQuester/register', 
                element: <Register></Register>,
            },
            {
                path: '/JobQuester/blogs', 
                element: <Blog></Blog>,
            },
            {
                path: '/JobQuester/add_a_job', 
                element: <Add_Job></Add_Job>,
            },
            {
                path: '/JobQuester/all_jobs', 
                element: <All_jobs></All_jobs>,
            },

        ]
    },
]);

export default router;