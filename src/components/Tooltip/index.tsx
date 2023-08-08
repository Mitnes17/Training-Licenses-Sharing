import { type FC, type ReactElement } from 'react'

import * as S from './styled'

interface Props {
  title: string
  children: ReactElement
}

const Tooltip: FC<Props> = ({ title, children }): JSX.Element => {
  return <S.IconWrap data-content={title}>{children}</S.IconWrap>
}

export default Tooltip
