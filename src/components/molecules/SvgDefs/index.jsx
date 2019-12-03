import React from 'react';
import { ReactComponent as Characters } from '../../../assets/icons/characters.svg';
import { ReactComponent as LogoFill } from '../../../assets/icons/logo-fill.svg';
import { ReactComponent as LogoOutline } from '../../../assets/icons/logo-outline.svg';
import { ReactComponent as Planets } from '../../../assets/icons/planets.svg';
import { ReactComponent as Species } from '../../../assets/icons/species.svg';
import { ReactComponent as Starships } from '../../../assets/icons/starships.svg';
import { ReactComponent as Vehicles } from '../../../assets/icons/vehicles.svg';
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg';
import { ReactComponent as AngleDown } from '../../../assets/icons/angle-down.svg';
import { ReactComponent as Reload } from '../../../assets/icons/reload.svg';

export default (props) => (
  <svg id="svg-defs">
    <symbol id="svg-icon-characters">
      <Characters />
    </symbol>

    <symbol id="svg-icon-logo-fill">
      <LogoFill />
    </symbol>

    <symbol id="svg-icon-logo-outline">
      <LogoOutline />
    </symbol>

    <symbol id="svg-icon-planets">
      <Planets />
    </symbol>

    <symbol id="svg-icon-species">
      <Species />
    </symbol>

    <symbol id="svg-icon-starships">
      <Starships />
    </symbol>

    <symbol id="svg-icon-vehicles">
      <Vehicles />
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
