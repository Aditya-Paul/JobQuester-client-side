import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";
import Swal from "sweetalert2";

const Register = () => {
    const { signup,update} = useContext(AuthContext)

    const handleregister = e =>{
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value

        console.log(name,email,password,photo)

        signup(email,password)
        .then(res=>{
            update(name,photo)
            .then(res=>{
                Swal.fire("Good job!", "Registered Successfully", "success");
            })
            
        })
        .catch(error=>{
            Swal.fire("Oops!", `${error}`, "error")
        })
    }
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div
                className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1 bg-gradient-to-r from-indigo-300 ...">

                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 ">

                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold">
                            Register for JobQuester
                        </h1>
                        <div className="w-full flex-1 mt-8">


                            <form onSubmit={handleregister} className="mx-auto max-w-xs">
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm"
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                />
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm mt-5"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                />
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm mt-5"
                                    type="text"
                                    name="photo"
                                    placeholder="Photo URL"
                                />
                                <button
                                    className="mt-5 font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 flex items-center justify-center ">
                                    <span className="ml-3">
                                        Register
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="mt-4 text-xs flex justify-between items-center text-[#002D74]">
                        <p className="text-base">Already have an account?</p>
                        <Link to='/JobQuester/login'>
                            <button className="py-2 px-5 bg-white border rounded-xl text-base">Login</button>
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Register;