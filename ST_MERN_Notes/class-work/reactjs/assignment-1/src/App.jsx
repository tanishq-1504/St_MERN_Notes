import { useState } from "react";
import Details from "./components/Details";
import showExtra from "./components/showExtra";

function App() {

  const [show, setShow] = useState(false);
  const [extra, setextra] = useState(false);
  return (
    <div>
      <>
      <button onClick={() => setShow(s => !s)} className="cursor-pointer px-5 py-0.75 bg-red-600 text-white rounded-lg hover:bg-red-700">
        {show ? "Hide" : "Show"} Details
      </button>
        {show && <p>Details go here.</p>}
        {show && <Details />}
      </>
      <>
      <button onClick={() => setextra(s => !s)} className="cursor-pointer px-5 py-0.75 bg-red-600 text-white rounded-lg hover:bg-red-700">
        {show ? "Show" : "Extra"} Extra
      </button>
      {extra && <p>Show Extra go here.</p>}
      {extra && <showExtra />}
      </>
      

    </div>
  )
}

export default App;
