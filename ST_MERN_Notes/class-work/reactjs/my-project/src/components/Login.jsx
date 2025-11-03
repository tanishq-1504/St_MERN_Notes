import { useState } from "react";
import NavBar from "../NavBar";
import { useNavigate } from "react-router-dom";

function Login() {
    console.log("Entered control form")
    let displayNameFromLogInWithGoogle = "";
    let emailFromLogInWithGoogle = "";

    const [name, setName] = useState(displayNameFromLogInWithGoogle);
    const [email, setEmail] = useState(emailFromLogInWithGoogle);
    const [pass, setpass] = useState("");

    let navigate = useNavigate();
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: name,
            email: email,
            pass: pass
        }
        console.log(data)
    }
    return (
        <>
            <NavBar/>
            <div className="min-h-screen bg-red-200 flex items-center justify-center">
                <form className="p-6 bg-green-300 rounded-2xl border-2 border-green-600 flex flex-col gap-3 items-center justify-center w-full max-w-md mx-auto"
                    onSubmit={(event) => handleFormSubmit(event)}>

                    <input className="bg-white placeholder w-full p-2 rounded-lg"
                        onChange={(event) => setName(event.target.value)}
                        type="text"
                        value={name}
                        placeholder="Enter Name"
                        required
                    />

                    <input className="bg-white placeholder w-full p-2 rounded-lg"
                        type="text"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                        placeholder="Enter Email"
                        required
                    />

                    <input className="bg-white placeholder w-full p-2 rounded-lg"
                        type="password"
                        onChange={(event) => setpass(event.target.value)}
                        value={pass}
                        placeholder="Enter Password"
                        required
                    />

                    <button onClick={() => navigate("/ControlledForm")} className="bg-blue-600 text-white hover:bg-blue-500 w-full py-2 rounded-lg" type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login;