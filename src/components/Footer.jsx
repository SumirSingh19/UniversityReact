const Footer = () => {
    return (
      <div className="flex flex-col bg-[#212331]">
        <div className="flex justify-evenly items-center">
                <div className="">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14193.503766088037!2d78.01007465159853!3d27.207344273560924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397470ac00000001%3A0x5049a955812254cd!2sDr%20Bhimrao%20Ambedkar%20University!5e0!3m2!1sen!2sin!4v1714075823050!5m2!1sen!2sin" 
            width="200" height="150" className="p-2 rounded-lg" style={{border:0}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
        <div className="flex flex-col px-40 items-center">
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/04e0cd858c6ffd5b766231770be65e10b1f4961c0ac31b9a23eae301b694cbad?apiKey=90a6ed213758449eabd6c6a72ae84f75&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/04e0cd858c6ffd5b766231770be65e10b1f4961c0ac31b9a23eae301b694cbad?apiKey=90a6ed213758449eabd6c6a72ae84f75&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/04e0cd858c6ffd5b766231770be65e10b1f4961c0ac31b9a23eae301b694cbad?apiKey=90a6ed213758449eabd6c6a72ae84f75&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/04e0cd858c6ffd5b766231770be65e10b1f4961c0ac31b9a23eae301b694cbad?apiKey=90a6ed213758449eabd6c6a72ae84f75&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/04e0cd858c6ffd5b766231770be65e10b1f4961c0ac31b9a23eae301b694cbad?apiKey=90a6ed213758449eabd6c6a72ae84f75&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/04e0cd858c6ffd5b766231770be65e10b1f4961c0ac31b9a23eae301b694cbad?apiKey=90a6ed213758449eabd6c6a72ae84f75&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/04e0cd858c6ffd5b766231770be65e10b1f4961c0ac31b9a23eae301b694cbad?apiKey=90a6ed213758449eabd6c6a72ae84f75&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/04e0cd858c6ffd5b766231770be65e10b1f4961c0ac31b9a23eae301b694cbad?apiKey=90a6ed213758449eabd6c6a72ae84f75&"
                className="shrink-0 max-w-full aspect-[1.03] w-[80px]"
            />
            <div className="w-4/6 pb-4">
                <span className="text-[#999999] flex flex-col leading-6 text-center">
                    <span>DR. BHIMRAO AMBEDKAR UNIVERSITY,</span>
                    <span>AGRA</span>                                   
                    
                    <span className="font-bold">Formerly Agra University, Agra (Accredited Grade B++ by NAAC)</span> 
                    <span>Contact : +91 9457676361, 9412516361</span>
                    <span>E-mail: sunilkup562@gmail.com</span>                  
                    
                    
                </span>
            </div>
        </div>
        <div className="text-[#999999] pt-4 leading-4 border-solid border-l-[1px] border-[#4F4F4F] px-10 pl-32 bg-[#212331]">
            <span className="text-white">Terms & Policies</span>
            <ul className="text-[11px] leading-6">
                <li>Logo Download</li>
                <li>Copyrights</li>
                <li>Hyperlink Policy</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Disclaimer</li>
            </ul>
        </div>
        </div>
        
        <div className="flex py-2 border-t-[1px] border-[#4F4F4F] border-solid border-0 justify-between pl-10 text-[10px]"> 
            <ul className="text-[#4F4F4F] flex gap-10">
                <li>PRIVACY POLICY</li>
                <li>TERMS & CONDITIONS</li>
                <li>DISCLAIMER</li>
                <li>COOKIE POLICY</li>
            </ul>
            <span className="text-[#4F4F4F] pr-32">©SHIVAM CRESTMEDIATEK AGRA</span>
        </div>
      </div>
    )};

    export default Footer;