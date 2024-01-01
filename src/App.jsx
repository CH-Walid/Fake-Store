import ProductsList from "./components/ProductsList";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState('');

  const changeSearchValue = value => {
    setSearchValue(value);
  }

  return (
    <div className="container-fluid w-75 mx-auto my-3">
      <SearchBar changeSearchValue={changeSearchValue} />
      <ProductsList searchValue={searchValue} />
    </div>
  );
}

export default App;
