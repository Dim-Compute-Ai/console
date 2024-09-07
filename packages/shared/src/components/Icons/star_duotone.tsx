/*
 * Please refer to the LICENSE file in the root directory of the project.
 * https://github.com/kubesphere/console/blob/master/LICENSE
 */

import React from 'react';
import type { IconProps } from './interfaces';
import { mapProps } from './utils';

const defaultSize = 16;

export default function Icon(properties: IconProps) {
  const props = mapProps(properties, defaultSize);
  return (
    <svg {...props}>
      <path
        d="M7.70083 0.943204C7.82285 0.694551 8.17731 0.69455 8.29932 0.943204L10.2145 4.84615C10.3113 5.04344 10.4992 5.18034 10.7166 5.21212L15.0015 5.83833C15.2743 5.8782 15.3836 6.21317 15.1867 6.40619L12.0825 9.44937C11.9265 9.60235 11.8553 9.82209 11.8921 10.0375L12.6246 14.3331C12.6711 14.6056 12.3846 14.813 12.1402 14.6838L8.3117 12.6595C8.11674 12.5564 7.88341 12.5564 7.68846 12.6595L3.85996 14.6838C3.61553 14.813 3.32908 14.6056 3.37556 14.3331L4.1081 10.0375C4.14483 9.82209 4.07367 9.60235 3.91762 9.44937L0.813478 6.40619C0.616597 6.21317 0.725816 5.8782 0.998629 5.83833L5.28353 5.21212C5.50098 5.18034 5.68881 5.04344 5.78562 4.84615L7.70083 0.943204Z"
        fill="currentColor"
      />
    </svg>
  );
}
