import { faArrowLeft, faBookmark, faEraser, faGear, faMagnifyingGlass, faPencil } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Navbar() {
    return (
        <>
            <div className="h-[120px] w-[100%] bg-white flex justify-start items-center drop-shadow-md">
                <div className="w-[2%]">

                </div>
                <div className="w-[3%] flex justify-center items-center">
                    <FontAwesomeIcon icon={faArrowLeft} size="2x" className="h-5" />
                </div>
                <div className="w-[2%]">

                </div>
                <div className="h-[110px] w-[40%] bg-[#e8f6f6] flex items-center rounded-[20px]">
                    <div className="h-[80px] w-[80px]  bg-white rounded-[50px] border-1 border-[#3f9d8d] m-[10px] flex justify-center items-center">
                        <span className="">R</span>
                    </div>
                    <div className="h-[80%] w-[40%]  bg-[#e8f6f6] border-r-[1px] border-[#c8d6d6] flex flex-col justify-center" >
                        <div className="h-[50%] m-[10px]">
                            <b><h1>Rahul-03 (45 years - Male) <FontAwesomeIcon icon={faPencil} className="text-[#3f9d8d] cursor-pointer hover:text-[#3f9d8d]" /></h1></b>
                        </div>
                        <div className="h-[50%] m-[10px]">
                           <b> <h1 className="text-[#3f9d8d] cursor-pointer hover:text-[#3f9d8d]">Patient history</h1></b>
                        </div>


                    </div>
                    <div className="h-[80%] w-[40%]  bg-[#e8f6f6] flex justify-center items-center ">
                        <div className="relative ml-4 w-[auto]">
                            <input
                                type="search"
                                placeholder="Search Patient"
                                className="bg-white w-full p-2 pr-10 border border-gray-400 rounded-[50px] focus:outline-none focus:border-green-600"
                            />
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" size={18} />
                            {/* <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" size={18} /> */}
                        </div>
                    </div>
                </div>
                <div className="w-[20%]">

                </div>
                <div className="h-[110px] w-[30%] bg-[#e8f6f6] flex justify-center items-center rounded-[20px]">
                    <div className="h-[80%] w-[29%] bg-[#e8f6f6] border-r-[1px] border-[#c8d6d6]  flex flex-col justify-center">
                        <div className="h-[50%] m-[10px] ">
                            <b><h1>1st</h1></b>
                        </div>
                        <div className="h-[50%] m-[10px]">
                        <b><h1 className="text-[#3f9d8d] cursor-pointer hover:text-[#3f9d8d]">Token no:2</h1></b>
                        </div>
                    </div>
                    <div className="h-[80%] w-[70%] bg-[#e8f6f6] flex justify-around items-center">

                    <FontAwesomeIcon icon={faGear} size="2x" className="text-[#3f9d8d] cursor-pointer hover:text-[#3f9d8d]"/>
                    <FontAwesomeIcon icon={faBookmark} size="2x" className="text-[#3f9d8d] cursor-pointer hover:text-[#3f9d8d]" />
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" className="text-[#3f9d8d] cursor-pointer hover:text-[#3f9d8d]"/>
                    <FontAwesomeIcon icon={faEraser} size="2x" className="text-[#3f9d8d] cursor-pointer hover:text-[#3f9d8d]"/>
                    
                    </div>
                    {/* <div className="h-[80%] w-[20%] bg-red-800">

                        hi
                    </div>
                    <div className="h-[80%] w-[20%] bg-red-800">

                        hi
                    </div>
                    <div className="h-[80%] w-[20%] bg-red-800">

                        hi
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Navbar