import { Link } from "react-router-dom"

function Navbuttons() {

    return (
        <>
            <div class="logos bg-[#eff3f6] overflow-x-auto scrollbar-hide  h-[auto] flex">
                {/* <div class="logos-slide"> */}
                 <Link to='/pages/Menstrual'><button class="bg-white text-nowrap hover:bg-[#107ab4] text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded m-[20px]">Menstrual Info</button></Link>
                 <Link to='/pages/Obstetric'><button class="bg-white text-nowrap hover:bg-[#107ab4] text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded m-[20px] ">Obstetric History</button></Link>
                 <Link to='/pages/Physical'>  <button class="bg-white text-nowrap hover:bg-[#107ab4] text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded m-[20px] ">Physical Examination</button></Link>
                 <Link to='/pages/LabTests'>  <button class="bg-white text-nowrap hover:bg-[#107ab4] text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded m-[20px]">Lab Tests and Imaging</button></Link>
                 <Link to='/pages/PastMedication'>  <button class="bg-white text-nowrap hover:bg-[#107ab4] text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded m-[20px] ">Past Medication</button></Link>
                 <Link to='/pages/Medicine'>  <button class="bg-white text-nowrap hover:bg-[#107ab4] text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded m-[20px] ">Medicine</button></Link>
                 <Link to='/pages/Diet'><button class="bg-white text-nowrap hover:bg-[#107ab4] text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded m-[20px] ">Diet Plan</button></Link>
                 <Link to='/pages/Advice'><button class="bg-white text-nowrap hover:bg-[#107ab4] text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded m-[20px] ">Advice</button></Link>
                 <Link to='/pages/BloodGroup'><button class="bg-white text-nowrap hover:bg-[#107ab4] text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded m-[20px] ">Blood Group</button></Link>
                 <Link to='/pages/FullBody'>  <button class="bg-white text-nowrap hover:bg-[#107ab4] text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded m-[20px] ">Full Body Test</button></Link>
                 <Link to='/pages/XRay'>  <button class="bg-white text-nowrap hover:bg-[#107ab4] text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded m-[20px] ">X Ray</button></Link>
                 <Link to='/pages/BloodTest'>  <button class="bg-white text-nowrap hover:bg-[#107ab4] text-black font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded m-[20px] ">Blood Test</button></Link>
                {/* </div> */}
            </div>
        </>
    )

}

export default Navbuttons