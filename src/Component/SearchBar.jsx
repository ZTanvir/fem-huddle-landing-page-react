const SearchBar = () => {
  return (
    <div>
      <div>
        <input
          type="text"
          name="search-product"
          id="search"
          placeholder="Search"
        />
      </div>
      <div>
        <input type="checkbox" name="product-stoke" id="show-stock-product" />
        <label htmlFor="show-stock-product">Only show products in stock</label>
      </div>
    </div>
  );
};

export default SearchBar;
