import { useContext } from "react";
import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { AuthContext } from "../../Provider/Authprovider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";

const BannerCards = () => {

    const { user } = useContext(AuthContext)
    const [specificjob, setSpecificjob] = useState([])
    const [category, setCategory] = useState('')
    //console.log(category)

    // const { data,isLoading } = useQuery({
    //     queryKey: ["job_category"],
    //     queryFn: async () => {
    //         const data = await fetch(`https://job-quester-server-side.vercel.app/jobs?job_category=${category}`);
    //         return await data.json();
    //     },
    // });

    useEffect(() => {
        fetch(`https://job-quester-server-side.vercel.app/jobs?job_category=${category}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSpecificjob(data)
            })
    }, [category])

    const handleview = () => {
        if (!user) {
            Swal.fire("Oops!", "You have to login first to view details", "error");
        }
    }
    return (
        <div className="mt-4 mx-6  border-x-2 border-purple-100">
            <Tabs className=" text-center">
                <TabList className="grid grid-cols-5 gap-4 w-full p-2">
                    <Tab onClick={() => setCategory('')} className="text-center border-b-2 border-purple-100 bg-purple-100 text-purple-600   ">All</Tab>
                    <Tab onClick={() => setCategory('On Site')} className="text-center border-b-2 border-purple-100 bg-purple-100 text-purple-600">On Site Job</Tab>
                    <Tab onClick={() => setCategory('Remote')} className="text-center border-b-2 border-purple-100 bg-purple-100 text-purple-600">Remote Job</Tab>
                    <Tab onClick={() => setCategory('Hybrid')} className="text-center border-b-2 border-purple-100 bg-purple-100 text-purple-600">Hybrid</Tab>
                    <Tab onClick={() => setCategory('Part Time')} className="text-center border-b-2 border-purple-100 bg-purple-100 text-purple-600">Part Time</Tab>
                </TabList>
                <TabPanel>
                    <p>Content for All Job</p>
                </TabPanel>
                <TabPanel>
                    <p>Content for On Site Job</p>
                </TabPanel>
                <TabPanel>
                    <p>Content for Remote Job</p>
                </TabPanel>
                <TabPanel>
                    <p>Content for Hybrid</p>
                </TabPanel>
                <TabPanel>
                    <p>Content for Part Time</p>
                </TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center">
                    {
                        specificjob.map(data => <div key={data._id}>
                            <div  className="">
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
                                            <Link to={`/job/${data._id}`}>
                                            <button onClick={handleview} className="btn bg-purple-400 "> View</button>
                                            </Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)

                    }
                </div>

            </Tabs>
        </div>
    );
};

export default BannerCards;