import axios from "axios";
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/Authprovider";
import { format } from "date-fns";


const Jobdetails = () => {
    const { user } = useContext(AuthContext)
    const loadData = useLoaderData()
    const currentDate = new Date();
    const formattedCurrentDate = format(currentDate, "yyyy-MM-dd");
    const deadlineDate = loadData.deadline
    const deadlinePassed = formattedCurrentDate > deadlineDate;
    //console.log(deadlinePassed, formattedCurrentDate, deadlineDate)

    const [value, setValue] = useState("")
    
    //const [num, setNum] = useState(0)
    const handleapply = (id) => {

        const applicantnumber = parseInt(loadData.applicant_number)
        const newNumber = applicantnumber + 1
        
        const applydata = {
             job_banner : loadData.job_banner,
             job_title : loadData.job_title,
             name : loadData.name,
             job_category : loadData.job_category,
             salary : loadData.salary,
             job_description : loadData.job_description,
             applicant_number : loadData.applicant_number,
             applicantName : user.displayName,
             applicantEmail : user.email,
             applicantResume : value,
        }

        if (deadlinePassed) {
            Swal.fire("Oops!", "You Crossed The Deadlline", "error");
        }
        else (
            axios.patch(`http://localhost:3000/jobs/${id}`, { applicant_number: newNumber })
                .then(res => {
                    if(res.data){
                        axios.post('http://localhost:3000/appliedjobs', applydata)
                        .then(res => {
                            console.log(res.data)
                            if (res.data.acknowledged) {
                                Swal.fire("Good job!", "Successfully posted to database", "success");
                                // setNum(newNumber)
                            }
                        })
                    }
                })
        )
    }
    return (
        <div>

            <div className="antialiased">
                <div className="py-6">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                        <div className="flex flex-col md:flex-row -mx-4">
                            <div className="md:flex-1 px-4">
                                <div >
                                    <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                                        <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                                            <img src={loadData.job_banner} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex-1 px-4">
                                <div>
                                    <img src="https://i.ibb.co/6gf7yrh/logo-2.jpg" className="w-12 h-12" alt="" />
                                    <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{loadData.job_title}</h2>
                                </div>

                                <p className="text-gray-500 text-sm">By <a href="#" className="text-indigo-600 hover:underline">{loadData.name}</a></p>

                                <div className="flex items-center space-x-4 my-4">
                                    <div>
                                        <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                                            <span className="text-indigo-400 mr-1 mt-1">$</span>
                                            <span className="font-bold text-indigo-600 text-3xl">{loadData.salary}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-500">{loadData.job_description}</p>

                                <p className="text-gray-500 text-base">Applicant Number : <a href="#" className="text-indigo-600 text-lg hover:underline">{loadData.applicant_number}</a></p>

                                <div className="flex py-4 space-x-4">
                                    {
                                        user?.email === loadData?.email ?
                                            <h2>You can`t apply your own job post</h2>
                                            :

                                            <div>
                                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                                <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Apply</button>
                                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                                    <div className="modal-box">
                                                        <h3 className="font-bold text-lg">Applicant Name: {user?.displayName}</h3>
                                                        <p className="py-4">Applicant Email: {user?.email}</p>
                                                        <div className="modal-action items-center justify-between">
                                                            <input 
                                                            type="text"
                                                            value={value} 
                                                            onChange={(e)=>setValue(e.target.value)}
                                                            />
                                                            <button className="h-7 w-16 rounded-md bg-purple-300 text-xs font-semibold text-purple-500 " onClick={() => handleapply(loadData._id)} >submit</button>
                                                            <form method="dialog" >
                                                                {/* if there is a button in form, it will close the modal */}
                                                                <button className="btn">Close</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </dialog>
                                            </div>
                                    }


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Jobdetails;