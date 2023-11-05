import { useEffect, useState } from "react";


const All_jobs = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/jobs`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
    }, [])
    return (
        <div className="text-center ">
            <h2 className="text-lg font-bold">All Jobs</h2>

            <div className="mt-4 mx-6  border-x-2 border-purple-100">
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center">
                        {
                            data.map(data => <>
                                <div className="">
                                    <div className="  " >

                                        <div className="relative m-4 ">

                                            <div className="bg-purple-400 absolute rounded-xl h-full lg:w-full w-fit -left-2 -top-2"></div>

                                            <div className="p-8 w-72 bg-gray-100 rounded-xl shadow-lg relative space-y-7" >
                                                <div className="bg-green-300 h-3 w-16 ml-auto"></div>
                                                <span className="text-xl text-purple-300">{data.job_title}</span>
                                                <p className="text-base">Name: {data.name}</p>
                                                <p className="text-base">Post Date: {data?.postdate.slice(0, 10)}</p>
                                                <p className="text-base text-red-400">Deadline: {data?.deadline.slice(0, 10)}</p>
                                                <p className="text-gray-500">Salary:{data.salary}$</p>
                                                <p className="">Applicant: {data.applicant_number}</p>

                                                <button className="btn bg-purple-400 "> View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>)

                        }
                    </div>

                </div>
            </div>

        </div>
    );
};

export default All_jobs;