import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Form = styled.form`
  width: 688px;
  margin: auto;
`

export const FormTitle = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: #252e32;
`

export const GoBackBtn = styled(Link)`
  text-decoration: none;
  color: #252e32;
  font-weight: 500;
  font-size: 14px;
  position: absolute;
  display: flex;
  align-items: center;
`

export const Wrapper = styled.div`
  position: relative;
`
