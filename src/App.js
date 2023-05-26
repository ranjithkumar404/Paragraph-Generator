import { useState } from "react";
import data from './data'

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const submit=(e)=>{
    e.preventDefault()
    let x=count
  if(x<0)
  x=1
  if(x >24)
  x=24
     setText(data.slice(0,x))
    
  }
  return (
    <div className="App bg-slate-500 p-2  flex item-center justify-center ">
      <div className="space-y-6 w-[700px] mx-auto">
        <p className="text-center">Paragraph Generator</p>
        <form onSubmit={submit} className="flex items-center justify-center space-x-8" action="">
         <label htmlFor="">
            <input onChange={(e)=>{setCount(e.target.value
              )}}  value={count} type="number" />
         </label>
          <button >Generate</button>
        </form>
          <p className="grid gap-2">{
            text.map((i,a) => {
              return (
                <div key={a}>
                  <p>{i}</p>
                </div>
              )
            })


          }</p>
        
      </div>
    </div>
  );
}

export default App;
