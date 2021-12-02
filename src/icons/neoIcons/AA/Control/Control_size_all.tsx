import * as React from 'react';

function ControlSizeAll(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M17.4053 9.15533C17.6982 8.86244 17.6982 8.38756 17.4053 8.09467C17.1124 7.80178 16.6376 7.80178 16.3447 8.09467L10.125 14.3143L7.65533 11.8447C7.36244 11.5518 6.88756 11.5518 6.59467 11.8447C6.30178 12.1376 6.30178 12.6124 6.59467 12.9053L10.125 16.4357L17.4053 9.15533Z"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 4.5H18C18.8284 4.5 19.5 5.17157 19.5 6V18C19.5 18.8284 18.8284 19.5 18 19.5H6C5.17157 19.5 4.5 18.8284 4.5 18V6C4.5 5.17157 5.17157 4.5 6 4.5Z"/>
    </svg>
  );
}

export default ControlSizeAll;
