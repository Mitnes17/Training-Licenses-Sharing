import SvgIcon from '@mui/material/SvgIcon'
import type IconInterface from './IconInterface'

const FilterIcon = (props: IconInterface): JSX.Element => {
  return (
    <SvgIcon {...props} sx={{ height: props?.height, width: props?.width }}>
      <path
        d="M11 20C10.7167 20 10.4792 19.9042 10.2875 19.7125C10.0958 19.5208 10 19.2833 10 19V13L4.025 5.375C3.79166 5.09167 3.75833 4.79167 3.925 4.475C4.09166 4.15833 4.35 4 4.7 4H19.3C19.65 4 19.9083 4.15833 20.075 4.475C20.2417 4.79167 20.2083 5.09167 19.975 5.375L14 13V19C14 19.2833 13.9042 19.5208 13.7125 19.7125C13.5208 19.9042 13.2833 20 13 20H11ZM12 13.1L18 5.5H6L12 13.1Z"
        fill="#252E32"
      />
    </SvgIcon>
  )
}

export default FilterIcon
