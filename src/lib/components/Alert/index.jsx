import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'icon';

const variants = ['info', 'success', 'warning', 'error'];

const Alert = ({ children, variant, className, noIcon }) => {
  const classNames = `flex-y-center alert alert-${variant} ${className}`;
  const icon = variant || 'close';

  return (
    <div className={classNames}>
      {!noIcon && <Icon name={icon} size={22} className="mr-4"/>}

      {children}
    </div>
  );
};

Alert.defaultProps = {
  noIcon: false
};

Alert.propTypes = {
  variant: PropTypes.oneOf(variants).isRequired,
  className: PropTypes.string,
  noIcon: PropTypes.bool
};

export default Alert;
