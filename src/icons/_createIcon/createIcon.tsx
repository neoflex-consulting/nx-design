import React, {forwardRef} from 'react';

import { cnIcon, Icon, IconProps } from '../_Icon/Icon';

type SizeComponent = React.FC<React.SVGProps<SVGSVGElement>>;
type CreateIconArguments = {
  l: SizeComponent;
  m: SizeComponent;
  s: SizeComponent;
  xs: SizeComponent;
  name: string;
};

function getSvgBySize(
  size: IconProps['size'] | undefined,
  l: SizeComponent,
  m: SizeComponent,
  s: SizeComponent,
  xs: SizeComponent,
  ) {
  switch (size) {
    case 'xs':
      return xs;
    case 's':
      return s;
    case 'm':
      return m;
    case 'l':
      return l;
    default:
      return m;
  }
}

export function createIcon({ l, m, s, xs, name }: CreateIconArguments) {
  const IconComponent = forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
    const Svg = getSvgBySize(props.size, l, m, s, xs);
    return (
      <Icon {...props} className={cnIcon(null, [name, props.className])} ref={ref}>
        <Svg className={cnIcon('Svg')} />
      </Icon>
    );
  });

  return IconComponent;
}
