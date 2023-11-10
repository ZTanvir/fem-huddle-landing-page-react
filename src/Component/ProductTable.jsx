import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";

const ProductTable = ({ products }) => {
  let row = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      row = row.concat(
        <ProductCategory key={product.category} category={product.category} />
      );
    }
    row = row.concat(<ProductRow key={product.name} product={product} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>{row}</tbody>
    </table>
  );
};

export default ProductTable;
