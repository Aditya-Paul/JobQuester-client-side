
import { AiOutlineComment,AiOutlineFileSearch,AiFillSignal } from "react-icons/ai";
import { BsCashStack } from "react-icons/bs";
const ExtraSection1 = () => {
    return (
        <div className="text-center bg-slate-50 mx-4 p-4">
            <div className="pb-2"><h2 className="text-lg font-bold">Get ahead with JobQuester</h2>
            </div>
            <div className="pb-4">
                <p className="text-base font-normal">
                We're serving up trusted insights and anonymous conversation, so 
                <br />you'll have the goods you need to succeed.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col text justify-center items-center text-lg">
                    <p className="text-4xl"><AiOutlineComment></AiOutlineComment></p>
                    <p>Join your work community</p>
                </div>
                <div className="flex flex-col justify-center items-center text-lg">
                    <p className="text-4xl"><AiOutlineFileSearch/></p>
                    <p>Find and apply to jobs</p>
                </div>
                <div className="flex flex-col justify-center items-center text-lg">
                    <p className="text-4xl"><AiFillSignal></AiFillSignal></p>
                    <p>Search company reviews</p>
                </div>
                <div className="flex flex-col justify-center items-center text-lg">
                    <p className="text-4xl"><BsCashStack></BsCashStack></p>
                    <p>Compare salaries</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection1;