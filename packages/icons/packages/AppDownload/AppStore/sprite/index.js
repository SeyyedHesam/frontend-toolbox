/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

if (!process.env.SSR && !process.env.CI) {
  // eslint-disable-next-line global-require
  require('./AppStore.svg');
}

let importPrefix = '';
if (process.env.PUBLIC_URL) {
  importPrefix = `/${process.env.PUBLIC_URL}/sprite.svg`;
}

const AppStore = ({ className, size }) => (
  <svg
    data-testid="AppStore"
    viewBox="0 0 128 40"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor"
  >
    <use xlinkHref={`${importPrefix}#AppStore`} />
  </svg>
);

AppStore.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

AppStore.defaultProps = {
  size: 1.5,
};

export default AppStore;