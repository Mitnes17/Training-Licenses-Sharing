import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  height: 424px;
  padding: 12px 16px;
  border-radius: 8px;
  color: #252e32;
  background-color: white;
  box-shadow: 0px 1px 2px 1px #0000001f;
`

export const Statistics = styled.section`
  display: flex;
  column-gap: 46px;
`

export const Disciplines = styled.section`
  width: 100%;
`

export const Doughnut = styled.div`
  width: 276px;
  height: 276px;
  margin-left: 14px;
`
export const ScrollBar = css`
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e8eded;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track-piece:end {
    margin-bottom: -10px;
  }

  &::-webkit-scrollbar-track-piece:start {
    margin-top: -10px;
  }
`

export const Legend = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 269px;
  row-gap: 10px;
  margin-right: -10px;
  padding-right: 7px;
  overflow-y: auto;
  ${ScrollBar};
`

export const LegendItem = styled.li`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`

export const LeftPart = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`

export const Dot = styled.div<{ backColor: string }>`
  width: 8px;
  height: 8px;
  background-color: ${(props) => props.backColor};
  border-radius: 50%;
`

export const ItemValue = styled.div`
  font-weight: 500;
`
