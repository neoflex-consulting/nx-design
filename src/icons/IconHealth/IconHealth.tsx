import { createIcon } from '../_createIcon/createIcon';

import IconHealthSizeM from './IconHealth_size_m';
import IconHealthSizeS from './IconHealth_size_s';
import IconHealthSizeXs from './IconHealth_size_xs';

export const IconHealth = createIcon({
  l: IconHealthSizeM,
  m: IconHealthSizeM,
  s: IconHealthSizeS,
  xs: IconHealthSizeXs,
  name: 'IconHealth',
});
