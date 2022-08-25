import '../Theme.css';
import '../_color/Theme_color_gpnDatagram.css';
import '../_color/Theme_color_gpnDark.css';
import '../_control/Theme_control_gpnDefault.css';
import '../_font/Theme_font_gpnDatagram.css';
import '../_size/Theme_size_gpnDefault.css';
import '../_space/Theme_space_gpnDefault.css';
import '../_shadow/Theme_shadow_gpnDefault.css';

import { ThemePreset } from '../Theme';

export const presetDatagram: ThemePreset = {
  color: {
    primary: 'gpnDatagram',
    accent: 'gpnDatagram',
    invert: 'gpnDatagram',
  },
  control: 'gpnDefault',
  font: 'gpnDatagram',
  size: 'gpnDefault',
  space: 'gpnDefault',
  shadow: 'gpnDefault',
};
