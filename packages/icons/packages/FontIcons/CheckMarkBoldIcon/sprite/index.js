/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./CheckMarkBoldIcon.svg');
}

const CheckMarkBoldIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? '/sprite.svg' : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="CheckMarkBoldIcon"
      viewBox="0 0 32 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use xlinkHref={`${importPrefix}#CheckMarkBoldIcon`} />
    </svg>
  );
};

CheckMarkBoldIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

CheckMarkBoldIcon.defaultProps = {
  size: 1.5,
};

export default CheckMarkBoldIcon;
