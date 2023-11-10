import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = ({ productData }) => {
  return (
    <>
      <SearchBar />
      <ProductTable products={productData} />
    </>
  );
};
export default FilterableProductTable;
