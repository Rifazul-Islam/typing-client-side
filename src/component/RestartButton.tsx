
import { useRef } from 'react';
import {MdRefresh} from 'react-icons/md';

const RestarButton = ({ 
    onRestart:handleRestart,
    className = "",

}: {
 
    onRestart:() => void ;
    className?: string;
    

}) => {

    const buttonRef = useRef<HTMLButtonElement>(null);

     const handleClick = ()=>{
        buttonRef.current?.blur();
        handleRestart();
     };


return (
    <button 

     ref={buttonRef}
     onClick={handleClick}
     className={`block rounded px-8 py2 text-white hover:bg-slate-700/50 ${className}`} > 
     
        <MdRefresh className="w-6 h-6"/>
     </button>
   
     );
    }


     export default RestarButton 
