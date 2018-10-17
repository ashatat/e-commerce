import React from 'react';
import PropTypes from 'prop-types';

// declares propTypes validation.
const propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};


const Input = (props) => {
  const {
    type, name, value, placeholder, className,
  } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      className={className}
    />
  );
};

// assigns the propTypes to the component.
Input.propTypes = propTypes;

// specifies the default propType value when not explicitly required.
Input.defaultProps = {
  value: null,
};

export default Input;
