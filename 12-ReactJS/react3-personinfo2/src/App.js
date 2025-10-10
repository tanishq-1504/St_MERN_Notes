import logo from './logo.svg';
import './App.css';

function App() {
  var firstname = "Tanishq";
  var lastname = "S";
  var age = "21"
  return (
    <div className="App">
      <h3>Person Information</h3>
      FirstName : {firstname}<br></br>
      LastName : {lastname}<br></br>
      Age : {age}
      <br></br>
      <br></br>
     <img src={logo} className="App-logo" alt="logo" />
      </div>
        
    
  );
}

export default App;
