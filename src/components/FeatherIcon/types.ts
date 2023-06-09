import { ReactFeatherIcon } from 'types';

import { ComponentProps } from '../types';

export interface FeatherIconProps extends ComponentProps<'svg'> {
  icon: ReactFeatherIcon;
}
