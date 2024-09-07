/*
 * Please refer to the LICENSE file in the root directory of the project.
 * https://github.com/kubesphere/console/blob/master/LICENSE
 */

import { Modal } from '@kubed/components';
import styled from 'styled-components';

export const FullScreenModal = styled(Modal)`
  position: relative;
  margin: 0;
  height: calc(100vh - 40px);
  .kubed-modal-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .kubed-modal-body {
      padding: 20px;
      flex: 1;
    }
  }
`;
