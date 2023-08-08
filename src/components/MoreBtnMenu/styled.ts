import { Popper } from '@mui/material'
import styled from '@emotion/styled'

export const StyledPopper = styled(Popper)<{ width: string }>`
  z-index: 10;

  .MuiPaper-root {
    width: ${({ width }) => width};
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.16), 0px 4px 8px 2px rgba(0, 0, 0, 0.12);
    padding: 8px 0;
    border-radius: 8px;
    margin-left: -150px;
  }
`
