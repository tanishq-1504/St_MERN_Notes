import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedOut, setLoggedOut] = useState(false);
  const [remember, setRemember] = useState(false);
  const handleClick = () => {
    setIsLoggedIn((previousState) => !previousState);
  };
  const handleLogout=()=>{
    setIsLoggedIn(false)
    setRemember(false)
    console.log("Remember:",remember);
  }
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <button onClick={handleLogout} className="cursor-pointer px-5 py-0.75 bg-red-600 text-white rounded-lg hover:bg-red-700">Logout</button>
          <p>Welcome Back</p>
    
        </div>
      ) : (
        <div>
          <button onClick={() => setIsLoggedIn(true)} className="cursor-pointer px-5 py-0.75 bg-red-600 text-white rounded-lg hover:bg-red-700">Login</button><br></br>
          <input type="checkbox" onChange={() => setRemember(true)} />
          <label>RememberMe</label>
          {console.log(remember)}
        </div>
      )}
    </div>
  );
}
export default App;