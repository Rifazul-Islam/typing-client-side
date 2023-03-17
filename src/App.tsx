
import Banner from './component/Banner';
import Footer from './component/Footer';
import Navber from './component/Navber';
import RestartButton from './component/RestartButton'
import Result from './component/Result';
import Section1 from './component/Section1';
import Section2 from './component/Section2';
import Section3 from './component/Section3';
import UseTypings from './component/UseTypings';
import useEngine from './hooks/useEngine';
import {calculateAccuracyPercentage} from './utils/helpers'



function App() {

 const {state, words,timeLeft, typed, errors,restart,totalTyped} = useEngine();

  return (
   <div>
     <>
      <div className='pt-2'>
      <Navber></Navber>
      </div>

      <div className='mb-2'>
        <Banner></Banner>
      </div>

      <div className='mb-2'>
        <Section2></Section2>
      </div>

   <div  className=' mx-4 pt-2 grid place-items-center bg-slate-800 px-4 tracking-wider font-mono'>
   <CoundownTimer timeLeft={timeLeft}/>
     
     <WordsContainer> 
      <GeneratedWords words={words} />
      <UseTypings className="absolute inset-0"
        words={words}
      userInput={typed}/>
      </WordsContainer>
 
      <RestartButton
      className={"mx-auto mt-10 text-slate-500"}
      onRestart={restart}
       />
 
    <div className=' h-36'>
       <Result  
     
      state = {state}
      className=""
      errors={errors}
      accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
      total = {totalTyped}
      />
    </div>
      
     
    
   </div>
     
    </>

    <Section3></Section3>

      <Section1></Section1>

    
     <Footer></Footer>
   </div>
  );
};


const WordsContainer = ({children}: {children : React.ReactNode}) => {
  return (
    <div className="relative text-3xl max-w-xl leading-relaxed
     break-all mt-3">
           {children}
    </div>
  )
}

const GeneratedWords = ({words}: {words:string}) =>{
  return <div className='text-slate-500'> {words} </div>
}

const CoundownTimer = ({timeLeft}: {timeLeft:number})=>{
   return <div>
       <div> 
      <h1 className='text-green-500 mb-5 mt-3 text-5xl '> Test your typing skills</h1>
       </div>
    <div className=' text-yellow-500 font-medium text-center text-4xl'> Time: {timeLeft} </div>
   </div>
}


export default App;
