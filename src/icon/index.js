import React from 'react';
import PropTypes from 'prop-types';
import library from './library';

const Icon = ({ size, color, name, className }) => {
  const checkHex = /^#([0-9A-F]{3}){1,2}$/i.test(color);

  return (
    <svg
      viewBox={library[name].box}
      width={size}
      height={size}
      className={`${checkHex ? '' : color + ' fill-current'} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      { library[name].path.map((item, i) => (
        <path key={i} fillRule="evenodd" fill={checkHex ? color : ''} d={item} />
      )) }
    </svg>
  );
};

Icon.defaultProps = {
  size: 16,
  color: 'text-main',
  className: ''
};

Icon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Icon;
