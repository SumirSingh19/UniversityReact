import { Link } from "react-router-dom";
import HOME from  "../assets/icons/home.png"

const Header = () => {

    return (
        <div className="flex flex-col">
            <div className="flex p-4 items-center gap-5 text-[#2D6396]">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/04e0cd858c6ffd5b766231770be65e10b1f4961c0ac31b9a23eae301b694cbad?apiKey=90a6ed213758449eabd6c6a72ae84f75&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/04e0cd858c6ffd5b766231770be65e10b1f4961c0ac31b9a23eae301b694cbad?apiKey=90a6ed213758449eabd6c6a72ae84f75&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/04e0cd858c6ffd5b766231770be65e10b1f4961c0ac31b9a23eae301b694cbad?apiKey=90a6ed213758449eabd6c6a72ae84f75&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/04e0cd858c6ffd5b766231770be65e10b1f4961c0ac31b9a23eae301b694cbad?apiKey=90a6ed213758449eabd6c6a72ae84f75&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/04e0cd858c6ffd5b766231770be65e10b1f4961c0ac31b9a23eae301b694cbad?apiKey=90a6ed213758449eabd6c6a72ae84f75&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/04e0cd858c6ffd5b766231770be65e10b1f4961c0ac31b9a23eae301b694cbad?apiKey=90a6ed213758449eabd6c6a72ae84f75&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/04e0cd858c6ffd5b766231770be65e10b1f4961c0ac31b9a23eae301b694cbad?apiKey=90a6ed213758449eabd6c6a72ae84f75&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/04e0cd858c6ffd5b766231770be65e10b1f4961c0ac31b9a23eae301b694cbad?apiKey=90a6ed213758449eabd6c6a72ae84f75&"
                    className="shrink-0 max-w-full aspect-[1.03] w-[115px]"
                />
                <div className="flex flex-col">
                    <span className="text-3xl font-bold">
                        DR. BHIMRAO AMBEDKAR UNIVERSITY, AGRA
                    </span>
                    <span className="text-xl font-bold">
                        Formerly Agra University, Agra (Accredited Grade B++ by NAAC)
                    </span>
                </div>
            </div>
            
            <div className="flex flex-col">

            <div className="bg-[#1B305C] p-1">
                    <ul className="flex text-white justify-center gap-5">
                        <li className="flex items-center gap-2 cursor-pointer">
                            <img src={HOME} className="w-5" alt="" />
                            <Link to={"/"}>
                                Home
                            </Link>
                            
                        </li>
                        <li className="cursor-pointer">
                            <Link to={"/about-library"}>
                                Library Profile
                            </Link>
                            
                        </li>
                        <li className="cursor-pointer">
                            Digital Library
                        </li>
                        <li className="cursor-pointer">
                            Online Catalogue
                        </li>
                        <li className="cursor-pointer">
                            Online Facitilies
                        </li>
                        <li className="cursor-pointer">
                            In House Data
                        </li>
                        <li className="cursor-pointer">
                            Publications
                        </li>
                        <li className="cursor-pointer">
                            Gallery
                        </li>
                        <li className="cursor-pointer">
                            Other link
                        </li>
                        <li className="cursor-pointer">
                            Contact Us
                        </li>
                    </ul>
                </div>              
                               
            </div>
           
            
            
        </div>
    )
};

export default Header;