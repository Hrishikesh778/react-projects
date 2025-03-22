import { faEnvelope, faLanguage, faPaperPlane, faPrint } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function Select() {




    return (
        <>
            <div className="bg-[#eff3f6] h-[70vh] flex justify-center items-center">

                <div className="w-[90%] h-[90%] bg-white rounded-[25px] flex justify-center items-center">

                    Welcome
                </div>
            </div>

            <div className="h-[100px] w-[100%] bg-white flex justify-around items-center">
                <div className="w-[20%] h-[90%] bg-white flex justify-around items-center">
                    <FontAwesomeIcon icon={faPrint} size="3x" className="text-[#3f9d8d] cursor-pointer hover:text-[#3f9d8d]" />
                    <FontAwesomeIcon icon={faPaperPlane} size="3x" className="text-[#3f9d8d] cursor-pointer hover:text-[#3f9d8d]" />
                    <FontAwesomeIcon icon={faEnvelope} size="3x" className="text-[#3f9d8d] cursor-pointer hover:text-[#3f9d8d]" />
                </div>
                <div className="w-[50%] h-[90%]">
                </div>
                <div className="w-[auto] h-[90%] bg-white flex items-center">
                    <span className="flex justify-center items-center"><FontAwesomeIcon icon={faLanguage} size="3x" className="text-[#3f9d8d] cursor-pointer hover:text-[#3f9d8d] m-[5px]" /><p><b className="text-[#3f9d8d] ">English</b></p></span>
                    
                </div>

            </div>
        </>
    )
}

export default Select