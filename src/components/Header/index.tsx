import * as S from './styled'
import ProfileAvatar from '../ProfileAvatar'
import NotificationsBtn from '../NotificationsBtn'

const Header = (): JSX.Element => {
  return (
    <S.Header>
      <S.Container>
        <S.LinkContainer>
          <S.Link to="/dashboard">Licendo</S.Link>
        </S.LinkContainer>
        <S.Nav>
          <S.NavLink to="/dashboard">Dashboard</S.NavLink>
          <S.NavLink to="/users">Users</S.NavLink>
          <S.NavLink to="/licenses">Licenses</S.NavLink>
          <S.NavLink to="/requests">Requests</S.NavLink>
        </S.Nav>
        <S.IconsContainer>
          <S.NotificationsBtnContainer>
            <NotificationsBtn notifications={3} />
          </S.NotificationsBtnContainer>
          <S.ProfileAvatarContainer>
            <ProfileAvatar firstName="Glen" lastName="Loyd" />
          </S.ProfileAvatarContainer>
        </S.IconsContainer>
      </S.Container>
    </S.Header>
  )
}
export default Header
