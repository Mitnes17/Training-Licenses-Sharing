import BellIcon from '../../assets/icons/BellIcon'
import { StyledBadge } from '../Header/styled'
import { Container } from './styled'

const NotificationsBtn = ({ notifications }: { notifications: number }): JSX.Element => {
  return (
    <Container>
      <StyledBadge badgeContent={notifications}>
        <BellIcon width={16} height={20} viewBox="0 0 16 20" fill="none" />
      </StyledBadge>
    </Container>
  )
}

export default NotificationsBtn
