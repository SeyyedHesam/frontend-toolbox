import React from 'react';
import PropTypes from 'prop-types';

const IconName = ({ className, size }) => (
  <svg
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="29"
    height="32"
    viewBox="0 0 29 32"
  >
    <title>share</title>
    <path d="M23.872 21.504c-0.001 0-0.003 0-0.004 0-1.667 0-3.152 0.778-4.111 1.991l-0.008 0.011-9.631-5.554c0.239-0.578 0.378-1.249 0.378-1.952s-0.139-1.374-0.391-1.987l0.013 0.035 9.631-5.56c0.967 1.218 2.448 1.992 4.109 1.992 2.891 0 5.234-2.343 5.234-5.234s-2.343-5.234-5.234-5.234c-2.891 0-5.234 2.343-5.234 5.234 0 0.705 0.139 1.377 0.392 1.991l-0.013-0.035-9.627 5.558c-0.969-1.227-2.457-2.007-4.127-2.007-2.898 0-5.247 2.349-5.247 5.247s2.349 5.247 5.247 5.247c1.67 0 3.158-0.78 4.119-1.996l0.008-0.011 9.631 5.56c-0.238 0.578-0.376 1.248-0.376 1.951 0 2.898 2.349 5.247 5.247 5.247s5.247-2.349 5.247-5.247c0-2.898-2.349-5.247-5.247-5.247-0 0-0 0-0.001 0h0zM23.872 1.485c2.077 0 3.76 1.683 3.76 3.76s-1.683 3.76-3.76 3.76c-2.076 0-3.759-1.682-3.76-3.758v-0c0.003-2.075 1.685-3.756 3.76-3.758h0zM5.247 19.759c-2.075-0.002-3.756-1.685-3.756-3.76 0-2.077 1.683-3.76 3.76-3.76s3.76 1.683 3.76 3.76c0 0.001 0 0.001 0 0.002v-0c-0.003 2.076-1.687 3.758-3.764 3.758v0zM23.87 30.511c-2.077 0-3.76-1.683-3.76-3.76s1.683-3.76 3.76-3.76c2.077 0 3.76 1.683 3.76 3.76 0 0.001 0 0.001 0 0.002v-0c-0.003 2.074-1.684 3.755-3.758 3.758h-0zM3.824 14.166c-0.892 0.001-1.615 0.724-1.616 1.616v0c0 0.302 0.244 0.546 0.546 0.546s0.546-0.244 0.546-0.546v0c0-0.293 0.237-0.53 0.53-0.53v0c0.302 0 0.546-0.244 0.546-0.546s-0.244-0.546-0.546-0.546v0z" />
    {' '}
  </svg>
);

IconName.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IconName.defaultProps = {
  size: 1.5,
};

export default IconName;
