import React from 'react';

import './ItemInfo.css';

const reFormData = info => {
  // get list of undoplicated "Weight, Color, Size, Fabric" or any other details
  const formedInfo = {
    color: [],
    weight: [],
    size: [],
    fabric: [],
  };

  info.forEach(item => {
    if (!formedInfo.color.includes(item.color)) {
      formedInfo.color.push(item.color);
    }
    if (!formedInfo.weight.includes(item.weight)) {
      formedInfo.weight.push(item.weight);
    }
    if (!formedInfo.size.includes(item.size)) {
      formedInfo.size.push(item.size);
    }
    if (!formedInfo.fabric.includes(item.fabric)) {
      formedInfo.fabric.push(item.fabric);
    }
  });
  return formedInfo;
};

export default props => {
  const { details } = props;
  // let data = { color: '', weight: '', size: '', fabric: '' };
  let data;
  if (details) {
    data = reFormData(details);
  }
  // const { color, weight, size, fabric } = data;

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
