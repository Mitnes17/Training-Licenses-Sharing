import SvgIcon from '@mui/material/SvgIcon'
import type IconInterface from './IconInterface'

const ArrowDownIcon = (props: IconInterface): JSX.Element => {
  return (
    <SvgIcon {...props} sx={{ height: props?.height, width: props?.width }}>
      <path
        d="M12 15.0748C11.9 15.0748 11.8084 15.0581 11.725 15.0248C11.6417 14.9915 11.5584 14.9331 11.475 14.8498L6.52503 9.89981C6.39169 9.76648 6.32919 9.58731 6.33753 9.36231C6.34586 9.13731 6.41669 8.95815 6.55003 8.82481C6.71669 8.65815 6.89586 8.58731 7.08753 8.61231C7.27919 8.63731 7.45003 8.71648 7.60003 8.84981L12 13.2498L16.4 8.84981C16.5334 8.71648 16.7125 8.64148 16.9375 8.62481C17.1625 8.60815 17.3417 8.68315 17.475 8.84981C17.6417 8.98315 17.7125 9.15815 17.6875 9.37481C17.6625 9.59148 17.5834 9.77481 17.45 9.92481L12.525 14.8498C12.4417 14.9331 12.3584 14.9915 12.275 15.0248C12.1917 15.0581 12.1 15.0748 12 15.0748V15.0748Z"
        fill="#4A5C65"
      />
    </SvgIcon>
  )
}

export default ArrowDownIcon
