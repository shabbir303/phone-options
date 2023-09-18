import { useEffect, useState } from "react";
import PriceOp from "../PriceOp/PriceOp";


const PriceOptions = () => {
    const [priceOptions, setPriceOptions] = useState([]);
    useEffect(()=>{
        fetch("options.json")
        .then(res=>res.json())
        .then(data=>setPriceOptions(data));
    }, [])
    return (

        <>
        <h1 className="mt-[20px] text-[30px] font-[600] ">Best Prices in the Town</h1>
        <div className="grid grid-cols-3 gap-[50px] mt-5  ">
            {
                priceOptions.map(singleOptions =><PriceOp  key={singleOptions.id} option={singleOptions}></PriceOp> )
            }
        </div>
        </>
    );
};

export default PriceOptions;