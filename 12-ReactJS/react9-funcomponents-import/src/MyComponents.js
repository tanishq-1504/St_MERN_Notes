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
  export default MyFunction;