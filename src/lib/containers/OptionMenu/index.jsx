import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useOutsideEvent from 'hooks/useOutsideEvent';

const OptionMenu = ({ children, className, callback }) => {
  const wrapperRef = useRef(null);
  const container = `flex flex-col w-44 z-20 bg-neutral/1 shadow absolute ${className}`;

  useOutsideEvent(wrapperRef, () => {
    callback();
  });

  return (
    <div className={container} ref={wrapperRef}>
      {children}
    </div>
  );
};

OptionMenu.propTypes = {
  callback: PropTypes.func.isRequired,
  className: PropTypes.string
}

export default OptionMenu;
