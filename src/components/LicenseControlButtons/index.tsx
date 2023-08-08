import { FormControl, InputAdornment, ListItemIcon, MenuItem, Select, type SelectChangeEvent } from '@mui/material'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import SearchIcon from '../../assets/icons/SearchIcon'
import PlusIcon from '../../assets/icons/PlusIcon'
import FilterIcon from '../../assets/icons/FilterIcon'

import * as S from './styled'

const LicenseControlButtons = (): JSX.Element => {
  const [sortByMenuValue, setSortByMenuValue] = useState('0')

  const handleSortByValue = (e: SelectChangeEvent<string>): void => {
    setSortByMenuValue(e.target.value)
  }

  return (
    <S.ButtonsWrapperStyled>
      <S.SearchFieldStyled
        id="outlined-basic"
        variant="outlined"
        placeholder="Placeholder"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon width={24} height={24} viewBox="0 0 24 24" fill="none" />
            </InputAdornment>
          )
        }}
      />
      <S.RightButtonsWrapperStyled>
        <FormControl>
          <Select
            sx={{ width: '192px', height: '48px', borderRadius: '8px' }}
            IconComponent={KeyboardArrowDownOutlinedIcon}
            value={sortByMenuValue}
            onChange={handleSortByValue}
          >
            <MenuItem value={0}>
              <ListItemIcon sx={{ minWidth: 'unset', textOverflow: 'clip' }}>
                Sort by
              </ListItemIcon>
              <span>&nbsp;&nbsp;expiry date</span>
            </MenuItem>
            <MenuItem value={1}>
              <ListItemIcon sx={{ minWidth: 'unset' }}>Sort by </ListItemIcon>
              <span> &nbsp;&nbsp;recently added</span>
            </MenuItem>
          </Select>
        </FormControl>
        <S.FilterButtonStyled
          variant="outlined"
          startIcon={<FilterIcon width={24} height={24} viewBox="0 0 24 24" fill="none" />}
        >
          Filters
        </S.FilterButtonStyled>
        <Link to="/licenses/add">
          <S.AddLicenseButtonStyled
            variant="contained"
            startIcon={<PlusIcon width={24} height={24} viewBox="0 0 24 24" fill="none" />}
          >
            Add License
          </S.AddLicenseButtonStyled>
        </Link>
      </S.RightButtonsWrapperStyled>
    </S.ButtonsWrapperStyled>
  )
}

export default LicenseControlButtons
