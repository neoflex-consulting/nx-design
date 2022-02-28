import * as React from 'react';

function IconBugSizeAll(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9 3C9 2.58579 9.33579 2.25 9.75 2.25C10.1642 2.25 10.5 2.58579 10.5 3V3.75C10.5 3.94698 10.5388 4.14204 10.6142 4.32402C10.6896 4.50601 10.8001 4.67137 10.9393 4.81066C11.0786 4.94995 11.244 5.06044 11.426 5.13582C11.608 5.2112 11.803 5.25 12 5.25C12.197 5.25 12.392 5.2112 12.574 5.13582C12.756 5.06044 12.9214 4.94995 13.0607 4.81066C13.1999 4.67137 13.3104 4.50601 13.3858 4.32403C13.4612 4.14204 13.5 3.94698 13.5 3.75V3C13.5 2.58579 13.8358 2.25 14.25 2.25C14.6642 2.25 15 2.58579 15 3V3.75C15 4.14397 14.9224 4.53407 14.7716 4.89805C14.7006 5.06956 14.614 5.23368 14.5131 5.38844C15.8508 5.7629 16.8863 6.86056 17.1715 8.23319C17.3533 8.21252 17.533 8.17285 17.7074 8.11451C18.0539 7.99866 18.3724 7.81174 18.6425 7.56574C18.9126 7.31973 19.1284 7.02005 19.2761 6.68586C19.4237 6.35168 19.5 5.99035 19.5 5.625V4.5C19.5 4.08579 19.8358 3.75 20.25 3.75C20.6642 3.75 21 4.08579 21 4.5V5.625C21 6.19912 20.8802 6.76692 20.6481 7.29207C20.4161 7.81722 20.077 8.28815 19.6525 8.67473C19.2281 9.06131 18.7276 9.35503 18.1831 9.53709C17.8799 9.63849 17.5667 9.70401 17.25 9.73292V12H21C21.4142 12 21.75 12.3358 21.75 12.75C21.75 13.1642 21.4142 13.5 21 13.5H17.25V15C17.25 15.2587 17.2313 15.513 17.1951 15.7617C17.5338 15.7873 17.8689 15.8546 18.1926 15.9629C18.7371 16.145 19.2376 16.4387 19.6621 16.8253C20.0865 17.2119 20.4256 17.6828 20.6576 18.2079C20.8897 18.7331 21.0095 19.3009 21.0095 19.875V21C21.0095 21.4142 20.6737 21.75 20.2595 21.75C19.8453 21.75 19.5095 21.4142 19.5095 21V19.875C19.5095 19.5097 19.4332 19.1483 19.2856 18.8141C19.1379 18.48 18.9221 18.1803 18.652 17.9343C18.3819 17.6883 18.0634 17.5013 17.7169 17.3855C17.4032 17.2806 17.0727 17.236 16.743 17.2538C15.8996 19.0255 14.0928 20.25 12 20.25C9.90701 20.25 8.10007 19.0252 7.2568 17.2533C6.93029 17.2369 6.60324 17.2816 6.29257 17.3855C5.94608 17.5013 5.62758 17.6883 5.35747 17.9343C5.08736 18.1803 4.87157 18.48 4.72392 18.8141C4.57627 19.1483 4.5 19.5097 4.5 19.875V21C4.5 21.4142 4.16421 21.75 3.75 21.75C3.33579 21.75 3 21.4142 3 21V19.875C3 19.3009 3.11985 18.7331 3.35187 18.2079C3.58389 17.6828 3.92299 17.2119 4.34745 16.8253C4.77192 16.4387 5.2724 16.145 5.81689 15.9629C6.13765 15.8557 6.46952 15.7885 6.80496 15.7624C6.76875 15.5135 6.75 15.259 6.75 15V13.5H3C2.58579 13.5 2.25 13.1642 2.25 12.75C2.25 12.3358 2.58579 12 3 12H6.75V9.73292C6.43328 9.70401 6.12012 9.63849 5.81689 9.53709C5.2724 9.35503 4.77192 9.06131 4.34745 8.67473C3.92299 8.28815 3.58389 7.81722 3.35187 7.29207C3.11985 6.76692 3 6.19912 3 5.625V4.5C3 4.08579 3.33579 3.75 3.75 3.75C4.16421 3.75 4.5 4.08579 4.5 4.5V5.625C4.5 5.99035 4.57627 6.35168 4.72392 6.68586C4.87157 7.02005 5.08736 7.31973 5.35747 7.56574C5.62758 7.81174 5.94608 7.99866 6.29257 8.11451C6.46703 8.17285 6.64667 8.21253 6.82846 8.2332C7.11367 6.86056 8.14925 5.7629 9.48693 5.38844C9.38603 5.23368 9.2994 5.06956 9.22836 4.89805C9.0776 4.53407 9 4.14397 9 3.75V3ZM8.25 9C8.25 7.75736 9.25736 6.75 10.5 6.75H13.5C14.7426 6.75 15.75 7.75736 15.75 9V15C15.75 17.0711 14.0711 18.75 12 18.75C9.92893 18.75 8.25 17.0711 8.25 15V9Z"/>
    </svg>
  );
}

export default IconBugSizeAll;