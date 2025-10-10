import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Welcome to our own function component</h3>
      <MyFunction></MyFunction>
      <MyData></MyData>
    </div>);
}
    function MyFunction(){
      var firstName="Tanishq";
      var lastName="S";
      var age="21";
      return(
        <div className="MyFunction">
          <h3>This is MyFunction own component : TAN</h3>
          <h3>Person Information</h3>
          FirstName:{firstName}<br></br>
          LastName:{lastName}<br></br>
          Age:{age}<br></br>
        </div>
      )
    } 
    function MyData(){
      return(
        <div className="MyData">
          <h3>MyData 2nd own component</h3>
        </div>
      )
    }


export default App;
