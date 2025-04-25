import { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function Header() {
  let {user,setShowLogin} = useContext(AppContext);
  const navigate = useNavigate()
const onClickHandler  =() => {
  if(user) {
    navigate("/result")
  }
  else {
    setShowLogin(true)
  }
}

  return ( 
    <div className='flex flex-col  justify-center item-center text-center my-20'>
      <div className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded full border  hover:scale-105 border-neutral-500 transition-all duration-700 ">
        <p>best tranform word into arts</p>
        <img src={assets.star_icon} alt="" />
      </div>

      <h1 className='text-4xl max-w-[300px] sm:text-6xl sm:max-w-[590px] mx-auto mt-10 text-center'>Transform Words into <span className='text-red-600 font-bold'>Art</span> in seconds </h1>
      <p className='text-center max-w-xl mx-auto mt-5'
      >Unleash boundless creativity with AI – Turn your thoughts into stunning visual art instantly. Just type, and watch the magic unfold.</p>
      <button className='sm:text-lg text-white bg-pink-700 w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full' onClick={onClickHandler}>Generate images
        <img src={assets.star_group} className="h-6" />
      </button>
      <div className="flex flex-wrap justify-center mt-16 gap-3">
        {
          Array(6).fill('').map((item,idx) => (
            <img src={idx%2 ==0 ?  assets.sample_img_2 : assets.sample_img_1} width={70} key={idx}className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10'/>
          ))
        }
      </div>
      <p className="mt-2 text-neutral-600">
        Generate images from ImageG
      </p>

    </div>
   );
}

export default Header;