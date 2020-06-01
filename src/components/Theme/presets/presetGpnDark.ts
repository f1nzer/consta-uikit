import '../../../utils/whitepaper/whitepaper.css';
import '../Theme.css';
import '../_color/Theme_color_gpnDefault.css';
import '../_color/Theme_color_gpnDark.css';
import '../_control/Theme_control_gpnDefault.css';
import '../_font/Theme_font_gpnDefault.css';
import '../_size/Theme_size_gpnDefault.css';
import '../_space/Theme_space_gpnDefault.css';
import '../_gap/Theme_gap_m.css';

import { ThemePreset } from '../Theme';

export const presetGpnDark: ThemePreset = {
  color: {
    primary: 'gpnDark',
    accent: 'gpnDark',
    invert: 'gpnDefault',
  },
  control: 'gpnDefault',
  font: 'gpnDefault',
  size: 'gpnDefault',
  space: 'gpnDefault',
  gap: 'm',
};