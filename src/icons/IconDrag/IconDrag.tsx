import { createIcon } from '../_createIcon/createIcon';

import IconDragSizeM from './IconDrag_size_m';
import IconDragSizeS from './IconDrag_size_s';
import IconDragSizeXs from './IconDrag_size_xs';

export const IconDrag = createIcon({
  l: IconDragSizeM,
  m: IconDragSizeM,
  s: IconDragSizeS,
  xs: IconDragSizeXs,
  name: 'IconDrag',
});
