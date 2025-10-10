import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Root Component</h1>
      <Order/>
    </div>
  );
}
function Order() {
  function Product() {
    var name = "MobilePhone";
    var price = "15000";
    var category = "Electronics";
    return (
      <div className="Product">
        <h3>This is Product Page</h3>
        Name:{name}<br></br>
        Price:{price}<br></br>
        Category:{category}<br></br>
      </div>
    );
  }
  function Customer() {
    var name = "Tanishq S";
    var email = "tanishq1504@gmail.com";
    var city = "Hyderabad";
    return (
      <div className="Customer">
        <h3>Customer Information</h3>
        Name:{name};
        Email:{email};
        City:{city};
      </div>
    );
  }
  return(
    <div className="Order">
    {
      Product()
    }
    {
      Customer()
    }
  </div>
  );
}

export default App;
