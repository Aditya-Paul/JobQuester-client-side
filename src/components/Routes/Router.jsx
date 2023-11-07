import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Error from "../Error/Error";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Home from "../Home/Home/Home";
import Blog from "../Blog/Blog";
import Add_Job from "../Add_A_Job/Add_Job";
import All_jobs from "../All jobs/All_jobs";
import PrivateRoute from "./PrivateRoute";
import Jobdetails from "../Job details/Jobdetails";
import My_job from "../My JOb/My_job";
import Updatejob from "../My JOb/Updatejob";
import Applyjob from "../Apply job/Applyjob";


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
                element: <PrivateRoute><Add_Job></Add_Job></PrivateRoute>,
            },
            {
                path: '/JobQuester/all_jobs', 
                element:<All_jobs></All_jobs>,
            },
            {
                path: '/JobQuester/My_Jobs', 
                element:<PrivateRoute><My_job></My_job></PrivateRoute> ,
                loader: ()=> fetch(`http://localhost:3000/job`)
            },
            {
                path: '/JobQuester/Applied_Jobs', 
                element: <PrivateRoute><Applyjob></Applyjob></PrivateRoute>,
                loader: ()=> fetch(`http://localhost:3000/appliedjobs`)
            },
            {
                path: '/JobQuester/Updatejob/:id', 
                element: <Updatejob></Updatejob>,
                loader: ({params})=> fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: '/job/:id', 
                element: <PrivateRoute><Jobdetails></Jobdetails></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:3000/jobs/${params.id}`)
            },

        ]
    },
]);

export default router;