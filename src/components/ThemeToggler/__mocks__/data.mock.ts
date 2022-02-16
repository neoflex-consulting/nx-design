import { IconProps } from '../../../icons/_Icon/Icon';
import { Flash } from '../../../icons/Flash/Flash';
import { DocRightClose } from '../../../icons/DocRightClose/DocRightClose';
import { Wifi } from '../../../icons/Wifi/Wifi';
import { presetGpnDisplay } from '../../Theme/presets/presetGpnDisplay';
import { presetGpnDark, presetGpnDefault, ThemePreset } from '../../Theme/Theme';

export type Theme = {
  label: string;
  theme: ThemePreset;
  icon: React.FC<IconProps>;
};

export const exampleThemesTwo: Theme[] = [
  {
    theme: presetGpnDefault,
    label: 'Default',
    icon: Wifi,
  },
  {
    theme: presetGpnDark,
    label: 'Dark',
    icon: DocRightClose,
  },
];

export const exampleThemesThree: Theme[] = [
  {
    theme: presetGpnDefault,
    label: 'Default',
    icon: Wifi,
  },
  {
    theme: presetGpnDark,
    label: 'Dark',
    icon: DocRightClose,
  },
  {
    theme: presetGpnDisplay,
    label: 'Display',
    icon: Flash,
  },
];
