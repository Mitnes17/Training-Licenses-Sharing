import styled from '@emotion/styled'
import { Popper } from '@mui/material'

export const StyledPopper = styled(Popper)`
  z-index: 10;

  .MuiPaper-root {
    width: 200px;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.16), 0px 4px 8px 2px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
  }
`
