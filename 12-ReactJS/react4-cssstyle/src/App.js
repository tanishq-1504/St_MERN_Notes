import logo from './logo.svg';
import './App.css';

function App() {
  var firstName = "Tanishq";
  var lastName = "S";
  var age = "21"
  var job = "Developer";

const mystyles = {
  margin: '28px',
  padding: '28px',
  boxSizing:'border-box',
  borderRadius: '10px',
  boxShadow:'0 8px 20px #ddd'
}
return(
  <div className="App">
    <div style={mystyles}>
      <h3>Hello Welcome to ReactJS with CSS</h3>
      <h3>Person Information</h3>
      FirstName: {firstName}<br></br>
      LastName: {lastName}<br></br>
      Age: {age}<br></br>
      JOB: {job}
    </div>
  </div>
)
}
export default App;
