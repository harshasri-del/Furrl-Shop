import "./index.css";
function Model(props) {
  const { prodDetails } = props;
  const { title, MRP, price, discountPercent, brand } = prodDetails;

  return (
    <div className="product-card">
      <p>Title: {title}</p>
      <p>Brand: {brand[0].name}</p>
      <p>Price: Rs.{price.value}</p>
      <p>MRP: Rs.{MRP.value}</p>
      <p>Discount: {discountPercent}%</p>
    </div>
  );
}

export default Model;
