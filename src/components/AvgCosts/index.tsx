import { useEffect, type FC } from 'react'

import InfoBlock from '../InfoBlock'
import Tooltip from '../Tooltip'
import { type AverageCostsType } from '../../store/reducers/fetchDataReducer/fetchDataReducer'
import { useAppDispatch, useTypedSelector } from '../../hooks/redux'
import { restructureAverageCosts } from '../../helpers/restructureAverageCosts'
import { setAverageCostData } from '../../store/reducers/dashboardReducer'
import InfoIcon from '../../assets/icons/InfoIcon'
import { getDashboardAvgCostRestructuredData } from '../../store/reducers/dashboardReducer/selectors'

import { Article } from '../Doughnut/styled'
import Grid from '@mui/material/Unstable_Grid2'
import { Typography } from '@mui/material'
import * as S from './styled'

interface Props {
  data: AverageCostsType
}

const AvgCosts: FC<Props> = ({ data }): JSX.Element => {
  const dispatch = useAppDispatch()

  const averageCost = useTypedSelector(getDashboardAvgCostRestructuredData)
  const maxValue = averageCost.barChart.reduce(
    (max, item) => (item.cost > max ? item.cost : max),
    0
  )

  useEffect(() => {
    dispatch(setAverageCostData(restructureAverageCosts(data)))
  }, [data, dispatch])

  return (
    <Article>
      <S.TitleContainer>
        <Typography variant="smallTextMedium">Avg. costs per 1 user</Typography>
        <Tooltip title="Ratio of total amount to total users.">
          <InfoIcon width={24} height={24} viewBox="0 0 24 24" fill="none" />
        </Tooltip>
      </S.TitleContainer>

      <InfoBlock
        title={averageCost?.averageCostInfo?.title}
        value={'$' + averageCost?.averageCostInfo?.value.toLocaleString()}
        badgeContent={averageCost?.averageCostInfo?.content}
        prefix={averageCost?.averageCostInfo?.prefix}
        badgeBgColor={'white'}
        badgeColor="#627A86"
      />

      <S.GridContainer container>
        <Grid xs={12}>
          {averageCost?.barChart.map((item) => (
            <S.Discipline container key={item.id}>
              <Grid xs={6}>
                <S.ListItem>{item.discipline}</S.ListItem>
              </Grid>

              <Grid xs={6}>
                <S.ListValue bgWidth={(item.cost / maxValue) * 100}>${item.cost}</S.ListValue>
              </Grid>
            </S.Discipline>
          ))}
        </Grid>
      </S.GridContainer>
    </Article>
  )
}

export default AvgCosts
