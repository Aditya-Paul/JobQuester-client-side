import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/Provider/Authprovider";


const Navbar = () => {
    const { user, userlogout } = useContext(AuthContext)
    // const links = <>
    //     <li><Link className="text-purple-300" to='/'>Home</Link></li>
    //     <li><Link className="text-purple-300" to='/JobQuester/all_jobs'>All Jobs</Link></li>
    //     <li><Link className="text-purple-300" to='/JobQuester/Applied_Jobs'>Applied Jobs</Link></li>
    //     <li><Link className="text-purple-300" to='/JobQuester/add_a_job'>Add A Job</Link></li>
    //     <li><Link className="text-purple-300" to='/JobQuester/My_Jobs'>My Jobs</Link></li>
    //     <li><Link className="text-purple-300" to='/JobQuester/blogs'>blogs</Link></li>
    //     <li><Link className="text-purple-300" to='/JobQuester/login'>Login</Link></li>
    // </>

    return (
        <div>
            <div className="navbar text-black bg-white border-x-[12px] border-purple-400" >
                <div className="bg-opacity-60"></div>
                <div className="navbar-start gap-4">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            <div className="flex-row text-green-400">
                                {
                                    user ?

                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                            <li><Link className="text-purple-300" to='/'>Home</Link></li>
                                            <li><Link className="text-purple-300" to='/JobQuester/all_jobs'>All Jobs</Link></li>
                                            <li><Link className="text-purple-300" to='/JobQuester/Applied_Jobs'>Applied Jobs</Link></li>
                                            <li><Link className="text-purple-300" to='/JobQuester/add_a_job'>Add A Job</Link></li>
                                            <li><Link className="text-purple-300" to='/JobQuester/My_Jobs'>My Jobs</Link></li>
                                            <li><Link className="text-purple-300" to='/JobQuester/blogs'>Blogs</Link></li>
                                        </ul>

                                        :


                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                            <li><Link className="text-purple-300" to='/'>Home</Link></li>
                                            <li><Link className="text-purple-300" to='/JobQuester/all_jobs'>All Jobs</Link></li>
                                            <li><Link className="text-purple-300" to='/JobQuester/blogs'>Blogs</Link></li>
                                            <li><Link className="text-purple-300" to='/JobQuester/login'>Login</Link></li>
                                        </ul>
                                }
                                {/* <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                </ul> */}
                            </div>
                        </label>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <img src="https://i.ibb.co/6gf7yrh/logo-2.jpg" className="w-12 h-12" alt="" />
                        <h2 className=" normal-case text-xl font-extrabold">JobQuester</h2>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    {
                        user ?

                            <ul className="menu menu-horizontal px-1">
                                <li><Link className="text-purple-300" to='/'>Home</Link></li>
                                <li><Link className="text-purple-300" to='/JobQuester/all_jobs'>All Jobs</Link></li>
                                <li><Link className="text-purple-300" to='/JobQuester/Applied_Jobs'>Applied Jobs</Link></li>
                                <li><Link className="text-purple-300" to='/JobQuester/add_a_job'>Add A Job</Link></li>
                                <li><Link className="text-purple-300" to='/JobQuester/My_Jobs'>My Jobs</Link></li>
                                <li><Link className="text-purple-300" to='/JobQuester/blogs'>Blogs</Link></li>
                            </ul>

                            :


                            <ul className="menu menu-horizontal px-1">
                                <li><Link className="text-purple-300" to='/'>Home</Link></li>
                                <li><Link className="text-purple-300" to='/JobQuester/all_jobs'>All Jobs</Link></li>
                                <li><Link className="text-purple-300" to='/JobQuester/blogs'>Blogs</Link></li>
                                <li><Link className="text-purple-300" to='/JobQuester/login'>Login</Link></li>
                            </ul>
                    }
                </div>
                <div className="navbar-end gap-2">
                    {
                        user ?
                            <div className="flex flex-col md:flex-row  items-center gap-2">
                                <div className="relative group">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full group-hover:opacity-75">
                                            <img src={user.photoURL} alt="User Avatar" className="w-full h-full object-cover rounded-full" />
                                            <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg text-red-700">
                                                {user.displayName}
                                            </div>
                                        </div>
                                    </label>
                                </div>

                                <button className="btn text-purple-300" onClick={userlogout}><Link to='/'>Logout</Link>
                                </button>
                            </div>
                            :
                            ""
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;