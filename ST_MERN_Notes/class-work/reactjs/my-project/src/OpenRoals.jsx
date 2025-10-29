import JobCard from "./JobCard"

function OpenRoals(props) {
    console.log(props.openRoalsData)

    return (
        <div className="w-[350px] h-[400px] p-[5] rounded-xl bg-white ">
            <div className="flex justify-between p-3">
                <h2 className="underline">Open Roals</h2>
                <p>{"->"}</p>
            </div>
            <div className="p-2">
                {
                    props.openRoalsData.map((element) => (
                        <JobCard jobTitle={element} />

                    ))
                }
            </div>
        </div>
    )
}
export default OpenRoals;