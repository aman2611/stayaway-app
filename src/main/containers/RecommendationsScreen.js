/**
 * Copyright (c) 2020 INESC TEC <https://www.inesctec.pt>
 *
 * This Source Code Form is subject to the terms of the European Union
 * Public License, v. 1.2. If a copy of the EUPL was not distributed with
 * this file, You can obtain one at https://opensource.org/licenses/EUPL-1.2.
 *
 * SPDX-License-Identifier: EUPL-1.2
 */

import React from 'react';
import { useSelector } from 'react-redux';

import Recommendations from '@main/components/Recommendations';

import { getInfectionStatus } from '@app/redux/account/selectors';

export default function SettingsScreen () {
  const infectionStatus = useSelector(getInfectionStatus);

  return (
    <Recommendations infectionStatus={infectionStatus} />
  );
}
