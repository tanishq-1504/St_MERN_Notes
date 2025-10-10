import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>
        Welccome to Root Compoonent.
      </h3>
      <MyData/>
      <h1>End Root Compoonent</h1>
    </div>
  );
}
function MyData(){
  function MyFunction(){
    var firstName= "Tanishq";
    var lastName="S";
    var age=21;
    return(
      <div className="MyFunction">
        <h3>This is MyFunction Nested Component : TAN</h3>
        <h3>Person Information</h3>
        FirstName:{firstName}<br></br>
        LastName:{lastName}<br></br>
        Age:{age}<br></br>
      </div>
    );
  }
  return(
    <div className="MyData">
      <h3>MyData Component</h3>
      {/*Using MyFunction insted MyData*/}
      <MyFunction/>
    </div>
  );
}

export default App;
