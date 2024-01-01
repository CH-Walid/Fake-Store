import Product from "./Product";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ProductsList = ({ searchValue }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategorie, setActiveCategorie] = useState(null);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const displayProducts = () => {
    if (activeCategorie && searchValue) {
      return products
        .filter((product) => product.category === activeCategorie)
        .filter(
          (product) =>
            product.title
              .toLowerCase()
              .includes(searchValue.trim().toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(searchValue.trim().toLowerCase()) ||
            product.category
              .toLowerCase()
              .includes(searchValue.trim().toLowerCase())
        )
        .map((product) => (
          <Product key={product.id} productDetails={product} />
        ));
    }
    if (activeCategorie) {
      return products
        .filter((product) => product.category === activeCategorie)
        .map((product) => (
          <Product key={product.id} productDetails={product} />
        ));
    }
    if (searchValue) {
      return products
        .filter(
          (product) =>
            product.title
              .toLowerCase()
              .includes(searchValue.trim().toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(searchValue.trim().toLowerCase()) ||
            product.category
              .toLowerCase()
              .includes(searchValue.trim().toLowerCase())
        )
        .map((product) => (
          <Product key={product.id} productDetails={product} />
        ));
    }
    return products.map((product) => (
      <Product key={product.id} productDetails={product} />
    ));
  };

  const changeCategorie = (categorie) => {
    setActiveCategorie(categorie);
  };

  const displayCategories = () => {
    return (
      <>
        <button
          className="btn btn-secondary"
          onClick={() => changeCategorie(null)}
        >
          All
        </button>
        {categories.map((categorie, idx) => (
          <button
            key={idx}
            className="btn btn-secondary"
            onClick={() => changeCategorie(categorie)}
          >
            {categorie}
          </button>
        ))}
      </>
    );
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <div className="row g-3 align-items-center">
        <div className="btn-group">{displayCategories()}</div>
      </div>
      <h2>Products: </h2>
      <table className="table">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>{displayProducts()}</tbody>
      </table>
    </>
  );
};
export default ProductsList;

ProductsList.propTypes = {
  searchValue: PropTypes.string.isRequired,
};
