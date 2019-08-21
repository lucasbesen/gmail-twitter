import { Inbox as Inbox_ } from 'styled-icons/octicons/Inbox';
import styled from 'styled-components';

import {sidebarIconSharedStyle} from "./utils";

const Inbox = styled(Inbox_)`
  ${sidebarIconSharedStyle}
  height: 17px;
  margin-left: 4px;
  color: #d93025;
`;

export default Inbox;
