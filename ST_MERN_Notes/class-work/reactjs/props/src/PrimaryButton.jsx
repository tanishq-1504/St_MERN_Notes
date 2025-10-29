function PrimaryButtion(props){
    return(
        <button className="cursor-pointer px-5 py-3 bg-red-600 text-white rounded-lg">
            {props.buttonText}
        </button>
    )
}

export default PrimaryButtion