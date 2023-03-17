
import {motion} from "framer-motion"
import { State } from "../hooks/useEngine";
import { formatPercentage } from "../utils/helpers";

const Result = ({
     state,
    errors,
    accuracyPercentage,
    total,
    className,
}: {
   
   state : State;
    errors:number;
    accuracyPercentage:number;
    total:number;
    className?: string;

}) => {

    const intial = {opacity:0};
    const animate = {opacity:1};
    const duration = {duration:0.3};

     if(state !== "finish"){
        
          return null ;
     };
    return (
        <motion.ul 
        className={`flex flex-col items-center text-yellow-500 space-y-3 ${className}`}
        > 
          <motion.li
          initial={intial}
        animate={animate}
        className="text-xl font-semibold"
        transition={{...duration, delay:0}}

          > Result </motion.li>

   <motion.li
   initial={intial}
   animate={animate}
   transition={{...duration, delay:0.5}}
          
          > Accuracy : {formatPercentage(accuracyPercentage)}</motion.li>

           <motion.li

          initial={intial}
          animate={animate}
         transition={{...duration, delay:1}}
         className="text-red-500"
             
             >Errors : {errors} </motion.li>
          <motion.li

        initial={intial}
        animate={animate}
        transition={{...duration, delay:1.4}}
          
          > Typed : {total} </motion.li>      
        </motion.ul>
    )
}

export default Result;