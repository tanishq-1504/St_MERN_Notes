import { useEffect, useState } from "react";
import AppwriteAccount from "./appwrite/Account.services";
import { Link, useNavigate } from "react-router";
import useAuthStore from "./store/authStore";

function App() {
  const appwriteAccount = new AppwriteAccount();
  const navigate = useNavigate();
  
  const currentUser = useAuthStore((state)=> state.currentUser) // schedules the component re-render
  const isCheckingUser = useAuthStore((state) => state.isCheckingUser)
  const setCurrentUser = useAuthStore((state) => state.setCurrentUser)
  const setIsCheckingUser = useAuthStore((state) => state.setIsCheckingUser)

  console.log("Component Renders...")
  // console.log(currentUser); // null
  console.log(setCurrentUser); // fn body

  async function getCurrentUser() {
    
    const user = await appwriteAccount.getAppwriteUser()
    console.log("Current User from appwrite: ", user);
    setCurrentUser(user); 
    if (!user) {
      console.log("User Not Found! at / home route")
      navigate("/login");
    }
    console.log("After calling the function from zustand")
    setIsCheckingUser();
  }

  // componentDidMount()
  useEffect(() => {
    getCurrentUser();
  }, []);

  if (isCheckingUser) {
    return (
      <>
        <h1 className="font-bold text-5xl">Loading...</h1>
      </>
    )
  }

  return (
    <div className="w-full h-screen bg-amber-500">
      <div className="pl-10 pt-7">
        <nav className=" rounded-full p-3 w-40 flex items-center gap-5">
      
        {
          currentUser.labels.includes('admin') && <Link to="/dashboard">My Dashboard</Link>
        }
        
        <Link to="/profile" className="bg-amber-700 pl-10 pr-10">Student Profile</Link>

        <Link to="/teacher-profile">Teacher-Profile</Link>
        </nav>
      </div>
    </div>
  )
}

export default App;