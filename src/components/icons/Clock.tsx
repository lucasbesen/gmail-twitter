import { Clock2 as Clock_ } from 'styled-icons/icomoon/Clock2';
import styled from 'styled-components';

import {sidebarIconSharedStyle} from "./utils";

const Clock = styled(Clock_)`
  ${sidebarIconSharedStyle}
  height: 15px;
  margin-left: 2px;
`;

export default Clock;
