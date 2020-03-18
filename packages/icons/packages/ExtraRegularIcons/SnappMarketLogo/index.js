import * as React from 'react';
import PropTypes from 'prop-types';

const SnappMarketLogo = ({ className, size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    data-testid="SnappMarketLogo"
    width="200"
    height="100"
    viewBox="0 0 200 100"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill={color}
  >
    <defs>
      <path id="urtwa" d="M88 284.36h31.418v44.817H88z" />
      <path
        id="urtwc"
        d="M115.015 325.17c3.387-2.879 4.403-7.225 4.403-11.459 0-6.886-4.572-9.878-10.499-11.628l-2.822-.846c-1.919-.621-4.91-1.58-4.91-4.064 0-2.37 2.709-3.556 4.74-3.556 1.004 0 1.991.154 2.94.436a6.125 6.125 0 0 0 7.196-3.067l1.573-3.064a.074.074 0 0 0-.03-.097c-3.776-2.125-8.992-3.465-13.259-3.465-8.523 0-14.675 5.644-14.675 14.28 0 8.241 4.571 10.048 11.514 12.023 2.371.678 6.717 1.75 6.717 4.855 0 2.991-2.766 4.29-5.362 4.29-3.782 0-7.056-1.976-9.821-4.404l-4.711 8.861a.074.074 0 0 0 .022.095c4.336 3.026 9.565 4.817 14.905 4.817 4.29 0 8.75-1.185 12.08-4.007"
      />
      <path
        id="urtwd"
        d="M121.463 328.046h4.084a6.116 6.116 0 0 0 6.116-6.116v-8.898c0-3.613 1.185-6.717 5.362-6.717 5.08 0 4.629 4.854 4.629 7.62v14.038c0 .04.032.073.073.073h4.084a6.116 6.116 0 0 0 6.116-6.116v-11.777c0-7.112-3.105-12.023-10.894-12.023-3.996 0-6.869 1.178-9.236 4.653a.073.073 0 0 1-.06.032h-.001a.073.073 0 0 1-.073-.073v-3.58a.073.073 0 0 0-.073-.072h-10.127a.073.073 0 0 0-.073.073v28.81c0 .04.033.073.073.073"
      />
      <path
        id="urtwe"
        d="M187.634 321.93v-22.767a.073.073 0 0 0-.073-.073h-10.127a.073.073 0 0 0-.073.073v2.553a.073.073 0 0 1-.128.047c-2.155-2.44-5.582-3.633-8.847-3.633-8.58 0-14.506 7.112-14.506 15.41 0 8.297 6.04 15.465 14.62 15.465 3.373 0 6.914-1.287 8.727-4.143a.072.072 0 0 1 .06-.033c.041 0 .074.032.074.073v3.071c0 .04.033.073.073.073h4.084a6.116 6.116 0 0 0 6.116-6.116m-16.538-1.84c-4.177 0-6.604-2.823-6.604-6.494 0-3.558 2.427-6.55 6.604-6.55s6.604 2.992 6.604 6.55c0 3.67-2.427 6.494-6.604 6.494"
      />
      <path
        id="urtwf"
        d="M224.534 313.652c0-8.297-5.983-15.522-14.62-15.522-3.373 0-6.859 1.344-8.727 4.2a.072.072 0 0 1-.06.033h-.001a.073.073 0 0 1-.073-.073v-3.2H190.78v41.167h4.157a6.116 6.116 0 0 0 6.116-6.115v-8.837a.01.01 0 0 1 .016-.006c2.202 2.527 5.637 3.706 8.959 3.706 8.58 0 14.506-6.999 14.506-15.353m-23.82-.056c0-3.556 2.427-6.548 6.604-6.548s6.604 2.992 6.604 6.548c0 3.669-2.427 6.49-6.604 6.49s-6.604-2.821-6.604-6.49"
      />
      <path
        id="urtwg"
        d="M226.523 340.258h4.084a6.116 6.116 0 0 0 6.116-6.116v-8.67c0-.067.083-.098.128-.047 2.205 2.44 5.58 3.58 8.847 3.58 8.58 0 14.506-6.998 14.506-15.353 0-8.297-5.983-15.522-14.62-15.522-3.373 0-6.859 1.344-8.727 4.2a.073.073 0 0 1-.135-.04v-3.127a.073.073 0 0 0-.072-.073h-10.127a.073.073 0 0 0-.073.073v41.022c0 .04.033.073.073.073m16.465-33.21c4.177 0 6.604 2.992 6.604 6.548 0 3.669-2.427 6.491-6.604 6.491-4.176 0-6.603-2.822-6.603-6.49 0-3.557 2.427-6.548 6.603-6.548"
      />
      <path
        id="urtwh"
        d="M270.935 312.816a6.213 6.213 0 0 0 6.015-4.66l5.816-22.585a.073.073 0 0 0-.07-.091h-10.517a.073.073 0 0 0-.071.055l-7.028 27.281z"
      />
      <path
        id="urtwi"
        d="M265.172 287.852h.57v-1.914h.722v-.458h-2.014v.458h.722z"
      />
      <path
        id="urtwj"
        d="M267.267 285.938h.011l.688 1.914h.305l.687-1.914h.012v1.914h.516v-2.372h-.834l-.534 1.404-.534-1.404h-.834v2.372h.517z"
      />
      <path
        id="urtwk"
        d="M268.605 328.999c4.177-.007 6.6-2.833 6.593-6.502-.006-3.557-2.438-6.544-6.615-6.537-4.177.007-6.599 3.003-6.593 6.559.006 3.668 2.438 6.487 6.615 6.48"
      />
      <path
        id="urtwl"
        d="M165.747 356.698c-2.375-2.525-5.37-3.788-8.989-3.788-2.148 0-4.108.405-5.879 1.216a14.135 14.135 0 0 0-4.579 3.307c-1.282 1.394-2.28 3.024-2.996 4.89a16.33 16.33 0 0 0-1.074 5.907c0 2.224.368 4.278 1.102 6.162.735 1.885 1.761 3.524 3.081 4.918a14.02 14.02 0 0 0 4.636 3.25c1.771.773 3.712 1.16 5.823 1.16 3.73 0 6.689-1.376 8.875-4.127v3.222h10.288v-29h-10.288zm-.195 14.189a7.305 7.305 0 0 1-1.414 2.092 6.228 6.228 0 0 1-2.093 1.413c-.811.34-1.668.51-2.573.51-.943 0-1.82-.17-2.63-.51a6.208 6.208 0 0 1-2.093-1.413 6.751 6.751 0 0 1-1.894-4.75c0-.903.17-1.742.508-2.514.34-.773.801-1.46 1.386-2.064a6.213 6.213 0 0 1 2.093-1.413 6.735 6.735 0 0 1 2.63-.509c.905 0 1.762.17 2.573.51.81.338 1.508.81 2.093 1.412a7.205 7.205 0 0 1 1.414 2.12c.358.81.537 1.668.537 2.572 0 .905-.18 1.753-.537 2.544z"
      />
      <path
        id="urtwm"
        d="M262.86 357.036c-1.356-1.394-3.015-2.459-4.974-3.194-1.96-.735-4.165-1.102-6.614-1.102-2.488 0-4.72.367-6.7 1.102-1.978.735-3.665 1.78-5.059 3.138-1.395 1.356-2.469 3.006-3.222 4.946-.754 1.942-1.131 4.118-1.131 6.53 0 2.337.396 4.447 1.187 6.331a13.975 13.975 0 0 0 3.364 4.862c1.45 1.356 3.194 2.402 5.229 3.137 2.035.735 4.277 1.102 6.727 1.102 7.99 0 12.983-3.315 14.98-9.95h-9.892c-1.13 1.81-2.808 2.714-5.03 2.714-4.147 0-6.22-2.204-6.22-6.613h21.539v-1.074c0-2.525-.36-4.796-1.074-6.813-.717-2.016-1.753-3.72-3.11-5.116zm-17.069 7.067c.264-1.507.895-2.676 1.893-3.505.998-.829 2.288-1.244 3.87-1.244 1.506 0 2.788.434 3.843 1.3 1.053.868 1.75 2.017 2.09 3.449z"
      />
      <path
        id="urtwn"
        d="M281.854 353.815v-8.705h-10.232v8.705h-3.392v8.537h3.392v20.464h10.232v-20.464h5.823v-8.537z"
      />
      <path
        id="urtwo"
        d="M124.019 340.19l-8.48 22.726-8.536-22.726H96.036L88.8 382.815h11.023l3.675-24.535 9.554 24.535h4.41l10.062-24.535 3.674 24.535h11.024l-7.236-42.625z"
      />
      <path
        id="urtwp"
        d="M238.103 353.82h-14.02l-10.741 10.459V335.9H203.11v46.921h10.232v-11.815l11.25 11.815h14.358l-15.376-15.602z"
      />
      <path
        id="urtwq"
        d="M199.376 353.2c-2.112 0-3.958.462-5.54 1.385-1.583.924-2.921 2.252-4.014 3.985v-4.748H179.59v29h10.232v-12.437c0-2.713.593-4.776 1.78-6.19 1.188-1.413 2.968-2.12 5.342-2.12 1.583 0 3.053.34 4.41 1.018v-9.78a6.282 6.282 0 0 0-1.102-.113z"
      />
      <clipPath id="urtwb">
        <use xlinkHref="#urtwa" />
      </clipPath>
    </defs>
    <g>
      <g transform="translate(-88 -284)">
        <g>
          <g />
          <g clipPath="url(#urtwb)">
            <use xlinkHref="#urtwc" />
          </g>
        </g>
        <g>
          <use xlinkHref="#urtwd" />
        </g>
        <g>
          <use xlinkHref="#urtwe" />
        </g>
        <g>
          <use xlinkHref="#urtwf" />
        </g>
        <g>
          <use xlinkHref="#urtwg" />
        </g>
        <g>
          <use xlinkHref="#urtwh" />
        </g>
        <g>
          <use xlinkHref="#urtwi" />
        </g>
        <g>
          <use xlinkHref="#urtwj" />
        </g>
        <g>
          <use xlinkHref="#urtwk" />
        </g>
        <g>
          <use xlinkHref="#urtwl" />
        </g>
        <g>
          <use xlinkHref="#urtwm" />
        </g>
        <g>
          <use xlinkHref="#urtwn" />
        </g>
        <g>
          <use xlinkHref="#urtwo" />
        </g>
        <g>
          <use xlinkHref="#urtwp" />
        </g>
        <g>
          <use xlinkHref="#urtwq" />
        </g>
      </g>
    </g>
  </svg>
);

SnappMarketLogo.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

SnappMarketLogo.defaultProps = {
  size: 1.5,
  color: '#000000',
};
export default SnappMarketLogo;
