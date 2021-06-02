import React from 'react';
import PropTypes from 'prop-types';

const InputLabel = ({ children, className, title }) => (
  <label className={`flex flex-col justify-center ${className} mb-3`}>
    {title &&
      <small className="mb-1 block">
        {title}
      </small>
    }

    {children}
  </label>
);

InputLabel.defaultProps = {
  className: ''
};

InputLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string
};

export default InputLabel;
