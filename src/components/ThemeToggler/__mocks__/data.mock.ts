import { IconProps } from '../../../icons/_Icon/Icon';
import { IconFlash } from '../../../icons/IconFlash/IconFlash';
import { IconDocRightClose } from '../../../icons/IconDocRightClose/IconDocRightClose';
import { IconWifi } from '../../../icons/IconWifi/IconWifi';
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
    iconIcon: IconWifi,
  },
  {
    theme: presetGpnDark,
    label: 'Dark',
    icon: IconDocRightClose,
  },
];

export const exampleThemesThree: Theme[] = [
  {
    theme: presetGpnDefault,
    label: 'Default',
    icon: IconWifi,
  },
  {
    theme: presetGpnDark,
    label: 'Dark',
    icon: IconDocRightClose,
  },
  {
    theme: presetGpnDisplay,
    label: 'Display',
    icon: IconFlash,
  },
];
