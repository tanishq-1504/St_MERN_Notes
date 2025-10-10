function MyChildFunction() {
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
  return (
    <div>
      <Customer />
    </div>
  );
}
export default MyChildFunction;