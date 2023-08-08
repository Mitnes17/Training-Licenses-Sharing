import styled from '@emotion/styled'
import CopyIcon from '../../assets/icons/CopyIcon'
import PlusIcon from '../../assets/icons/PlusIcon'

export const Fieldset = styled.fieldset`
  position: relative;
  border: none;
  margin-top: 40px;
  width: 688px;
`

export const CopyBtn = styled(CopyIcon)`
  position: absolute;
  bottom: 15px;
  right: 12px;
`

export const FlexDiv = styled.div`
  position: relative;
`

export const AddCredentialText = styled.div`
  background-color: #fff;
  border: none;
`

export const AddCredential = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  position: absolute;
  right: 0;
  top: -24px;
`

export const Add = styled(PlusIcon)``
