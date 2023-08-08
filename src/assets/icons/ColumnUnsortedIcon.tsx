import { SvgIcon } from '@mui/material'
import type IconInterface from './IconInterface'

const ColumnSortedAscendingIcon = (props: IconInterface): JSX.Element => {
  return (
    <SvgIcon
      sx={{
        height: props?.height,
        width: props?.width,
        transform: 'rotate(180deg)',
        opacity: '50%'
      }}
    >
      <path
        d="M12 19.7C11.9167 19.7 11.8292 19.6833 11.7375 19.65C11.6458 19.6167 11.5583 19.5583 11.475 19.475L4.525 12.525C4.375 12.375 4.3 12.2 4.3 12C4.3 11.8 4.375 11.625 4.525 11.475C4.675 11.325 4.85 11.25 5.05 11.25C5.25 11.25 5.425 11.325 5.575 11.475L11.25 17.15V4.75C11.25 4.53333 11.3208 4.35417 11.4625 4.2125C11.6042 4.07083 11.7833 4 12 4C12.2167 4 12.3958 4.07083 12.5375 4.2125C12.6792 4.35417 12.75 4.53333 12.75 4.75V17.15L18.425 11.475C18.575 11.325 18.75 11.25 18.95 11.25C19.15 11.25 19.325 11.325 19.475 11.475C19.625 11.625 19.7 11.8 19.7 12C19.7 12.2 19.625 12.375 19.475 12.525L12.525 19.475C12.4417 19.5583 12.3583 19.6167 12.275 19.65C12.1917 19.6833 12.1 19.7 12 19.7Z"
        fill="#252E32"
      />
    </SvgIcon>
  )
}
export default ColumnSortedAscendingIcon
