import { useRef } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ changeSearchValue }) => {
  const searchRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = searchRef.current.value;
    changeSearchValue(searchValue);
  };

  return (
    <form onSubmit={handleSearch} className="row mb-2">
      <div className="col-auto">
        <input
          type="text"
          name="search"
          id="search"
          className="form-control"
          placeholder="search products here..."
          aria-describedby="helpId"
          ref={searchRef}
        />
      </div>
      <div className="col-auto">
        <input
          name="submit"
          id="submit"
          className="btn btn-primary"
          type="submit"
          value="Search"
        />
        <input
          name="reset"
          id="reset"
          className="btn btn-dark mx-2"
          type="reset"
          value="Reset"
          onClick={()=>changeSearchValue('')}
        />
      </div>
    </form>
  );
};
export default SearchBar;

SearchBar.propTypes = {
  changeSearchValue: PropTypes.func.isRequired,
};
