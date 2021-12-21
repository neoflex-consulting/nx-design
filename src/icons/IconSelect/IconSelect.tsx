import { createIcon } from '../_createIcon/createIcon';

import IconSelectSizeM from './IconSelect_size_m';
import IconSelectSizeS from './IconSelect_size_s';
import IconSelectSizeXs from './IconSelect_size_xs';

export const IconSelect = createIcon({
  l: IconSelectSizeM,
  m: IconSelectSizeM,
  s: IconSelectSizeS,
  xs: IconSelectSizeXs,
  name: 'IconSelect',
});
