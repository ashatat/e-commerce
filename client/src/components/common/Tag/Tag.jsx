import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Tag.css';

export default function Tag({ name, color, bgColor, className }) {
  return (
    <div className="tag">
      <span
        className={classNames('tag__rectangle', className)}
        style={{ color, backgroundColor: bgColor }}
      >
        {name}
      </span>
      <span className="tag__triangle" style={{ borderRightColor: bgColor }} />
    </div>
  );
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

Tag.defaultProps = {
  color: null,
  bgColor: null,
  className: null,
};
