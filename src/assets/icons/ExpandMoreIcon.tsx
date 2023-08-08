import SvgIcon from '@mui/material/SvgIcon'
import type IconInterface from './IconInterface'

interface Props extends IconInterface {
  transform: string
}

const ExpandMoreIcon = (props: Props): JSX.Element => {
  return (
    <SvgIcon
      transform={props.transform}
      sx={{ height: props?.height, width: props?.width }}
    >
      <path d="M12 15.0751C11.9 15.0751 11.8083 15.0584 11.725 15.0251C11.6417 14.9917 11.5583 14.9334 11.475 14.8501L6.525 9.90006C6.39166 9.76672 6.32916 9.58756 6.3375 9.36256C6.34583 9.13756 6.41666 8.95839 6.55 8.82506C6.71666 8.65839 6.89583 8.58756 7.0875 8.61256C7.27916 8.63756 7.45 8.71672 7.6 8.85006L12 13.2501L16.4 8.85006C16.5333 8.71672 16.7125 8.64172 16.9375 8.62506C17.1625 8.60839 17.3417 8.68339 17.475 8.85006C17.6417 8.98339 17.7125 9.15839 17.6875 9.37506C17.6625 9.59172 17.5833 9.77506 17.45 9.92506L12.525 14.8501C12.4417 14.9334 12.3583 14.9917 12.275 15.0251C12.1917 15.0584 12.1 15.0751 12 15.0751Z" />
    </SvgIcon>
  )
}

export default ExpandMoreIcon
