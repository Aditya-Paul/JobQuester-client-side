import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";
import { useContext } from "react";
import Swal from "sweetalert2";

const Login = () => {
    const { googlesignIN,signin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handlelogin = e => {
        //console.log('work or not')
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        signin(email, password)
            .then(res => {
                
                Swal.fire("Good job!", " Logged in successfully", "success");
                navigate(location.state ? location.state : "")
                console.log(res.user)
            })
            .catch(error => {
                Swal.fire("Oops!", "Please Check email and password again", "error");
                console.error(error)
            })
    }

    const handlegoogle = () => {
        //console.log('work or not')
        googlesignIN()
            .then(res => {
                console.log(res.user)
                Swal.fire("Good job!", "Google login successfull", "success");
            })
            .catch(error => {
                Swal.fire("Oops!", "Something wrong! try again", "error");
                console.log(error)
            })
    }

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">

            <div className="md:w-1/2 px-8 md:px-16">
                <h2 className="font-bold text-2xl text-[#002D74] text-center">Login</h2>
                <p className="text-xl mt-4 text-[#002D74] text-center">If you are a user, please log in</p>

                <form onSubmit={handlelogin} className="flex flex-col gap-4">
                    <input className="p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Email" />
                    <div className="relative">
                        <input className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password" />
                    </div>
                    <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
                </form>

                <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                    <hr className="border-gray-400" />
                    <p className="text-center text-sm">OR</p>
                    <hr className="border-gray-400" />
                </div>

                <button onClick={handlegoogle} className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-[#002D74] text-base gap-2">
                    Login with Google<FcGoogle className="text-lg"></FcGoogle>
                </button>

                <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                    <p className="text-base">Don`t have an account?</p>
                    <Link to='/JobQuester/register'>
                        <button  className="py-2 px-5 bg-white border rounded-xl text-base">Register</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;