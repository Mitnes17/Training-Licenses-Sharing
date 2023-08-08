import SvgIcon from '@mui/material/SvgIcon'
import type IconInterface from './IconInterface'

const CalendarIcon = (props: IconInterface): JSX.Element => {
  return (
    <SvgIcon {...props} sx={{ height: props?.height, width: props?.width }}>
      <path
        d="M4.5 22C4.1 22 3.75 21.85 3.45 21.55C3.15 21.25 3 20.9 3 20.5V5C3 4.6 3.15 4.25 3.45 3.95C3.75 3.65 4.1 3.5 4.5 3.5H6.125V2.775C6.125 2.55833 6.2 2.375 6.35 2.225C6.5 2.075 6.69167 2 6.925 2C7.15833 2 7.35417 2.075 7.5125 2.225C7.67083 2.375 7.75 2.56667 7.75 2.8V3.5H16.25V2.775C16.25 2.55833 16.325 2.375 16.475 2.225C16.625 2.075 16.8167 2 17.05 2C17.2833 2 17.4792 2.075 17.6375 2.225C17.7958 2.375 17.875 2.56667 17.875 2.8V3.5H19.5C19.9 3.5 20.25 3.65 20.55 3.95C20.85 4.25 21 4.6 21 5V20.5C21 20.9 20.85 21.25 20.55 21.55C20.25 21.85 19.9 22 19.5 22H4.5ZM4.5 20.5H19.5V9.75H4.5V20.5ZM4.5 8.25H19.5V5H4.5V8.25ZM4.5 8.25V5V8.25Z"
        fill="#4A5C65"
      />
    </SvgIcon>
  )
}

export default CalendarIcon
