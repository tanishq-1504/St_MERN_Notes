import MyFunction from "./MyComponents";
import MyChildFunction from "./MyComponents1";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Root Component</h1>
      <MyFunction/>
      <MyChildFunction/>
    </div>
  );
}

export default App;
