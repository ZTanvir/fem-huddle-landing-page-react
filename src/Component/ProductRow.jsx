const ProductRow = ({ product }) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span className={{ color: "red" }}>{product.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};
export default ProductRow;
