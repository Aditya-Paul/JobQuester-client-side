import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


const My_job = () => {
    const { user = {} } = useContext(AuthContext)
    const [data, setData] = useState([])

    // const { fetchdata, isLoading, isFetching, refetch } = useQuery({

    // })

    console.log(user?.email)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:3000/jobs?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setData(data)
                })
        }

    }, [user, data])

    const handledelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/jobs/${id}`)
                    .then(res => {
                        if (res.data.deleteCount > 0) {
                            Swal.fire("Good job!", "Google login successfull", "success");
                            const remaining = data.filter(item => item._id !== id)
                            setData(remaining)
                        }
                    })
            }
        })


    }
    return (
        <div className="text-center ">

            <div className="mt-4 mx-6  border-x-2 border-purple-100">
                <div className="">
                    <div className="container mx-auto px-4 sm:px-8">
                        <div className="py-8">
                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold ">My jobs</h2>

                            </div>

                            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div className="inline-block min-w-full shadow-md rounded-lg ">
                                    <table className="min-w-full">
                                        <thead>
                                            <tr>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                                >
                                                    Image
                                                </th>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                                >
                                                    Name
                                                </th>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase"
                                                >
                                                    Job Title
                                                </th>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase"
                                                >
                                                    Job Category
                                                </th>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                                >
                                                    Job Posting Date
                                                </th>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                                >
                                                    Application Deadline
                                                </th>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                                >
                                                    Salary range
                                                </th>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                                >
                                                    Applicant Number
                                                </th>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                                >
                                                    Update
                                                </th>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                                >
                                                    Delete
                                                </th>
                                            </tr>
                                        </thead>
                                        {/* t-body */}
                                        {
                                            data.map(data =>
                                                <>
                                                    <tbody >
                                                        <tr>

                                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-900 whitespace-no-wrap"><img className="w-10 h-10" src={data.job_banner} alt="" /></p>
                                                            </td>
                                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-900 whitespace-no-wrap">{data.name}</p>
                                                            </td>
                                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-900 whitespace-no-wrap">{data.job_title}</p>
                                                            </td>
                                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-900 whitespace-no-wrap">{data.job_category}</p>
                                                            </td>
                                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-900 whitespace-no-wrap">{data?.postdate.slice(0, 10)}</p>
                                                            </td>
                                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-600 whitespace-no-wrap">{data?.deadline.slice(0, 10)}</p>
                                                            </td>
                                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-600 whitespace-no-wrap">{data.salary}$</p>
                                                            </td>
                                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-600 whitespace-no-wrap">{data.applicant_number}</p>
                                                            </td>
                                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <Link to={`/JobQuester/Updatejob/${data._id}`}>
                                                                    <button className="h-7 w-16 rounded-md bg-purple-300 text-xs font-semibold text-purple-500 btn ">Update</button>
                                                                </Link>
                                                            </td>
                                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <button onClick={() => handledelete(data._id)} className="h-7 w-16 rounded-md bg-purple-300 text-xs font-semibold text-purple-500 btn ">Delete</button>
                                                            </td>
                                                        </tr>

                                                    </tbody>


                                                </>)
                                        }
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    );
};

export default My_job;