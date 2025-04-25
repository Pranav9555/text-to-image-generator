import { stepsData } from "../assets/assets";

function Steps() {
  return (
    <div className='flex flex-col items-center justify-center my-32'>
      <h1 className='text-black-700 inline-flex text-3xl sm:text-0xl font-bold text-center gap-2 bg-white px-28 py-4 rounded-full border hover:scale-105 border-neutral-500 transition-all duration-700'>How AI magic works</h1>
      <p className='text-lg text-gray-600 mb-8'>transform text into stunning images</p>
      <div className='space-y-4 w-full max-w-3xl text-sm'>
        {
          stepsData.map((item, index) => (
            <div key={index} className='flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-lg'>
              <img src={item.icon} width={40} />
              <h2 className='text-xl font-medium'>{item.title}</h2>
              <p className='text-orange-500'>{item.description}</p>

            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Steps;