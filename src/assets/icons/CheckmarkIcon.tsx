import SvgIcon from '@mui/material/SvgIcon'
import type IconInterface from './IconInterface'

const CheckmarkIcon = (props: IconInterface): JSX.Element => {
  return (
    <SvgIcon {...props} sx={{ height: props?.height, width: props?.width }}>
      <path
        d="M9.4501 17.8496L3.8501 12.2496L4.9251 11.1746L9.4501 15.6996L19.0501 6.09961L20.1251 7.17461L9.4501 17.8496Z"
        fill="#252E32"
      />
    </SvgIcon>
  )
}

export default CheckmarkIcon
