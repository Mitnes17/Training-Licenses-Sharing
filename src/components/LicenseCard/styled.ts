import styled from '@emotion/styled'
import { Box, Paper } from '@mui/material'

export const LicenseCardStyled = styled(Paper)`
  display: flex;
  flex-direction: column;
  width: 336px;
  height: 436px;
  border-radius: 8px;
`
export const LogoWrapperStyled = styled(Box)`
  display: flex;
  justify-content: center;
  height: 128px;
  padding: 20px;
  border: 1px solid transparent;
  border-bottom-color: #e8eded;
  align-items: center;

  & img {
    height: 80%;
  }
`
export const LicenseCardContentWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  flex: 1;
`
export const LicenseDescriptionStyled = styled(Box)`
  display: -webkit-box;
  webkit-line-clamp: 4;
  webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
  height: 100px;
  width: 304px;
`
