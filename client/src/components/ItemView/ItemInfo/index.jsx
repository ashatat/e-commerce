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
      <h2>Additional Information</h2>
      <ul>
        {data &&
          Object.keys(data).map(key => (
            <li>
              <span>{key}</span>
              <span>
                {data[key].map(
                  (item, index) =>
                    `${item} ${index === data[key].length - 1 ? '' : ', '}`
                )}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};
