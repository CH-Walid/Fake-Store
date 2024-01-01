import PropTypes from "prop-types";
import Rating from "./Rating";

const Product = ({ productDetails }) => {
  const {
    id,
    title,
    price,
    description,
    category,
    image,
    rating: { rate },
  } = productDetails;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{price}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>
        <img width={250} src={image} alt={title} />
      </td>
      <td>
        <Rating rate={rate} />
      </td>
    </tr>
  );
};
export default Product;

Product.propTypes = {
  productDetails: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
