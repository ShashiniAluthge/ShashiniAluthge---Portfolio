import successIcon from '../assets/success.png';
import closeIcon from '../assets/Close.png';

interface SuccessModalProp{
    onclose:()=>void
}

const SuccessModal = ({onclose}:SuccessModalProp) => {
  return (
    <div className="bg-[var(--gradient_2)] md:w-[50%] w-auto h-16 flex  items-center justify-between fixed bottom-6 right-4 text-[var(--secondary)] rounded-lg">
        <div className='flex ml-3'>
            <img src={successIcon} className='w-6 h-6'/>
            <p className='ml-4 text-md'>Message Sent Successfully !</p>
        </div>
        <button className='mr-3 hover:bg-[var(--gradient_1)] rounded-lg p-1 hover:shadow-xl hover:cursor-pointer hover:shadow ' onClick={onclose}>
            <img src={closeIcon} className='w-6 h-6'/>
        </button>

    </div>
  )
}


  

export default SuccessModal