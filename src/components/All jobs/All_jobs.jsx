import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const All_jobs = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [data, setData] = useState([])
    const [dropdown, setdropdown] = useState([])

    const handlechange = e => {
        e.preventDefault();
        const data = e.target.value
        console.log(data)
        setJobTitle(data)
    }

    useEffect(() => {
        if (jobTitle) {
            fetch(`http://localhost:3000/jobs?job_title=${jobTitle}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setData(data)
                })

        }
        else if (!jobTitle) {
            fetch(`http://localhost:3000/jobs?job_title=${jobTitle}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setData(data)
                })
        }

    }, [jobTitle])

    useEffect(() => {
        fetch(`http://localhost:3000/jobs`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setdropdown(data)
            })

    }, [jobTitle])

    return (
        <div className="text-center ">

            <div className="mt-4 mx-6  border-x-2 border-purple-100">
                <div className="">

                    <div className="container mx-auto px-4 sm:px-8">
                        <div className="py-8">
                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold ">All jobs</h2>

                            </div>
                            <div className=" flex flex-wrap space-y-5 items-center justify-between">
                                <div className="">
                                    Available jobs
                                    <select
                                        className="bordered border-2 rounded-lg h-12 ml-2"
                                    >
                                        {
                                            dropdown.map(data => <>
                                                <option key={data._id}  value={data.job_title}>{data.job_title}</option>
                                            </>)
                                        }

                                    </select>
                                </div>
                                <div className="group w-72 md:w-80 lg:w-96 ">

                                    <div className="relative flex items-center">
                                        <input type="text" onChange={handlechange} name="job_title" value={jobTitle} className="relative h-10 w-full rounded-md bg-purple-200 pl-4 pr-20 font-thin outline-none drop-shadow-sm " />
                                        <button className="absolute right-2 h-7 w-16 rounded-md bg-purple-300 text-xs font-semibold text-purple-500 ">Search</button>
                                    </div>
                                </div>
                            </div>
                            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div className="inline-block min-w-full shadow-md rounded-lg ">
                                    <table className="min-w-full">
                                        <thead>
                                            <tr>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                                >
                                                    Name
                                                </th>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase"
                                                >
                                                    Job Title
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
                                                    Details
                                                </th>
                                            </tr>
                                        </thead>
                                        {/* t-body */}
                                        {
                                            data.map(data =>
                                                <>
                                                    <tbody>
                                                        <tr>

                                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-900 whitespace-no-wrap">{data.name}</p>
                                                            </td>
                                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-900 whitespace-no-wrap">{data.job_title}</p>
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
                                                                <Link to={`/job/${data._id}`}>
                                                                <button className="h-7 w-16 rounded-md bg-purple-300 text-xs font-semibold text-purple-500 ">Details</button>
                                                                </Link>
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

export default All_jobs;