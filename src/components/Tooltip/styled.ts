import styled from '@emotion/styled'

export const Icon = styled.img`
  width: 100%;
  height: auto;
`

export const IconWrap = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &::after {
    content: attr(data-content);
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 7px 16px;
    gap: 8px;
    color: #f6f8f9;
    font-size: 12px;
    top: 100%;
    left: 50%;
    transform: translate(-50%);
    z-index: 5;
    opacity: 0;
    border-radius: 4px;
    background: #3c4a52;
    white-space: nowrap;
    transition: 0.5s ease-in-out;
  }

  &:hover {
    &::after {
      opacity: 1;
      transition: 0.5s ease-in-out;
    }
  }
`
