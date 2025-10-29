import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import OpenRoals from "./OpenRoals";
import ControlledForm from "./components/ControlledForm.jsx";

function App() {
  const dummyOpenRoles = ["frontend enineer", "backend engineer", "ui/ux design0", "product manager", "cto", "ceo", "coo"];

  return (
    <>
      <Routes>
        <Route path="/" element={
          <div className="bg-red-200 h-screen flex items-center justify-end">
            <NavBar />
            <OpenRoals openRoalsData={dummyOpenRoles} />
          </div> }>

        </Route>

        {/* <Route> */}
        {/* </Route> */}
        <Route path="/ControlledForm" element={<ControlledForm />}></Route>
        <Route path="/NavBar" element={<NavBar />}></Route>
        <Route path="/App" element={<App/>}></Route>
      </Routes>

    </>
  )
}

export default App;