import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import axios from "axios";

const Updatejob = () => {
    const loaddata = useLoaderData()
    const [deadline, setdeadline] = useState();
    const [postdate, setpostdate] = useState();

    const handleupdate =(e)=>{
        const form = e.target
        const job_banner = form.job_banner.value
        const job_title = form.job_title.value
        const name = form.name.value
        const job_category = form.job_category.value
        const salary = form.salary.value
        const job_description = form.job_description.value
        const applicant_number = form.applicant_number.value

        const upjob = { job_banner, job_title, name, job_category, salary, job_description, postdate, applicant_number, deadline}
        axios.put(`http://localhost:3000/jobs/${loaddata._id}`,upjob)
        .then(res=>{
            console.log(res.data)
        })
    }
    return (
        <div>
            <div className="">

                <div className="min-h-screen flex items-center m-6">
                    <div className="bg-white p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">

                        <form  onSubmit={handleupdate}>

                            {/* Job Banner */}
                            <div className="flex items-center mb-10">
                                <label className="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Job Banner</label>
                                <input 
                                type="text" 
                                name="job_banner" 
                                defaultValue={loaddata.job_banner}
                                placeholder="Picture URL of the Job Banner" className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400" />
                            </div>

                            {/* Job Title */}
                            <div className="flex items-center mb-10">
                                <label className="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Job Title</label>
                                <input type="text" name="job_title" placeholder="Job Title"
                                defaultValue={loaddata.job_title}
                                className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400" />
                            </div>

                            {/* User Name */}
                            <div className="flex items-center mb-5">
                                <label className="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">User Name</label>

                                <input name="name" type="text" placeholder="User Name"
                                defaultValue={loaddata.name}
                                className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400" />
                            </div>

                            {/* Job Category */}
                            <div className="flex items-center mb-10">
                                <label className="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Job Category</label>
                                <select name="job_category"
                                defaultValue={loaddata.job_category}
                                placeholder="Job Category" className="bordered border-2 rounded-lg h-12">
                                    <option value="On Site">On Site</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Part-Time">Part Time</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>

                            {/* Salary Range */}
                            <div className="flex items-center mb-5">
                                <label className="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Salary Range</label>

                                <input name="salary" type="text" placeholder="Salary Range"
                                defaultValue={loaddata.salary}
                                className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400" />
                            </div>

                            {/* Job Description */}
                            <div className="flex items-center mb-5">
                                <label className="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Job Description</label>

                                <input name="job_description" type="text" 
                                defaultValue={loaddata.job_description}
                                placeholder="Job Description" className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400" />
                            </div>

                            {/* Job Posting Date */}
                            <div className="flex items-center mb-5">
                                <label className="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Job Posting Date</label>

                                <div className="bg-red">
                                    <DatePicker className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                                    selected={postdate} onChange={(date) => setpostdate(date)} dateFormat="dd/MM/yyyy" />
                                </div>
                            </div>

                            {/* Application Deadline */}
                            <div className="flex items-center mb-5">
                                <label className="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Application Deadline</label>

                                <div className="bg-red">
                                    <DatePicker className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                                    selected={deadline} onChange={(date) => setdeadline(date)} dateFormat="dd/MM/yyyy" />
                                </div>
                            </div>

                            {/* Applicants Number */}
                            <div className="flex items-center mb-5">
                                <label className="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Applicants Number</label>

                                <input name="applicant_number" type="text" placeholder="Applicants Number" 
                                defaultValue={loaddata.applicant_number}className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400" />
                            </div>


                            <div className="text-right">
                            <button className="py-3 px-8 bg-green-500 text-green-100 font-bold rounded">Update</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Updatejob;