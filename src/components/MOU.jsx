import { Link } from "react-router-dom";

const MOU = () => {
    return  (
        <div>
            <div>
            <div>
                <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/434d3d648550dec0bab7a6585c3d31fbeb91aa8ba572655c303e27a39cfdbe7b?apiKey=90a6ed213758449eabd6c6a72ae84f75&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/434d3d648550dec0bab7a6585c3d31fbeb91aa8ba572655c303e27a39cfdbe7b?apiKey=90a6ed213758449eabd6c6a72ae84f75&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/434d3d648550dec0bab7a6585c3d31fbeb91aa8ba572655c303e27a39cfdbe7b?apiKey=90a6ed213758449eabd6c6a72ae84f75&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/434d3d648550dec0bab7a6585c3d31fbeb91aa8ba572655c303e27a39cfdbe7b?apiKey=90a6ed213758449eabd6c6a72ae84f75&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/434d3d648550dec0bab7a6585c3d31fbeb91aa8ba572655c303e27a39cfdbe7b?apiKey=90a6ed213758449eabd6c6a72ae84f75&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/434d3d648550dec0bab7a6585c3d31fbeb91aa8ba572655c303e27a39cfdbe7b?apiKey=90a6ed213758449eabd6c6a72ae84f75&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/434d3d648550dec0bab7a6585c3d31fbeb91aa8ba572655c303e27a39cfdbe7b?apiKey=90a6ed213758449eabd6c6a72ae84f75&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/434d3d648550dec0bab7a6585c3d31fbeb91aa8ba572655c303e27a39cfdbe7b?apiKey=90a6ed213758449eabd6c6a72ae84f75&"
                className="w-full aspect-[2.94] max-md:max-w-full"
                />
            </div>
            <div className="bg-[#2D6396]">
                    <ul className="flex justify-center text-[#E5E5E5]">
                        <li className="p-3 border-r-[1px] border-l-[1px] border-solid border-0 px-5">
                            <Link to={"/about-library"}>
                                About Library
                            </Link>
                            
                        </li>
                        <li className="p-3 border-r-[1px] border-solid border-0 px-10 cursor-pointer">
                            <Link to={"/vision-mission"}>
                                Vision Mission
                            </Link>
                            
                        </li>
                        <li className="p-3 border-r-[1px] border-solid border-0 px-10 cursor-pointer ">
                            <Link to={"/library-rules"}>
                                Library Rules
                            </Link>
                            
                        </li>
                        <li className="p-3 border-r-[1px] border-solid border-0 px-10 cursor-pointer">
                            <Link to={"/library-facilities"}>
                                Library Facilities
                            </Link>                            
                        </li>
                        <li className="p-3 border-r-[1px] border-solid border-0 px-10 cursor-pointer">
                            <Link to={"/library-staff"}>
                                Library Committee
                            </Link>                            
                        </li>
                        <li className="p-3 border-r-[1px] border-solid border-0 px-10 cursor-pointer bg-[#1B305C]">
                            <Link to={"/mou"}>
                                M.O.U
                            </Link>                            
                        </li>
                        <li className="p-3 border-r-[1px] border-solid border-0 px-10 cursor-pointer"> 
                            <Link to={""}>
                                Library Staff
                            </Link>
                            
                        </li>
                    </ul>
                </div>
            </div>
            <div>
            <div className="self-start mt-24 ml-20 text-5xl font-medium leading-6 text-cyan-700 max-md:mt-10 max-md:ml-2.5 max-md:text-4xl">
                M.O.U
            </div>
            <div className="justify-center items-start pt-8 pr-16 pb-60 pl-20 mt-8 w-full text-xl leading-8 border-b border-solid border-neutral-200 text-neutral-800 max-md:px-5 max-md:pb-10 max-md:max-w-full">
                The Central Library of Dr. Bhimrao Ambedkar University has signed MOUs
                INFLIBNET and DELNET.
            </div>
            </div>
        </div>
    )
};

export default MOU;