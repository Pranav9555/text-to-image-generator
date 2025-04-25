import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

function GenerateBtn() {
  let navigate  = useNavigate()
  return ( 
    <div className="pb-16 text-center">
      <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16'>See the magic. Try now</h1>
      <button className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-yellow-500 text-red-500 m-auto hover:scale-105 transition-all duration-500' onClick={() => navigate('/buy')}>
        subscription
        <img src={assets.star_group} alt="" className='h-6' />
      </button>
    </div>
   );
}

export default GenerateBtn;