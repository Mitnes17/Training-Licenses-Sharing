import { SvgIcon } from '@mui/material'
import type IconInterface from './IconInterface'

const CheckboxIndeterminate = (props: IconInterface): JSX.Element => {
  return (
    <SvgIcon sx={{ height: props?.height, width: props?.width }}>
      <path
        d="M7 12.7H17.025C17.2417 12.7 17.4208 12.6292 17.5625 12.4875C17.7042 12.3458 17.775 12.1667 17.775 11.95C17.775 11.7333 17.7042 11.5542 17.5625 11.4125C17.4208 11.2708 17.2417 11.2 17.025 11.2H7C6.78333 11.2 6.60417 11.2708 6.4625 11.4125C6.32083 11.5542 6.25 11.7333 6.25 11.95C6.25 12.1667 6.32083 12.3458 6.4625 12.4875C6.60417 12.6292 6.78333 12.7 7 12.7ZM4.5 21C4.1 21 3.75 20.85 3.45 20.55C3.15 20.25 3 19.9 3 19.5V4.5C3 4.1 3.15 3.75 3.45 3.45C3.75 3.15 4.1 3 4.5 3H19.5C19.9 3 20.25 3.15 20.55 3.45C20.85 3.75 21 4.1 21 4.5V19.5C21 19.9 20.85 20.25 20.55 20.55C20.25 20.85 19.9 21 19.5 21H4.5Z"
        fill="#252E32"
      />
    </SvgIcon>
  )
}
export default CheckboxIndeterminate
