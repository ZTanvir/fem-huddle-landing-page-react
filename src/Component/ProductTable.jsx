import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";

const ProductTable = ({ products }) => {
  let row = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      row = row.concat(<ProductCategory category={product.category} />);
    }
    row = row.concat(<ProductRow product={product} />);
    lastCategory = product.category;
  });

  return (
    <tbody>
      <tr>
        <td>Name</td>
        <td>Price</td>
      </tr>
      {row}
    </tbody>
  );
};

export default ProductTable;
