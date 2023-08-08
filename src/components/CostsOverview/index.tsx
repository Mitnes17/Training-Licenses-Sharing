import { useEffect, type FC } from 'react'

import InfoBlock from '../InfoBlock'
import { type CostsOverviewInterface } from '../../store/reducers/fetchDataReducer/fetchDataReducer'
import { useAppDispatch, useTypedSelector } from '../../hooks/redux'
import { restructureCostsOverviewData } from '../../helpers/restructureCostsOverviewData'
import { setCostsOverviewData } from '../../store/reducers/dashboardReducer'
import { getDashboardCostOverviewRestructuredData } from '../../store/reducers/dashboardReducer/selectors'

import { Article } from '../Doughnut/styled'
import { ResponsiveBar } from '@nivo/bar'
import { Typography } from '@mui/material'
import * as S from './styled'

interface Props {
  data: CostsOverviewInterface
}

const CostsOverview: FC<Props> = ({ data }): JSX.Element => {
  const dispatch = useAppDispatch()

  const overviewData = useTypedSelector(getDashboardCostOverviewRestructuredData)

  useEffect(() => {
    dispatch(setCostsOverviewData(restructureCostsOverviewData(data)))
  }, [data, dispatch])

  return (
    <Article>
      <Typography variant='smallTextMedium' sx={{ mb: '12px' }}>Costs overview</Typography>

      <S.InfoBlockWrap>
        {overviewData.infoblocks.map((item) => (
          <InfoBlock
            key={item.title}
            title={item.title}
            value={item.value.toLocaleString()}
            badgeContent={item.content}
            prefix={item.prefix}
          />
        ))}
      </S.InfoBlockWrap>

      <S.Bars>
        <ResponsiveBar
          data={overviewData.barChart}
          keys={['cost']}
          colors={'#1B9DE2'}
          indexBy="month"
          margin={{ top: 10, right: 5, bottom: 0, left: 5 }}
          padding={0.015}
          theme={{
            grid: {
              line: {
                stroke: '#D3DBDF',
                strokeWidth: 1,
                strokeDasharray: '1 4'
              }
            }
          }}
          enableLabel={false}
          enableGridX={false}
          gridYValues={10}
          axisBottom={{
            tickSize: 0,
            tickPadding: 5,
            legendOffset: 32
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 50
          }}
          tooltip={({ id, value }) => (
            <S.Tooltip>
              <Typography variant='smallText'>
                {id}: {'$'}{value}
              </Typography>
            </S.Tooltip>
          )}
        />

        <S.Legend>
          {overviewData.barChart.map((item) => (
            <Typography variant='caption' key={item.month}>{item.month}</Typography>
          ))}
        </S.Legend>
      </S.Bars>
    </Article>
  )
}

export default CostsOverview
