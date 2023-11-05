import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <div className='h-screen flex flex-col space-y-6 justify-center items-center'>
                <img src="https://i.ibb.co/YyP0Fwy/error.png" alt="" />
                <button className="btn btn-primary"><Link to='/'>Home</Link></button>
            </div>
            
        </div>
    );
};

export default Error;