import { useState } from "react";
import data from './data'

function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const submit = (e) => {
    e.preventDefault()
    let x = count
    if (x < 0) {
      x = 1
    alert("Negative Values are not accepted!!")
    }
    if (x > 21)
      x = 21
    setText(data.slice(0, x))

  }
  return (
    <div className="App p-2 mt-6  flex item-center justify-center ">
      <div className="space-y-6 w-[700px] mx-auto">
        <p className="text-center font-bold text-5xl">Paragraph Generator</p>
        <form onSubmit={submit} className="flex items-center justify-center space-x-8" action="">
          <label className=" flex space-x-4" htmlFor="Paragraph">
            <input className="w-[50px] p-1 rounded-sm bg-slate-500/10  outline-none active:outline-none" onChange={(e) => {
              setCount(e.target.value
              )
            }} value={count} type="number" />
            <p className="text-xl font-semibold">Paragraph </p>

          </label>
          <button className="bg-green-500 font-semibold text-white p-3 rounded-md" >Generate</button>
        </form>
        <p className="grid gap-2">{
          text.map((i, a) => {
            return (
              <div key={a}>
                <p className="text-xl">{a + 1}. {i}</p>
              </div>
            )
          })


        }</p>

      </div>
    </div>
  );
}

export default App;
