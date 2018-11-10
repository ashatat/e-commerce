import React, { Fragment } from 'react';
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
  id: PropTypes.string,
  labelValue: PropTypes.string,
};

const Input = props => {
  const {
    id,
    labelValue,
    type,
    name,
    value,
    placeholder,
    className,
    onChange,
    onClick,
  } = props;

  return (
    <Fragment>
      <label htmlFor={id}>
        {labelValue}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          className={className}
          onChange={onChange}
          onClick={onClick}
        />
      </label>
    </Fragment>
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
  id: null,
  labelValue: null,
};

export default Input;
