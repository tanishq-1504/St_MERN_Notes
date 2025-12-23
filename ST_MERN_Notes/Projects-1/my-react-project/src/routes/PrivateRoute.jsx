import { useEffect } from "react";
import { Navigate } from "react-router";
import useAuthStore from "../store/authStore";
import AppwriteAccount from "../appwrite/Account.services";

function PrivateRoute(props) {
    const { children } = props;

    const currentUser = useAuthStore((state) => state.currentUser)
    const isCheckingUser = useAuthStore((state) => state.isCheckingUser)
    const setCurrentUser = useAuthStore((state) => state.setCurrentUser)
    const setIsCheckingUser = useAuthStore((state) => state.setIsCheckingUser)

    const appwriteAccount = new AppwriteAccount();

    async function getCurrentUser() {
        const user = await appwriteAccount.getAppwriteUser()
        setCurrentUser(user);
        setIsCheckingUser();
    }

    useEffect(() => {
        if (isCheckingUser) {
            getCurrentUser();
        }
    }, [isCheckingUser]);

    if (isCheckingUser) {
        return (
            <h1>Loading.....</h1>
        )
    }

    if (!currentUser) {
        return (
            <Navigate to="/login" />
        )
    }

    return children;
}

export default PrivateRoute;