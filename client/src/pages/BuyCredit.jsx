import { assets, plans } from "../assets/assets";

function BuyCredit() {
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>Our subscription</button>
      <h1 className='text-center text-3xl font-bold mb-6 sm:mb-10'>Choose the subscription</h1>
      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {
          plans.map((item, index) => (
            <div key={index}  className='bg-pink-50 drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all
            duration-500'>
              <img src={assets.logo_icon} alt="" width={40}/>
              <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
              <p className='text-sm'>{item.desc}</p>
              <p className='mt-6'><span className='text-3xl font-medium'>₹{item.price}</span> / {item.credits} credits</p>
              <button onClick={()=>paymentRazorpay(item.id)} className='w-full bg-blue-600 text-white mt-8 text-sm rounded-full py-2.5 min-w-52'>purchase</button>

            </div>
          ))
        }
      </div>
    </div>
  );
}

export default BuyCredit;