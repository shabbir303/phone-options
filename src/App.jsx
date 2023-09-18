/* eslint-disable no-unused-vars */

import './App.css'
import Navbar from './components/DaisyNav/DaisyNav'
import LChart from './components/LineChart/LineChart'
// import LineChart from './components/LineChart/LineChart'
// import LineChart from './components/LineChart/LineChart'
import NAVBAR from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {


  return (
    <>
     {/* <h1 className='text-[50px] font-[600] mt-[20px] '>Price-Options</h1> */}
     {/* <Navbar></Navbar> */}
     <NAVBAR></NAVBAR>
     <PriceOptions></PriceOptions>
     <LChart></LChart>
    </>
  )
}

export default App
