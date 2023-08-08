import styled from '@emotion/styled'
import { Link as RRLink, NavLink as RRNavLink } from 'react-router-dom'
import Badge from '@mui/material/Badge'

export const Header = styled.header`
  width: 100%;
  height: 52px;
  background-color: #fff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12);
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  height: inherit;
  padding: 0 24px;
  margin: auto;
  background-color: inherit;
`

export const Nav = styled.nav`
  height: inherit;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  justify-content: center;
`

export const NavLink = styled(RRNavLink)`
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: #566c77;
  text-decoration: none;
  &.active {
    color: #252e32;
    box-shadow: inset 0px -2px 0px 0px #252e32;
  }
  &:hover {
    background-color: #f6f8f9;
    color: #252e32;
  }
`

export const LinkContainer = styled.div`
  height: inherit;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  justify-content: flex-start;
`

export const Link = styled(RRLink)`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  letter-spacing: 0.02em;
  color: #252e32;
  padding: 0;
`

export const IconsContainer = styled.div`
  height: inherit;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`

export const NotificationsBtnContainer = styled.div`
  display: flex;
  height: inherit;
  padding: 16px;
  &:hover {
    background-color: #f6f8f9;
  }
`

export const ProfileAvatarContainer = styled.div`
  align-items: center;
  display: flex;
  height: inherit;
  padding: 4px;
  &:hover {
    background-color: #f6f8f9;
  }
`

export const StyledBadge = styled(Badge)`
  cursor: pointer;
  .MuiBadge-badge {
    background-color: #e72565;
    color: white;
    border: 1px solid #f6f8f9;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    padding: 2px;
    min-width: 18px;
    height: 18px;
    transform: translate(45%, -50%);
  }
`
