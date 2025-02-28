import React from 'react'
import { FaOpencart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import './QuickSelection.css';


const QuickSelection = () => {
    
  return (
    <div className='quick-selection-container'>
        <ul>
            <li className="quick-selection-icon" ><FaOpencart/> </li>
            <li className="quick-selection-icon" ><MdOutlineRemoveRedEye/></li>
            <li className="quick-selection-icon" ><FaRegHeart/></li>
        </ul>
    </div>
  )
}

export default QuickSelection