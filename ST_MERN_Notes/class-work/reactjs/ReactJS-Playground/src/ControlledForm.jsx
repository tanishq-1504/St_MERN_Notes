import { useState } from "react";

function ControlledForm() {
    let displayNameFromLogInWithGoogle = "Tanishq Srinivasan";
    let emailFromLogInWithGoogle = "tanishq1504@gmail.com";

    const[name,setName] = useState(displayNameFromLogInWithGoogle);
    const[email,setEmail] = useState(emailFromLogInWithGoogle);
    const[age,setAge] = useState();

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        const data ={
            name:name,
            email:email,
            age:age
        }
        console.log(data)
    }
    return (
        <form className="p-6 bg-green-300 rounded-2xl bordered-2 border-green-600 flex flex-col gap-3 items-center"
            onSubmit={(event) => handleFormSubmit(event)}>

            <input className="bg-white placeholder"
                onChange={(event) => setName(event.target.value)}
                type="text"
                value={name}
                placeholder="Enter Name"
                required
            />

            <input className="bg-white placeholder"
                type="text"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                placeholder="Enter Email"
                required
            />

            <input className="bg-white placeholder"
                type="Number"
                onChange={(event) => setAge(event.target.value)}
                value={age}
                placeholder="Enter Age"
                required
            />

            <button className="bg-blue-600 text-white hover:bg-blue-500 " type="submit">Submit</button>
        </form>
    )
}

export default ControlledForm;