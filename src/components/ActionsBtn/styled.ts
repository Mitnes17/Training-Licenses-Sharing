import styled from '@emotion/styled'
import { Button } from '@mui/material'

export const ActionsButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isOpen'
})(({ isOpen }: { isOpen: boolean }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '109px',
  padding: '8px 12px',
  borderRadius: '8px',
  backgroundColor: '#252e32',

  '&:hover': {
    backgroundColor: '#3c4a52'
  },
  '&:active': {
    backgroundColor: '#4a5c65'
  },
  '.Mui-disabled': {
    backgroundColor: '#e8eded'
  },
  ...(isOpen && {
    backgroundColor: '#4A5C65'
  })
}))
