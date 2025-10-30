import PrimaryButton from "./PrimaryButton.jsx";

function NavBar() {
    return (
        <div className="fixed top-0 left-2 right-2 h-[32px] bg-white rounded-xl flex items-center justify-between">
            <div>
                <img className="pl-1 rounded-l object-contain h-[24px]" src="https://media.licdn.com/dms/image/v2/D4D0BAQG64ykoB_cF4Q/company-logo_200_200/B4DZZOATdPGwAI-/0/1745065425306/stumagz_logo?e=1762992000&v=beta&t=VIn2QabU6c2qzu4LSiH3EcmhgtmxV4m70EvDjdxcRcg" alt="" />
            </div>
            <nav className="ml-4 flex items-center justify-center">
                <ul className="flex items-center gap-6">
                    <li className="font-medium text-lg text-black hover:text-red-500 hover:cursor-pointer">Home</li>
                    <li className="font-medium text-lg text-black hover:text-red-500 hover:cursor-pointer">About</li>
                    <li className="font-medium text-lg text-black hover:text-red-500 hover:cursor-pointer">Contact Us</li>
                </ul>
            </nav>
            <div className="flex items-center gap-3">

                <PrimaryButton buttonText="Register" />
                <PrimaryButton buttonText="Login" />
                
            </div>
        </div>
    )
}

export default NavBar;