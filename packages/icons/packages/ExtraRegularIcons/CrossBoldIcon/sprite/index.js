/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./CrossBoldIcon.svg');
}

const CrossBoldIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? '/sprite.svg' : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="CrossBoldIcon"
      viewBox="0 0 32 32"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use xlinkHref={`${importPrefix}#CrossBoldIcon`} />
    </svg>
  );
};

CrossBoldIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

CrossBoldIcon.defaultProps = {
  size: 1.5,
};

export default CrossBoldIcon;
