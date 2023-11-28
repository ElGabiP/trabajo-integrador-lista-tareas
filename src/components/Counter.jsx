import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Counter = ({ countFunction, category }) => {
  const [categoryCount, setCategoryCount] = useState(0);

  useEffect(() => {
    const calculateCategoryCount = () => {
      setCategoryCount(countFunction());
    };

    calculateCategoryCount();
  }, [countFunction]);

  return <p>{`${category}: ${categoryCount || 0}`}</p>;
};

Counter.propTypes = {
  countFunction: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default Counter;
