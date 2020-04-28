/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

if (!process.env.SSR && !process.env.CI) {
  // eslint-disable-next-line global-require
  require('./GroceryBagIcon.svg');
}

let importPrefix = '';
if (process.env.PUBLIC_URL) {
  importPrefix = `/${process.env.PUBLIC_URL}/sprite.svg`;
}

const GroceryBagIcon = ({ className, size }) => (
  <svg
    data-testid="GroceryBagIcon"
    viewBox="0 0 25.78 35.114"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor"
  >
    <use xlinkHref={`${importPrefix}#GroceryBagIcon`} />
  </svg>
);

GroceryBagIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

GroceryBagIcon.defaultProps = {
  size: 1.5,
};

export default GroceryBagIcon;