/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { GiCheckMark } from 'react-icons/gi'
const PriceOp = ({option}) => {
    console.log(option);
    const{name, features, price }=option;
    return (
        <div className="bg-[#223321] rounded-xl" >
            
            <div className='flex flex-col '>
            <h1 className="text-[20px] font-[500] text-center my-3 text-white  ">{name}</h1>
            <h1 className="text-[40px] text-center font-bold mb-[30px] text-[#E33B7A] " >{price}</h1>
            <div className="ml-[100px]  flex-grow ">
                {features.map((eachFeature)=><li className="my-[5px] list-none flex  gap-[10px] text-white " ><GiCheckMark className='text-[#236066]'></GiCheckMark>{eachFeature}</li>)
            
            }</div>
            </div>
            <button className='bg-[#75719E] text-white hover:bg-[#423a97] text-center flex justify-center items-center mx-auto mb-[20px]  py-[5px] px-[60px] rounded-lg mt-[30px]'> Buy Now</button>
        </div>
    );
};

export default PriceOp;