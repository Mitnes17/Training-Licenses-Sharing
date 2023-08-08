import StyledAvatar from './styled'
import Stack from '@mui/material/Stack'

const stringToColor = (string: string): string => {
  let hash = 0
  let i

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }
  /* eslint-enable no-bitwise */

  return color
}

interface stringAvatarInterface {
  sx: {
    bgcolor: string
  }
  children: string
}

const stringAvatar = (name: string): stringAvatarInterface => {
  return {
    sx: {
      bgcolor: stringToColor(name)
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
  }
}

interface fullName {
  firstName: string
  lastName: string
}

const ProfileAvatar = (props: fullName): JSX.Element => {
  return (
    <Stack direction="row" spacing={2}>
      <StyledAvatar {...stringAvatar(`${props.firstName} ${props.lastName}`)} />
    </Stack>
  )
}

export default ProfileAvatar
