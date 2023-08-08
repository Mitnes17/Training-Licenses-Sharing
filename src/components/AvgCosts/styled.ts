import Grid from '@mui/material/Unstable_Grid2'
import styled from '@emotion/styled'
import { ScrollBar } from '../Doughnut/styled'

export const Discipline = styled(Grid)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  align-items: stretch;
  line-height: 24px;
  color: #252e32;
  border-bottom: 1px solid #e8eded;
`

export const ListValue = styled.div<{ bgWidth: number }>`
  display: flex;
  align-items: center;
  height: 100%;
  background: linear-gradient(
    to right,
    #f6f8f9 0%,
    #f6f8f9 ${({ bgWidth }) => `${bgWidth}%`},
    white ${({ bgWidth }) => `${bgWidth}%`},
    white 100%
  );
  padding-left: 12px;
  z-index: 3;
`

export const ListItem = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 12px;
  align-items: center;
  column-gap: 8px;
`

export const GridContainer = styled(Grid)`
  max-height: 312px;
  margin-right: -10px;
  padding-right: 7px;
  overflow-y: auto;
  ${ScrollBar}
`
