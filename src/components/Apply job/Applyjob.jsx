import { useEffect, useState } from "react";
import { usePDF } from 'react-to-pdf';

const Applyjob = () => {
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    const [jobCategory, setCategory] = useState('');
    const [data, setData] = useState([])

    const handlechange = e => {
        e.preventDefault();
        const data = e.target.value
        console.log(data)
        setCategory(data)
    }

    useEffect(() => {
        if (jobCategory) {
            fetch(`http://localhost:3000/appliedjobs?job_category=${jobCategory}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setData(data)
                })

        }
        else if (!jobCategory) {
            fetch(`http://localhost:3000/appliedjobs?job_category=${jobCategory}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setData(data)
                })
        }

    }, [jobCategory])
    return (
        <div className="text-center ">

            <div className="mt-4 mx-6  border-x-2 border-purple-100" ref={targetRef}>
                <div className="">
                    <div className="container mx-auto px-4 sm:px-8">
                        <div className="py-8">
                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold ">Job Category</h2>

                            </div>
                            <div className=" flex flex-wrap space-y-5 items-center justify-between">
                                <div className="">
                                    Available jobs
                                    <select onChange={handlechange}
                                    value={jobCategory}
                                        className="bordered border-2 rounded-lg h-12 ml-2"
                                    >
                                        <option value="On Site">On Site</option>
                                        <option value="Remote">Remote</option>
                                        <option value="Part-Time">Part Time</option>
                                        <option value="Hybrid">Hybrid</option>

                                    </select>
                                </div>
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
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                                >
                                                    job description
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
                                                                <p className="text-gray-600 whitespace-no-wrap">{data.salary}$</p>
                                                            </td>
                                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-600 whitespace-no-wrap">{data.applicant_number}</p>
                                                            </td>
                                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <p className="text-gray-600 whitespace-no-wrap">{data?.job_description .slice(0,60)}...</p>
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
            <button onClick={() => toPDF()}>Download PDF</button>

        </div >
    );
};

export default Applyjob;