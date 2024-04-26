import { Link } from "react-router-dom";

const VisionMission = () => {
    return (
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
                        <li className="p-3 border-r-[1px] border-solid border-0 px-10 cursor-pointer bg-[#1B305C]">
                            <Link to={"/vision-mission"}>
                                Vision Mission
                            </Link>
                            
                        </li>
                        <li className="p-3 border-r-[1px] border-solid border-0 px-10 cursor-pointer">
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
                            <Link to={"library-staff"}>
                                Library Committee
                            </Link>                            
                        </li>
                        <li className="p-3 border-r-[1px] border-solid border-0 px-10 cursor-pointer">
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
                <div className="flex justify-center items-center px-16 py-10 text-3xl leading-9 border-b border-solid border-neutral-200 text-neutral-800 max-md:px-5">
                <div className="flex flex-col mt-20 w-full max-w-[1424px] max-md:mt-10 max-md:max-w-full">
                    <div className="text-[#2D6396] mb-8 font-semibold">
                        VISION
                    </div>
                    <div className="text-sm flex flex-col">
                        <span>1. Bar Code based Circulation be mandatory.</span>
                        <span>2. Membership Cards having Bar Codes will be issued.</span>
                        <span>3. Computerization of all Departmental Libraries will be prionty.</span>
                        <span>4. Joining of Central and Departmental libraries through Intemet & Intranet.</span>
                        <span>5. To develop Children Section for the Students of University Model School and other school children.</span>
                        <span>6. Access of Children of Faculty and Staff Members to Library</span>
                    </div>
                    <div className="text-[#2D6396] mb-8 mt-16 font-semibold">
                        MISSION
                    </div>
                    <div className="text-sm flex flex-col">
                        <span>1. Social Responsibility for utility of Central Library for students,
                    researchers and academicians-</span>
                        <span>2. Development of good collection material through E-books and
                    E-journals-</span>
                        <span>3. To Increase Library timings for all as per need.</span>
                        <span>4. To link the library on University Website.</span>
                        <span>5. Digitization of the PhD. Thesis (Approx. 14,000) and old journals
                    (bound volumes approx- 12,000).</span>
                    
                    
                    
                    
                    
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
};

export default VisionMission;