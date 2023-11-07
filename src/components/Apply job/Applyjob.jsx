import {  useLoaderData } from "react-router-dom";


const Applyjob = () => {
    const loaddata = useLoaderData()
    return (
        <div className="text-center ">

            <div className="mt-4 mx-6  border-x-2 border-purple-100">
                <div className="">
                    <div className="container mx-auto px-4 sm:px-8">
                        <div className="py-8">
                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold ">Applied jobs</h2>

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
                                                    Salary range
                                                </th>
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                                >
                                                    Applicant Number
                                                </th>
                                            </tr>
                                        </thead>
                                        {/* t-body */}
                                        {
                                            loaddata.map(data =>
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
                                                                <p className="text-gray-600 whitespace-no-wrap">{data.salary}$</p>
                                                            </td>
                                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-600 whitespace-no-wrap">{data.applicant_number}</p>
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

export default Applyjob;