import React from 'react';

import './ItemInfo.css';

const reFormData = info => {
  // get list of undoplicated "Weight, Color, Size, Fabric" or any other details
  const formedInfo = {};

  info.forEach(item => {
    Object.keys(item).forEach(key => {
      if (key !== 'id') {
        if (!formedInfo[key]) {
          formedInfo[key] = [item[key]];
        } else if (!formedInfo[key].includes(item[key])) {
          formedInfo[key].push(item[key]);
        }
      }
    });
  });
  return formedInfo;
};

export default props => {
  const { details } = props;
  let data;
  if (details) {
    data = reFormData(details);
  }

  return (
    <div className="item-info">
      <h2 className="item-info__title">Additional Information</h2>
      <ul className="item-info__info">
        {data &&
          Object.keys(data).map((key, index) => (
            <li
              className={`item-info__info-row ${
                index !== Object.keys(data).length - 1
                  ? 'item-info__info-row--border'
                  : ''
              }`}
            >
              <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
              <span>
                {data[key].map(
                  (item, index) =>
                    `${item}${index === data[key].length - 1 ? '' : ', '}${
                      key === 'weight' ? ' Kg' : ''
                    }`
                )}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};
