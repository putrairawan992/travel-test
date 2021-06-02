import React from 'react';
import PropTypes from 'prop-types';

const Col = ({ children, xs, md, className, flexbasis }) => {
  const small = xs === 12 ? 'w-full' : `w-${xs}/12`;
  const medium = md === 12 ? 'md:w-full' : `md:w-${md || xs}/12`;
  const width = flexbasis ? '' : `${small} ${medium}`;
  const styles = flexbasis && {style: {flex: `1 0 ${flexbasis}%`}};

  return (
    <div className={`${width} px-3 ${className}`} {...styles}>
      { children }
    </div>
  );
};

Col.defaultProps = {
  className: '',
  xs: 12,
  md: 12
};

Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  md: PropTypes.number,
  flexbasis: PropTypes.number
};

export default Col;
