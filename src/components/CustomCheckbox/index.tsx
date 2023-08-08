import React from 'react'

import { type CheckboxProps } from '@mui/material/Checkbox'
import CheckboxSelected from '../../assets/icons/CheckboxSelected'
import { Checkbox } from '@mui/material'
import CheckboxIndeterminate from '../../assets/icons/CheckboxIndeterminate'
import CheckboxUnselected from '../../assets/icons/CheckboxUnselected'

const CustomCheckbox = React.forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  return (
    <Checkbox
      inputRef={ref}
      indeterminateIcon={<CheckboxIndeterminate />}
      checkedIcon={<CheckboxSelected />}
      icon={<CheckboxUnselected />}
      {...props}
    />
  )
})

export default CustomCheckbox
