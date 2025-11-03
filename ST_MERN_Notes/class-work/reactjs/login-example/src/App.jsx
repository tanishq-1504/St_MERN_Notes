import { useState } from "react";
import PrimaryButton from "../../conditional-rendering/src/PrimaryButton";

function App(){
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  return(
    <div>
      {
        isLoggedIn ?(
          <p>Welcome Back, Student</p>
        ):(
          <PrimaryButton onSmash={() => setIsLoggedIn(true)}>
            Login
          </PrimaryButton>
        )
      }
    </div>
  )
}

export default App;