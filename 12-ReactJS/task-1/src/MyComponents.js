function MyFunction() {
  function Product() {
    var name = "MobilePhone";
    var price = "15000";
    var category = "Electronics";
    return (
      <div className="Product">
        <h3>This is Product Page</h3>
        Name:{name}<br />
        Price:{price}<br />
        Category:{category}<br />
      </div>
    );
  }
  return (
    <div>
      <Product />
    </div>
  );
}
export default MyFunction;