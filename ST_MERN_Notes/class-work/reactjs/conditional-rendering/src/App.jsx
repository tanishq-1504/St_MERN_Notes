import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

function App(){
  const [show,setShow] = useState(false);

  function handleSecretRevelation(){
    console.log("Primary button component has been clicked!")

    setShow(!show)
  }
  return(
    <dev>
      <PrimaryButton
      onSmash={handleSecretRevelation}>
      {show ? "Hide" : "Show"}
      </PrimaryButton>
      {
        show && (
          <p>I am the Ghost</p>
        )
      }
    </dev>
  )
}

export default App;