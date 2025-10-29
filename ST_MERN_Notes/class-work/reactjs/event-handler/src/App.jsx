import OpenRoals from "./OpenRoals";

function App(){
  const dummyOpenRoles = ["frontend enineer","backend engineer","ui/ux design0","product manager","cto","ceo","coo"];

  return(
    <div className="bg-red-200 h-screen w-screen flex items-center justify-end">
      <OpenRoals openRoalsData={dummyOpenRoles}/>
    </div>
  )
}

export default App;