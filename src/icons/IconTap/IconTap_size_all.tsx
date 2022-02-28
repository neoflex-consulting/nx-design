import * as React from 'react';

function IconTapSizeAll(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12.6987 2.92862C13.2518 2.92517 13.7904 3.10524 14.2303 3.44065C14.6701 3.77607 14.9863 4.24787 15.1293 4.78219C15.2313 5.16327 15.6229 5.3895 16.004 5.28751C16.385 5.18551 16.6113 4.7939 16.5093 4.41283C16.2845 3.57318 15.7877 2.83178 15.0965 2.3047C14.4054 1.77763 13.5589 1.49465 12.6897 1.50008C11.8206 1.50551 10.9777 1.79904 10.2932 2.3347C9.60868 2.87037 9.12113 3.61793 8.9069 4.46032C8.80968 4.84264 9.04079 5.23139 9.42311 5.32861C9.80543 5.42584 10.1942 5.19473 10.2914 4.81241C10.4277 4.27634 10.738 3.80063 11.1736 3.45975C11.6092 3.11887 12.1456 2.93208 12.6987 2.92862Z" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5714 7.21429C10.6923 7.21429 10.8119 7.22654 10.9286 7.25036V5.42857C10.9286 4.95497 11.1167 4.50077 11.4516 4.16588C11.7865 3.83099 12.2407 3.64286 12.7143 3.64286C13.1879 3.64286 13.6421 3.83099 13.977 4.16588C14.3119 4.50077 14.5 4.95497 14.5 5.42857V12.5838C15.1546 12.3315 15.8525 12.082 16.417 11.8938C17.2117 11.6289 17.9428 11.5803 18.5247 11.8228C19.1612 12.088 19.5 12.6547 19.5 13.2857C19.5 13.9237 19.1635 14.3645 18.8444 14.6836C18.701 14.827 18.5384 14.9678 18.3893 15.0968L18.3495 15.1313C18.1826 15.276 18.0211 15.4176 17.8622 15.5765C17.6316 15.8071 17.1119 16.4972 16.5336 17.3094C15.9731 18.0966 15.4041 18.9315 15.0943 19.3962C14.2958 20.594 13.0287 21.5 11.6429 21.5H8.07143C6.93743 21.5 6.04005 20.5495 5.47387 19.4643C4.87765 18.3216 4.5 16.7768 4.5 15.0714V11.8571C4.5 11.3835 4.68814 10.9293 5.02302 10.5945C5.35791 10.2596 5.81211 10.0714 6.28571 10.0714C6.40658 10.0714 6.52618 10.0837 6.64286 10.1075V10.0714H6.67893C6.74844 9.73091 6.91646 9.4153 7.16588 9.16588C7.50077 8.83099 7.95497 8.64286 8.42857 8.64286C8.54944 8.64286 8.66904 8.65511 8.78571 8.67893V8.64286H8.82179C8.8913 8.30234 9.05932 7.98673 9.30874 7.73731C9.64362 7.40242 10.0978 7.21429 10.5714 7.21429ZM12.4617 5.17603C12.5287 5.10906 12.6196 5.07143 12.7143 5.07143C12.809 5.07143 12.8998 5.10906 12.9668 5.17603C13.0338 5.24301 13.0714 5.33385 13.0714 5.42857V13.6429C13.0714 13.883 13.1921 14.107 13.3925 14.2392C13.593 14.3713 13.8464 14.394 14.0671 14.2994C14.877 13.9523 16.024 13.5306 16.8687 13.2491C17.5026 13.0378 17.843 13.0864 17.9753 13.1415C18.0531 13.1739 18.0714 13.2024 18.0714 13.2857C18.0714 13.362 18.0508 13.4569 17.8342 13.6735C17.7288 13.7789 17.604 13.887 17.4429 14.0266L17.4139 14.0517C17.246 14.1972 17.0504 14.3681 16.8521 14.5664C16.518 14.9004 15.9224 15.7048 15.3699 16.4808C14.7996 17.2817 14.2223 18.1288 13.9057 18.6038C13.2756 19.5489 12.3999 20.0714 11.6429 20.0714H8.07143C7.77686 20.0714 7.24567 19.7719 6.74042 18.8035C6.2652 17.8927 5.92857 16.5804 5.92857 15.0714V11.8571C5.92857 11.7624 5.9662 11.6716 6.03318 11.6046C6.10015 11.5376 6.19099 11.5 6.28571 11.5C6.38043 11.5 6.47128 11.5376 6.53825 11.6046C6.60523 11.6716 6.64286 11.7624 6.64286 11.8571V12.9286C6.64286 13.3231 6.96265 13.6429 7.35714 13.6429C7.75163 13.6429 8.07143 13.3231 8.07143 12.9286V10.4286C8.07143 10.3339 8.10906 10.243 8.17603 10.176C8.24301 10.1091 8.33385 10.0714 8.42857 10.0714C8.52329 10.0714 8.61413 10.1091 8.68111 10.176C8.74809 10.243 8.78571 10.3339 8.78571 10.4286V12.9286C8.78571 13.3231 9.10551 13.6429 9.5 13.6429C9.89449 13.6429 10.2143 13.3231 10.2143 12.9286V9C10.2143 8.90528 10.2519 8.81444 10.3189 8.74746C10.3859 8.68048 10.4767 8.64286 10.5714 8.64286C10.6661 8.64286 10.757 8.68048 10.824 8.74746C10.8909 8.81444 10.9286 8.90528 10.9286 9V13.2857C10.9286 13.6802 11.2484 14 11.6429 14C12.0373 14 12.3571 13.6802 12.3571 13.2857V5.42857C12.3571 5.33385 12.3948 5.24301 12.4617 5.17603Z" />
    </svg>
  );
}

export default IconTapSizeAll;