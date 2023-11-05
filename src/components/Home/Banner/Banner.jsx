import BannerCards from "./BannerCards";



const Banner = () => {
    

    return (
        <>
            <div className="pt-5 lg:flex items-center mx-6">
                <div className="mt-6 w-full flex-1 lg:mt-0">
                    <img className="" src="https://i.ibb.co/bdDyCLj/photo-1524749292158-7540c2494485.jpg" />
                </div>
                <div className="px-5 sm:px-10 md:px-10 md:flex lg:block lg:w-1/2 lg:max-w-3xl lg:mr-8 lg:px-20 text-center ">
                    <div className="md:w-1/2 md:mr-10 lg:w-full lg:mr-0">
                        <h1 className="text-3xl xl:text-4xl font-black">
                            Hire a Designer
                        </h1>
                        <p className="mt-4 xl:mt-2">
                            World className Designers, just for you on contract, full-time or part-time, whatever you need.
                        </p>
                    </div>

                    <div className="flex-1">
                        <div className="relative mt-4 md:mt-0 lg:mt-4">
                            <input type="text" className="w-full border bg-gray-100 px-4 py-4 text-sm rounded pl-12" placeholder="" />
                        </div>
                        <div >
                            <button className=" mt-5 w-1/2 border border-transparent rounded font-semibold text-sm px-5 py-4 bg-indigo-500 text-gray-100 hover:bg-indigo-600 hover:text-gray-200">Find Designers</button>
                        </div>
                    </div>
                </div>

            </div>

            <BannerCards></BannerCards>
            
        </>
    );
};

export default Banner;