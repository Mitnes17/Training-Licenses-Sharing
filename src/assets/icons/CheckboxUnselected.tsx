import { SvgIcon } from '@mui/material'
import type IconInterface from './IconInterface'

const CheckboxUnselected = (props: IconInterface): JSX.Element => {
  return (
    <SvgIcon sx={{ height: props?.height, width: props?.width }}>
      <path
        d="M4.5 21C4.1 21 3.75 20.85 3.45 20.55C3.15 20.25 3 19.9 3 19.5V4.5C3 4.1 3.15 3.75 3.45 3.45C3.75 3.15 4.1 3 4.5 3H19.5C19.9 3 20.25 3.15 20.55 3.45C20.85 3.75 21 4.1 21 4.5V19.5C21 19.9 20.85 20.25 20.55 20.55C20.25 20.85 19.9 21 19.5 21H4.5ZM4 20H20V4H4V20Z"
        fill="#252E32"
      />
    </SvgIcon>
  )
}
export default CheckboxUnselected
