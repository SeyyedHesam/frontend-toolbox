import * as React from 'react';
import PropTypes from 'prop-types';

const EditIcon = ({ className, size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-testid="EditIcon"
    width="15"
    height="15.002"
    data-name="edit (4)"
    viewBox="0 0 15 15.002"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill={color}
  >
    <path
      id="Path_212"
      d="M13.843 47.129a.375.375 0 0 0-.374.376v3.335a1.125 1.125 0 0 1-1.121 1.127H1.868A1.125 1.125 0 0 1 .747 50.84v-9.79a1.125 1.125 0 0 1 1.121-1.127h3.316a.376.376 0 0 0 0-.751H1.868A1.875 1.875 0 0 0 0 41.05v9.79a1.875 1.875 0 0 0 1.868 1.878h10.481a1.875 1.875 0 0 0 1.868-1.878V47.5a.375.375 0 0 0-.374-.371zm0 0"
      className="cls-1"
      data-name="Path 212"
      transform="translate(0 -37.716)"
    />
    <path
      id="Path_213"
      d="M118.234.754a1.684 1.684 0 0 0-2.381 0l-6.675 6.675a.374.374 0 0 0-.1.165l-.878 3.169a.374.374 0 0 0 .46.461l3.169-.878a.374.374 0 0 0 .165-.1l6.675-6.676a1.686 1.686 0 0 0 0-2.381zm-8.241 6.919l5.463-5.464 1.762 1.762-5.463 5.464zm-.352.706l1.408 1.408-1.947.539zm8.5-5.334l-.4.4-1.756-1.765.4-.4a.935.935 0 0 1 1.323 0l.439.439a.937.937 0 0 1-.003 1.326zm0 0"
      className="cls-1"
      data-name="Path 213"
      transform="translate(-104.165 -.261)"
    />
  </svg>
);
EditIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

EditIcon.defaultProps = {
  size: 1.5,
  color: '#000000',
};

export default EditIcon;
