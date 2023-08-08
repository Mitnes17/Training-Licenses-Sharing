import SvgIcon from '@mui/material/SvgIcon'
import type IconInterface from './IconInterface'

const PictureIcon = (props: IconInterface): JSX.Element => {
  return (
    <SvgIcon {...props} sx={{ height: props?.height, width: props?.width }}>
      <path d="M7.3 28.15h21.45c0.334 0 0.566 -0.134 0.7 -0.4s0.1 -0.534 -0.1 -0.8l-5.85 -7.8a0.756 0.756 0 0 0 -0.6 -0.3 0.756 0.756 0 0 0 -0.6 0.3l-6 7.75 -4.05 -5.55a0.758 0.758 0 0 0 -0.6 -0.3 0.758 0.758 0 0 0 -0.6 0.3l-4.3 5.6a0.816 0.816 0 0 0 -0.076 0.8c0.118 0.266 0.326 0.4 0.626 0.4ZM3 36c-0.8 0 -1.5 -0.3 -2.1 -0.9 -0.6 -0.6 -0.9 -1.3 -0.9 -2.1v-30C0 2.2 0.3 1.5 0.9 0.9 1.5 0.3 2.2 0 3 0h30c0.8 0 1.5 0.3 2.1 0.9 0.6 0.6 0.9 1.3 0.9 2.1v30c0 0.8 -0.3 1.5 -0.9 2.1 -0.6 0.6 -1.3 0.9 -2.1 0.9h-30Zm0 -3h30v-30h-30v30Zm0 -30v30Z" fill="#4A5C65"/>
    </SvgIcon>
  )
}

export default PictureIcon
