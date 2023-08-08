import styled from '@emotion/styled'

export const Badge = styled.div<{ color: string, isDisplay: boolean, bgColor: string }>`
  display: ${props => props.isDisplay ? 'inline' : 'none'};
  position: absolute;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  padding: 0px 5px;
  margin-left: 4px;
  transform: translateY(calc(-50% + 18px));
  border-radius: 32px;
  text-align: center;
`
