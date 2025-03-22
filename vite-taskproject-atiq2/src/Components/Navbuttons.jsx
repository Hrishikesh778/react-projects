import { Link } from "react-router-dom"

function Navbuttons() {

    return (
        <>
            <div class="logos bg-[#eff3f6] overflow-x-auto scrollbar-hide  h-[auto] flex">
                {/* <div class="logos-slide"> */}
                 <div className=" m-[20px]"><Link to='/pages/Menstrual'><button class="bg-white text-nowrap hover:bg-[#107ab4] text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded">Menstrual Info</button></Link></div>
                 <div className=" m-[20px]"><Link to='/pages/Obstetric'><button class="bg-white text-nowrap hover:bg-[#107ab4] text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded ">Obstetric History</button></Link></div>
                 <div className=" m-[20px]"><Link to='/pages/Physical'>  <button class="bg-white text-nowrap hover:bg-[#107ab4] text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded ">Physical Examination</button></Link></div>
                 <div className=" m-[20px]"><Link to='/pages/LabTests'>  <button class="bg-white text-nowrap hover:bg-[#107ab4] text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded ">Lab Tests and Imaging</button></Link></div>
                 <div className=" m-[20px]"><Link to='/pages/PastMedication'>  <button class="bg-white text-nowrap hover:bg-[#107ab4] text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded ">Past Medication</button></Link></div>
                 <div className=" m-[20px]"><Link to='/pages/Medicine'>  <button class="bg-white text-nowrap hover:bg-[#107ab4] text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded ">Medicine</button></Link></div>
                 <div className=" m-[20px]"><Link to='/pages/Diet'><button class="bg-white text-nowrap hover:bg-[#107ab4] text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded ">Diet Plan</button></Link></div>
                 <div className=" m-[20px]"><Link to='/pages/Advice'><button class="bg-white text-nowrap hover:bg-[#107ab4] text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded ">Advice</button></Link></div>
                 <div className=" m-[20px]"><Link to='/pages/BloodGroup'><button class="bg-white text-nowrap hover:bg-[#107ab4] text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded ">Blood Group</button></Link></div>
                 <div className=" m-[20px]"><Link to='/pages/FullBody'>  <button class="bg-white text-nowrap hover:bg-[#107ab4] text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded ">Full Body Test</button></Link></div>
                 <div className=" m-[20px]"><Link to='/pages/XRay'>  <button class="bg-white text-nowrap hover:bg-[#107ab4] text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded ">X Ray</button></Link></div>
                 <div className=" m-[20px]"><Link to='/pages/BloodTest'>  <button class="bg-white text-nowrap hover:bg-[#107ab4] text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded ">Blood Test</button></Link></div>
                {/* </div> */}
            </div>
        </>
    )

}

export default Navbuttons