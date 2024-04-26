import { Link } from "react-router-dom";

const AboutLibrary = () => {
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
                        <li className="p-3 border-r-[1px] border-l-[1px] border-solid border-0 px-5 bg-[#1B305C]">
                            <Link to={"/about-library"}>
                                About Library
                            </Link>
                            
                        </li>
                        <li className="p-3 border-r-[1px] border-solid border-0 px-10 cursor-pointer">
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
                            <Link to={"/library-staff"}>
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
            <div className="px-40">
                <div className="self-start mt-24 ml-20 text-5xl font-medium leading-6 text-cyan-700 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-4">
                    About <span className="text-cyan-700">Central Library</span>
                </div>
                <div className="items-center px-16 pt-6 pb-16 mt-9 w-full text-md leading-4 border-b border-solid border-neutral-200 text-neutral-800 max-md:px-5 max-md:max-w-full">
                    The heart of any academic institution lies within its library and the
                    quality of its literary resources. Dr. B. R. Ambedkar University prides
                    itself on its exceptional library services. The university boasts a
                    Central Library located at the Paliwal Campus, extending to 3 more
                    campus libraries including Sanskriti Bhawan at Civil lines, Chalesar
                    Campus and Ambedkar Bhawan at Khandari Campus. These facilities ensure
                    that students have access to a vast array of academic materials,
                    fostering an environment conducive to learning and research. As it
                    embraces the digital age, the Central Library remains at the forefront
                    of innovation, continually enhancing its offerings. Plans for future
                    upgrades include digitization, implementation of RFID technology, and
                    expansion of e-resources. With its dedication to academic excellence and
                    adaptability to changing times, the Central Library stands as a beacon
                    of intellectual curiosity and discovery.
                    <br />
                    Establishment: The Central Library was established in 1927 within the
                    university premises and later relocated to its current building in 1953.
                    <br />
                    <br />
                    <span className="text-4xl font-medium text-cyan-700">
                    Library Space:
                    </span>
                    <br />
                    <span className="leading-5">
                    Spanning an impressive 2500 square meters across three floors, the
                    Central Library provides ample space for academic endeavors.
                    </span>
                    <br />
                    <br />
                    <span className="text-4xl font-medium text-cyan-700">
                    Reading Room:{" "}
                    </span>
                    <br />
                    <span className="leading-5">
                    With dedicated reading halls totaling 350 square meters, students and
                    scholars have tranquil spaces to engage with their studies.
                    </span>
                    <br />
                    <br />
                    <span className="text-4xl font-medium text-cyan-700">
                    Total Collection:{" "}
                    </span>
                    <br />
                    <span className="leading-5">
                    The library houses a comprehensive collection comprising 1,67,800
                    items, including approximately 1,40,000 books, 14,000 doctoral
                    dissertations, and 12,000 bound back volumes of periodicals.
                    Additionally, patrons benefit from access to full-text electronic
                    journals from seven renowned publishers, alongside approximately 100
                    gifted journals.
                    </span>
                    <br />
                    <br />
                    <span className="text-4xl font-medium text-cyan-700">
                    Operating Hours:{" "}
                    </span>
                    <br />
                    <span className="leading-5">
                    Except for 2nd Saturdays, Sundays, and government holidays, the
                    library remains open throughout the year, ensuring continuous access
                    to its resources.
                    </span>
                    <br />
                    <br />
                    <span className="text-4xl font-medium text-cyan-700">
                    Book Issuance:{" "}
                    </span>
                    <br />
                    <span className="leading-5">
                    The library operates a structured system for book issuance, with
                    varying quotas and durations based on membership categories, ranging
                    from faculty to retired teachers.
                    </span>
                    <br />
                    <br />
                    <span className="text-4xl font-medium text-cyan-700">
                    Public Library Facilities:{" "}
                    </span>
                    <br />
                    <span className="leading-5">
                    Since 1998, the Central Library of the University has expanded its
                    services beyond Institute and Affiliated Colleges to encompass
                    individuals from society at large, offering membership to anyone
                    seeking to utilize its resources.
                    </span>
                </div>

            </div>
        </div>
    )
};

export default AboutLibrary;