import axios from "axios";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Provider/Authprovider";
import Swal from "sweetalert2";

const Add_Job = () => {
    const {user} = useContext(AuthContext)
    
    const [deadline, setdeadline] = useState();
    const [postdate, setpostdate] = useState();
    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target
        const job_banner = form.job_banner.value
        const job_title = form.job_title.value
        const name = form.name.value
        const job_category = form.job_category.value
        const salary = form.salary.value
        const job_description = form.job_description.value
        const applicant_number = form.applicant_number.value

        const addjob = { job_banner, job_title, name, job_category, salary, job_description, postdate, applicant_number, deadline,email: user.email}

        console.log(addjob, 'get item')

        axios.post('http://localhost:3000/jobs',addjob)
            .then(res=>{
                console.log(res.data)
                if(res.data.acknowledged){
                    Swal.fire("Good job!", "Successfully posted to database", "success");
                }
            })
    }
    return (
        <div className="">

            <div className="min-h-screen flex items-center m-6">
                <div className="bg-white p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
                    
                    <form onSubmit={handleAddJob}>

                        {/* Job Banner */}
                        <div className="flex items-center mb-10">
                            <label className="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Job Banner</label>
                            <input type="text" name="job_banner" placeholder="Picture URL of the Job Banner" className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400" />
                        </div>

                        {/* Job Title */}
                        <div className="flex items-center mb-10">
                            <label className="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Job Title</label>
                            <input type="text" name="job_title" placeholder="Job Title" className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400" />
                        </div>

                        {/* User Name */}
                        <div className="flex items-center mb-5">
                            <label className="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">User Name</label>

                            <input name="name" defaultValue={user.displayName} type="text" placeholder="User Name" className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400" />
                        </div>

                        {/* Job Category */}
                        <div className="flex items-center mb-10">
                            <label className="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Job Category</label>
                            <select name="job_category" placeholder="Job Category" className="bordered border-2 rounded-lg h-12">
                                <option value="On Site">On Site</option>
                                <option value="Remote">Remote</option>
                                <option value="Part-Time">Part Time</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                        </div>

                        {/* Salary Range */}
                        <div className="flex items-center mb-5">
                            <label className="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Salary Range</label>

                            <input name="salary" type="text" placeholder="Salary Range" className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400" />
                        </div>

                        {/* Job Description */}
                        <div className="flex items-center mb-5">
                            <label className="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Job Description</label>

                            <input name="job_description" type="text" placeholder="Job Description" className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400" />
                        </div>

                        {/* Job Posting Date */}
                        <div className="flex items-center mb-5">
                            <label className="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Job Posting Date</label>

                            <div className="bg-red">
                                <DatePicker className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500" selected={postdate} onChange={(date) => setpostdate(date)}  dateFormat="dd/MM/yyyy"/>
                            </div>
                        </div>

                        {/* Application Deadline */}
                        <div className="flex items-center mb-5">
                            <label className="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Application Deadline</label>

                            <div className="bg-red">
                                <DatePicker className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500" selected={deadline} onChange={(date) => setdeadline(date)}  dateFormat="dd/MM/yyyy"/>
                            </div>
                        </div>

                        {/* Applicants Number */}
                        <div className="flex items-center mb-5">
                            <label className="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Applicants Number</label>

                            <input name="applicant_number" type="text" placeholder="Applicants Number" className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400" />
                        </div>


                        <div className="text-right">
                            <button className="py-3 px-8 bg-green-500 text-green-100 font-bold rounded">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Add_Job;