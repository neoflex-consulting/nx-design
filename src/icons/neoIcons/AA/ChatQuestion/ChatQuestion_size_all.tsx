import * as React from 'react';

function ChatQuestionSizeAll(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.86338 12.1295V12.2795H10.3459L10.348 12.1316C10.3546 11.6537 10.4667 11.3141 10.662 11.0897L11.2999 10.4622L11.3028 10.4592C11.849 9.89146 12.1379 9.29776 12.1379 8.68008C12.1379 8.01044 11.9298 7.47067 11.499 7.08168C11.0737 6.69453 10.4889 6.51052 9.76484 6.51052C9.05932 6.51052 8.47493 6.69783 8.02759 7.08502C7.58051 7.47528 7.35739 8.00518 7.35002 8.65751L7.34831 8.80921H8.91811V8.65921C8.91811 8.40441 8.99652 8.21937 9.1413 8.08573C9.29282 7.94565 9.49574 7.86988 9.76484 7.86988C10.0503 7.86988 10.2409 7.94845 10.3641 8.08238L10.3663 8.08464C10.4942 8.21792 10.5698 8.42366 10.5698 8.72705C10.5698 8.944 10.5089 9.14565 10.3853 9.33414C10.3055 9.45693 10.1022 9.68057 9.75959 10.0127C9.41503 10.3466 9.17304 10.6641 9.04718 10.9654C8.92168 11.2658 8.86338 11.6568 8.86338 12.1295Z" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5098 13.7525C10.5098 13.5186 10.4325 13.316 10.2734 13.1566C10.1108 12.99 9.89339 12.9136 9.6396 12.9136C9.38969 12.9136 9.17477 12.988 9.01241 13.1499C8.85093 13.3074 8.77467 13.5134 8.77467 13.7525C8.77467 13.9788 8.848 14.1767 8.99833 14.3357L8.9998 14.3372C9.16061 14.5025 9.38136 14.5757 9.6396 14.5757C9.89784 14.5757 10.1186 14.5025 10.2794 14.3372C10.4338 14.1785 10.5098 13.9801 10.5098 13.7525Z"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.51249 8.53325C2.06408 10.1833 2.19374 11.9339 2.8743 13.4958L1.54893 16.9836C1.44749 17.2506 1.50645 17.552 1.70102 17.761C1.89559 17.97 2.19199 18.0504 2.46553 17.9684L5.90179 16.9375C7.36918 17.8147 9.0954 18.1658 10.7942 17.927C12.5908 17.6744 14.2349 16.7791 15.4219 15.4071C16.609 14.035 17.2584 12.2792 17.2499 10.465C17.2415 8.65073 16.5756 6.90106 15.3758 5.54017C14.176 4.17927 12.5236 3.29942 10.7247 3.06363C8.92587 2.82784 7.10251 3.25211 5.59251 4.25781C4.08251 5.26352 2.98825 6.78248 2.51249 8.53325ZM10.5298 4.55091C9.0907 4.36228 7.63201 4.70169 6.42401 5.50625C5.21601 6.31082 4.3406 7.52599 3.95999 8.92661C3.57938 10.3272 3.71937 11.8183 4.35403 13.1236C4.41986 13.259 4.44127 13.4045 4.42395 13.5436C4.4196 13.618 4.40399 13.693 4.3761 13.7664L3.49141 16.0946L5.78451 15.4067C5.97655 15.349 6.17359 15.3721 6.3393 15.4561C6.38447 15.4743 6.42852 15.497 6.47083 15.5247C7.68629 16.3179 9.14809 16.6437 10.5854 16.4416C12.0226 16.2395 13.3379 15.5233 14.2876 14.4257C15.2372 13.328 15.7567 11.9234 15.75 10.472C15.7432 9.02059 15.2105 7.62085 14.2507 6.53214C13.2908 5.44342 11.9689 4.73954 10.5298 4.55091Z"/>
      <path d="M18.8261 17.2936C18.8304 17.368 18.846 17.4431 18.8739 17.5164L19.7586 19.8446L17.4655 19.1567C17.2735 19.099 17.0765 19.1221 16.9107 19.2061C16.8656 19.2242 16.8215 19.247 16.7792 19.2747C15.5637 20.0679 14.1019 20.3937 12.6647 20.1916C11.9093 20.0854 11.1877 19.8372 10.5351 19.4663C10.2764 19.4886 10.0145 19.5 9.75001 19.5C9.14363 19.5 8.55125 19.4401 7.97848 19.3257C9.15208 20.6025 10.7339 21.4349 12.4558 21.677C14.1546 21.9158 15.8809 21.5647 17.3482 20.6875L20.7845 21.7184C21.058 21.8005 21.3544 21.72 21.549 21.511C21.7436 21.302 21.8025 21.0006 21.7011 20.7336L20.3757 17.2458C21.0563 15.6839 21.1859 13.9333 20.7375 12.2833C20.3645 10.9106 19.6114 9.68048 18.5757 8.72846C18.69 9.30123 18.75 9.89362 18.75 10.5C18.75 10.7645 18.7386 11.0264 18.7162 11.2851C18.9634 11.7198 19.157 12.1869 19.29 12.6766C19.6706 14.0772 19.5307 15.5683 18.896 16.8736C18.8302 17.009 18.8088 17.1546 18.8261 17.2936Z"/>
    </svg>
  );
}

export default ChatQuestionSizeAll;
