import { useState } from "react";

function UncontrolledForm() {
    const [name, setName] = useState("");

    function handleNameChange(event) {
        let nameInput = event.target.value;
        setName((previousName) => {
            previousName = nameInput
            return previousName
        })
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: name
        }
        console.log(data)

    }

    return (
        <form onSubmit={(event) => handleFormSubmit(event)}>
            <input className="bg-white placeholder"
                onChange={(event) => handleNameChange(event)}
                type="text"
                placeholder="Name"
                required />
            <button className="bg-blue-600 text-white hover:bg-blue-700" type="submit">Submit</button>
        </form>
    )
}

export default UncontrolledForm;