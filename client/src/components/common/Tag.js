import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Tag.css';

export default function Tag({ name, color, bgColor, className }) {
  return (
    <Fragment>
      <span
        className={classNames('tag', className)}
        style={{ color, backgroundColor: bgColor }}
      >
        {name}
      </span>
      <span className="triangle" style={{ borderRightColor: bgColor }} />
    </Fragment>
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
