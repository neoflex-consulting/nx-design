import { createIcon } from '../_createIcon/createIcon';

import IconTestSizeM from './IconTest_size_m';
import IconTestSizeS from './IconTest_size_s';

export const IconTest = createIcon({
  l: IconTestSizeM,
  m: IconTestSizeM,
  s: IconTestSizeS,
  xs: IconTestSizeS,
  name: 'IconTest',
});
