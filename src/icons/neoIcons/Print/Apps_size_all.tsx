import * as React from 'react';

function PrintSizeAll(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18 6V4.5C18 3.67157 17.3284 3 16.5 3H7.5C6.67157 3 6 3.67157 6 4.5V6H5.25C3.59315 6 2.25 7.34315 2.25 9V15.75C2.25 16.5784 2.92157 17.25 3.75 17.25H6V19.5C6 20.3284 6.67157 21 7.5 21H16.5C17.3284 21 18 20.3284 18 19.5V17.25H20.25C21.0784 17.25 21.75 16.5784 21.75 15.75V9C21.75 7.34315 20.4069 6 18.75 6H18ZM16.5 5C16.5 4.72386 16.2761 4.5 16 4.5H8C7.72386 4.5 7.5 4.72386 7.5 5V6H16.5V5ZM18 15.75H19.75C20.0261 15.75 20.25 15.5261 20.25 15.25V9C20.25 8.17157 19.5784 7.5 18.75 7.5H5.25C4.42157 7.5 3.75 8.17157 3.75 9L3.75 15.25C3.75 15.5261 3.97386 15.75 4.25 15.75H6V13.5C6 12.6716 6.67157 12 7.5 12H16.5C17.3284 12 18 12.6716 18 13.5V15.75ZM16.5 14C16.5 13.7239 16.2761 13.5 16 13.5H8C7.72386 13.5 7.5 13.7239 7.5 14V19C7.5 19.2761 7.72386 19.5 8 19.5H16C16.2761 19.5 16.5 19.2761 16.5 19V14Z"/>
    </svg>
  );
}

export default PrintSizeAll;
