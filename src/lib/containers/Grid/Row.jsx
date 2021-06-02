import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ children, className, nowrap }) => {
  const marginX = className.includes('mx') ? '' : '-mx-2';
  const wrap = nowrap ? 'flex-nowrap' : 'flex-wrap';

  return (
    <div className={`flex flex-row ${wrap} ${marginX} ${className}`}>
      {children}
    </div>
  );
};

Row.defaultProps = {
  className: '',
  nowrap: false
};

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  nowrap: PropTypes.bool
};

export default Row;
