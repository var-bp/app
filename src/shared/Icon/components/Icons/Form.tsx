import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {PropTypes} from './types';

const Form = ({size, color}: PropTypes) => {
  return (
    <Svg width={`${size}`} height={`${size}`} viewBox="0 0 512 512">
      <Path
        fill={color}
        d="M448.656 147.746a17.368 17.368 0 00-8.148-10.621l-14.715-8.496a17.38 17.38 0 00-13.277-1.746 17.368 17.368 0 00-10.621 8.148l-8.782 15.207a17.369 17.369 0 00-11.937-1.058 17.388 17.388 0 00-10.621 8.152l-.555.957V93.5c0-20.68-16.82-37.5-37.5-37.5h-54.7c-1.222-8.465-8.503-15-17.3-15H235V22.5C235 10.094 224.906 0 212.5 0h-55C145.094 0 135 10.094 135 22.5V41h-25.5c-8.797 0-16.082 6.535-17.3 15H37.5C16.82 56 0 72.82 0 93.5v381C0 495.18 16.82 512 37.5 512h234.047c4.14 0 7.5-3.355 7.5-7.5s-3.36-7.5-7.5-7.5H37.5C25.094 497 15 486.906 15 474.5v-381C15 81.094 25.094 71 37.5 71H92v36.5c0 9.648 7.852 17.5 17.5 17.5h151c9.648 0 17.5-7.852 17.5-17.5v-7h47.5v134.867l-76.316 132.184a27.36 27.36 0 00-3.614 15.703l3.344 46.851a12.498 12.498 0 0017.723 10.446l43.117-19.996a27.35 27.35 0 0012.242-11.192l3.504-6.066V467.5h-281v-367h20c4.14 0 7.5-3.355 7.5-7.5s-3.36-7.5-7.5-7.5H42c-6.895 0-12.5 5.605-12.5 12.5v372c0 6.895 5.605 12.5 12.5 12.5h286c6.89 0 12.5-5.605 12.5-12.5v-92.687l14.5-25.114V474.5c0 12.406-10.094 22.5-22.5 22.5h-25.957a7.5 7.5 0 100 15H332.5c20.676 0 37.5-16.824 37.5-37.5V326.219l63.273-109.594 9.997-17.312a17.372 17.372 0 001.746-13.274 17.351 17.351 0 00-6.887-9.809l8.781-15.207a17.38 17.38 0 001.746-13.277zm-33.773-5.215a2.5 2.5 0 013.41-.914l14.715 8.496a2.505 2.505 0 011.164 1.516 2.5 2.5 0 01-.25 1.894l-8.746 15.145-19.035-10.988zm-31.34 22.301a2.48 2.48 0 011.516-1.16 2.449 2.449 0 011.89.246l42.414 24.488a2.464 2.464 0 011.164 1.516c.102.371.2 1.113-.25 1.89l-6.246 10.817-46.73-26.98zM150 22.5c0-4.137 3.363-7.5 7.5-7.5h55c4.137 0 7.5 3.363 7.5 7.5V41h-70zm113 85c0 1.379-1.121 2.5-2.5 2.5h-151a2.502 2.502 0 01-2.5-2.5v-49c0-1.379 1.121-2.5 2.5-2.5h151c1.379 0 2.5 1.121 2.5 2.5zm65-22h-50V71h54.5c12.406 0 22.5 10.094 22.5 22.5v90.773l-14.5 25.114V98c0-6.895-5.605-12.5-12.5-12.5zm41.8 103.14l46.731 26.981-91.945 159.258-46.734-26.98zm-60.792 213.223a12.426 12.426 0 01-5.563 5.082v.004l-39.828 18.469-3.086-43.23c-.18-2.5.39-4.965 1.645-7.133l8.176-14.168 46.734 26.98zm0 0"
      />
      <Path
        fill={color}
        d="M77.469 418.438a7.46 7.46 0 004.976 1.89c2.07 0 4.13-.851 5.61-2.52l14.87-16.742 11.513 13.73a12.502 12.502 0 009.289 4.47c3.597.062 7.05-1.383 9.484-4.028l13.844-15.031 15.343 17.367c2.747 3.106 7.485 3.399 10.586.656a7.499 7.499 0 00.657-10.585l-17.18-19.446a12.513 12.513 0 00-9.238-4.222c-.043-.004-.086-.004-.13-.004a12.517 12.517 0 00-9.195 4.03l-13.793 14.977-11.546-13.77a12.505 12.505 0 00-9.403-4.468c-3.64-.082-7.105 1.48-9.52 4.2l-16.792 18.906a7.498 7.498 0 00.625 10.59zm0 0M298.75 165.5a7.5 7.5 0 00-7.5-7.5h-213c-4.14 0-7.5 3.355-7.5 7.5s3.36 7.5 7.5 7.5h213a7.5 7.5 0 007.5-7.5zm0 0M79.25 213h89c4.14 0 7.5-3.355 7.5-7.5s-3.36-7.5-7.5-7.5h-89c-4.14 0-7.5 3.355-7.5 7.5s3.36 7.5 7.5 7.5zm0 0M245.75 205.5a7.5 7.5 0 00-7.5-7.5h-35c-4.14 0-7.5 3.355-7.5 7.5s3.36 7.5 7.5 7.5h35a7.5 7.5 0 007.5-7.5zm0 0M79.25 253h72c4.14 0 7.5-3.355 7.5-7.5s-3.36-7.5-7.5-7.5h-72c-4.14 0-7.5 3.355-7.5 7.5s3.36 7.5 7.5 7.5zm0 0M217.25 238h-34c-4.14 0-7.5 3.355-7.5 7.5s3.36 7.5 7.5 7.5h34c4.14 0 7.5-3.355 7.5-7.5s-3.36-7.5-7.5-7.5zm0 0M79.25 293h52c4.14 0 7.5-3.355 7.5-7.5s-3.36-7.5-7.5-7.5h-52c-4.14 0-7.5 3.355-7.5 7.5s3.36 7.5 7.5 7.5zm0 0M224.75 285.5a7.5 7.5 0 00-7.5-7.5h-54c-4.14 0-7.5 3.355-7.5 7.5s3.36 7.5 7.5 7.5h54a7.5 7.5 0 007.5-7.5zm0 0M79.25 333h52c4.14 0 7.5-3.355 7.5-7.5s-3.36-7.5-7.5-7.5h-52c-4.14 0-7.5 3.355-7.5 7.5s3.36 7.5 7.5 7.5zm0 0"
      />
    </Svg>
  );
};

export default Form;
