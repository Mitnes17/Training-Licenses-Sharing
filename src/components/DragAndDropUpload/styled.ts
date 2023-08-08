import styled from '@emotion/styled'

export const UploadLabelBox = styled.label`
  height: 215px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  width: inherit;
  border: 1px dashed #b1bec4;
  border-radius: 8px;
  padding: 22px;
  &:hover {
    background-color: #f6f8f9;
  }
`

export const InputUpload = styled.input`
  top: 0;
  left: 0;
  position: absolute;
  opacity: 0;
  height: 215px;
  width: inherit;
`

export const UploadBtn = styled.div`
  padding: 16px 12px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  border: 1px solid #252e32;
  border-radius: 8px;
`

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #252e32;
`
