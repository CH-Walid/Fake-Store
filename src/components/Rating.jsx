import PropTypes from "prop-types";

const Rating = ({ rate }) => {
  return <span className="badge badge-primary bg-primary">{rate} / 5</span>;
};
export default Rating;

Rating.propTypes = {
  rate: PropTypes.number,
};
