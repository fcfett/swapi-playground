import React from 'react';

import { ReactComponent as Logo } from '../../../assets/icons/logo-fill.svg';
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg';
import { ReactComponent as AngleDown } from '../../../assets/icons/angle-down.svg';
import { ReactComponent as Reload } from '../../../assets/icons/reload.svg';

export default (props) => (
  <svg id="svg-defs">
    <symbol id="svg-icon-logo-fill">
      <Logo />
    </symbol>

    <symbol id="svg-icon-close">
      <Plus />
    </symbol>

    <symbol id="svg-icon-next">
      <AngleDown />
    </symbol>

    <symbol id="svg-icon-prev">
      <AngleDown />
    </symbol>

    <symbol id="svg-icon-reload">
      <Reload />
    </symbol>
  </svg>
);
