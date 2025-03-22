import { faEnvelope, faEraser, faLanguage, faMailBulk, faPaperPlane, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { use, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Page() {
    let [link, setlink] = useState("");
    let [selectedSection, setSelectedSection] = useState('Breast Examination');
    let param = useParams()
    // debugger
    // console.log(param.page)


    useEffect(() => {
        setlink(param.page)

    }, [param])


    let examinations = [
        { name: 'Breast Examination', description: 'Adding the breast Examination for testing' },
        { name: 'Abdominal Examination', description: 'Free the Abdominal shakes' },
        { name: 'Per Speculum', description: 'Extra saving' },
        { name: 'Vaginal Examination', description: 'No Observations' }
    ];

    return (
        <>
            <div className="bg-[#eff3f6] h-[70vh] flex justify-center items-center mt-[-27px]">

                <div className="w-[90%] h-[90%] bg-white rounded-[25px] flex">
                    {(param.page == "Physical") ?
                        <>
                            <div className="h[100%] w-[50%] bg-white rounded-l-[25px]">

                                <div className="flex justify-between m-[20px]">
                                    <div><b>Physical Examination</b></div>
                                    <div><FontAwesomeIcon icon={faEraser} /></div>
                                </div>

                                <div className="overflow-scroll scrollbar-hide h-[85%]">

                                    {
                                        examinations.map((val) => {
                                            return (
                                                <>
                                                    <div className={`flex m-[20px] h-[100px] bg-[#eef9ff] rounded-[20px] ${selectedSection === val.name ? 'bg-[#eef9ff]' : 'bg-gray-100'}`} onClick={() => { setSelectedSection(val.name) }}>
                                                        <div className="w-[30%] flex justify-start items-center border-r-[1px] m-[20px]"><b>{val.name}</b></div>
                                                        <div className="flex justify-start items-center m-[20px]"><p>{val.description}</p></div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }


                                </div>

                            </div>


                            <div className="h[100%] w-[50%] bg-[#eef9ff] rounded-r-[25px]" >
                                <div className="flex justify-between m-[20px]">
                                    <div><b>{selectedSection}</b></div>
                                    <div><FontAwesomeIcon icon={faEraser} /></div>
                                </div>

                                <div className="flex m-[20px] h-[100px] bg-[#eef9ff] rounded-[10px]">
                                    <textarea className="rounded-[10px] w-[100%] p-[5px] resize-none"></textarea>
                                </div>
                            </div>

                        </>

                        : <>

                            <div className="h[100%] w-[50%] bg-white rounded-l-[25px]">

                                <div className="flex justify-between m-[20px]">
                                    <div><b>{link} Examination</b></div>
                                    <div><FontAwesomeIcon icon={faEraser} /></div>
                                </div>
                            </div>

                            <div className="h[100%] w-[50%] bg-[#eef9ff] rounded-r-[25px]" >

                            </div>
                        </>
                    }
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
                    <button class="bg-white text-nowrap border-solid border-[2px] hover:bg-[#3f9d8d] text-[#3f9d8d] font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded-[50px] m-[20px] ">End Constant</button>
                    <button class="bg-white text-nowrap border-solid border-[2px] hover:bg-[#3f9d8d] text-[#3f9d8d] font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded-[50px] m-[20px] ">Save</button>
                </div>

            </div>
        </>
    )
}

export default Page