import './Alert.css';

import React from 'react';
import { classnames } from '@bem-react/classnames';

import { IconProps } from '../../icons/_Icon/Icon';
import { cn } from '../../utils/bem';
import { PropsWithHTMLAttributes } from '../../utils/types/PropsWithHTMLAttributes';
import { Typography } from '../Typography/Typography';
import { useTheme } from '../Theme/Theme';

export const alertPropView = ['filled', 'bordered', 'outlined'] as const;
export type AlertPropView = typeof alertPropView[number];
export const alertPropViewDefault: AlertPropView = alertPropView[0];

export const alertPropStatus = ['success', 'system', 'error', 'warning', 'info'] as const;
export type AlertPropStatus = typeof alertPropStatus[number];
export const alertPropStatusDefault: AlertPropStatus = alertPropStatus[0];

export const alertPropSize = ['s', 'm', 'l'] as const;
export type AlertPropSize = typeof alertPropSize[number];
export const alertPropSiseDefault: AlertPropSize = alertPropSize[0];

type Props = {
  view?: AlertPropView;
  status?: AlertPropStatus;
  icon?: React.FC<IconProps>;
  label?: React.ReactNode;
  title?: string;
  size?: AlertPropSize;
};

export type AlertProps = PropsWithHTMLAttributes<Props, HTMLDivElement>;

export const cnAlert = cn('Alert');

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    view = alertPropViewDefault,
    status = alertPropStatusDefault,
    size = alertPropSiseDefault,
    icon,
    label,
    title,
    children,
    ...otherProps
  } = props;
  const Icon = icon;
  const withIcon = !!icon;
  const { themeClassNames } = useTheme();
  const className =
    status !== 'system' && view === 'filled'
      ? classnames(props.className, themeClassNames.color.accent)
      : props.className;

  return (
    <div
      {...otherProps}
      className={cnAlert(
        {
          view,
          status,
          withIcon,
          size
        },
        [className],
      )}
      ref={ref}
    >
      {Icon && <Icon className={cnAlert('Icon')} size="s" />}
      <div className={cnAlert('Content')}>
        {title && (
          <Typography className={cnAlert('Title')} weight="bold" size={'body'} view={status}>
            {title}
          </Typography>
        )}
        {label ? (
          <Typography className={cnAlert('Label')} size={'body'} view={status}>
            {label}
          </Typography>
        ) : (
          children
        )}
      </div>
    </div>
  );
});
