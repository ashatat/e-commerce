import React from 'react';
import PropTypes from 'prop-types';

// this line disables the windows end of line check for eslint.
/* eslint linebreak-style: ["error", "windows"] */
// declares propTypes validation.
const propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

const Input = props => {
  const {
    type,
    name,
    value,
    placeholder,
    className,
    onChange,
    onClick,
  } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      className={className}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

// assigns the propTypes to the component.
Input.propTypes = propTypes;

// specifies the default propType value when not explicitly required.
Input.defaultProps = {
  value: null,
  placeholder: null,
  onChange: null,
  onClick: null,
};

export default Input;
