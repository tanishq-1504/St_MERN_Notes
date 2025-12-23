import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import AppwriteAccount from "../appwrite/Account.services";


function PublicRoute(props) {
    const { children } = props;

    const [user, setUser] = useState(null);
    const [isCheckingUser, setIsCheckingUser] = useState(true)
    const appwriteAccount = new AppwriteAccount();

    async function fetchUser(){
        try{
            const appwriteUser = await appwriteAccount.getAppwriteUser();
            setUser(appwriteUser);
        }catch(error){
            console.log(error.message)
        }finally{
            console.log("Inside Finally block")
            setIsCheckingUser(false);
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])

    if(isCheckingUser){
        return(
            <h1>Loading.....</h1>
        )
    }

    if(user){
        return (
            <Navigate to="/dashboard" />
        )
    }

    return children;
}

export default PublicRoute;