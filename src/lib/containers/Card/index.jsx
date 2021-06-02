import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, className, minHeight}) => {
  const container = `bg-white rounded-lg shadow-card ${className}`;
  const styles = minHeight && {style:{ minHeight }}

  return (
    <div className={container} {...styles}>
      { children }
    </div>
  );
};

Card.defaultProps = {
  className: ''
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  minHeight: PropTypes.number
};

export default Card;
