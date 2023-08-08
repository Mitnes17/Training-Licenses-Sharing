import SvgIcon from '@mui/material/SvgIcon'
import type IconInterface from './IconInterface'

const ArrowLeft = (props: IconInterface): JSX.Element => {
  return (
    <SvgIcon {...props} sx={{ height: props?.height, width: props?.width }}>
      <path
        d="M23.175 31.4748L16.225 24.5248C16.1417 24.4415 16.0833 24.3581 16.05 24.2748C16.0167 24.1915 16 24.0998 16 23.9998C16 23.8998 16.0167 23.8081 16.05 23.7248C16.0833 23.6415 16.1417 23.5581 16.225 23.4748L23.2 16.4998C23.3333 16.3665 23.5 16.2998 23.7 16.2998C23.9 16.2998 24.075 16.3748 24.225 16.5248C24.375 16.6748 24.45 16.8498 24.45 17.0498C24.45 17.2498 24.375 17.4248 24.225 17.5748L18.55 23.2498H30.95C31.1667 23.2498 31.3458 23.3206 31.4875 23.4623C31.6292 23.604 31.7 23.7831 31.7 23.9998C31.7 24.2165 31.6292 24.3956 31.4875 24.5373C31.3458 24.679 31.1667 24.7498 30.95 24.7498H18.55L24.25 30.4498C24.3833 30.5831 24.45 30.7498 24.45 30.9498C24.45 31.1498 24.375 31.3248 24.225 31.4748C24.075 31.6248 23.9 31.6998 23.7 31.6998C23.5 31.6998 23.325 31.6248 23.175 31.4748Z"
        fill="#252E32"
      />
    </SvgIcon>
  )
}

export default ArrowLeft