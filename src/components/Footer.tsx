import React from 'react';
import DashedDivider from './ui/DashedDivider';

const Footer = () => {
  return (
    <footer className="bg-blue-4">
      <DashedDivider className="stroke-blue-7 border-blue-7 bg-blue-4 border-b" />
      <div className="overflow-hidden">
        <div className="flex flex-row sm:absolute p-1.5">
          <svg
            className="fill-gray-12 w-auto h-6 align-text-top -mb-px"
            viewBox="0 0 300 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0L150 0L0 450L0 0Z" />
            <path d="M150 600C233.333 600 300 533.333 300 450H150L150 600Z" />
            <rect x="150" width="150" height="450" />
          </svg>
          <p className="pl-1.5 text-gray-12 text-sm leading-tight">© 2025</p>
        </div>
        <svg
          className="w-full h-auto max-h-[60vh] -mb-0.5"
          viewBox="0 0 128 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.69258 14.2315V41.7456H3.79506C2.6204 41.7456 1.69422 41.4068 1.01653 40.7291C0.338844 40.0514 0 39.1252 0 37.9506V14.2315H5.69258ZM5.69258 8.53888H15.1802L17.0777 14.2315H5.69258V8.53888ZM17.0777 14.2315H22.7703V41.7456H17.0777V14.2315ZM22.7703 8.53888H31.377L37.0018 14.2315V41.7456H35.1043C33.9296 41.7456 33.0034 41.4068 32.3257 40.7291C31.6481 40.0514 31.3092 39.1252 31.3092 37.9506V14.2315H22.7703V8.53888Z"
            fill="#0F3BFE"
          />
          <path
            d="M46.4598 10.4364V41.7456H40.7672V8.53888L46.4598 10.4364ZM46.4598 0V5.69259H40.7672V0H46.4598Z"
            fill="#0F3BFE"
          />
          <path
            d="M55.9236 14.2315V41.7456H50.231V14.2315H55.9236ZM55.9236 8.53888H74.8989L81.5402 14.2315H55.9236V8.53888ZM81.5402 14.2315H87.2328V41.7456H81.5402V14.2315Z"
            fill="#0F3BFE"
          />
          <path
            d="M122.307 12.3339C122.307 11.0237 122.669 10.075 123.392 9.48764C124.115 8.85513 125.018 8.53888 126.102 8.53888H128V36.053H122.307V27.5142H96.6908V21.8216H122.307V12.3339ZM90.9982 31.3092C90.9982 29.999 91.3596 29.0502 92.0825 28.4629C92.8054 27.8304 93.709 27.5142 94.7933 27.5142H96.6908V36.053H122.307V37.9506C122.307 39.0349 121.991 39.9384 121.359 40.6613C120.771 41.3842 119.823 41.7456 118.512 41.7456H90.9982V31.3092Z"
            fill="#0F3BFE"
          />
        </svg>
      </div>
      <DashedDivider className="stroke-blue-7 border-blue-7 bg-blue-4 border-t" />
    </footer>
  );
};

export default Footer;
