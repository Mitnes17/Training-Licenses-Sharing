import { useEffect, type FC } from 'react'

import InfoBlock from '../InfoBlock'
import { type DoughnutType } from '../../store/reducers/fetchDataReducer/fetchDataReducer'
import { useAppDispatch, useTypedSelector } from '../../hooks/redux'
import { setDoughnutData } from '../../store/reducers/dashboardReducer'
import { restructureDoughnutData } from '../../helpers/restructureDoughnutData'
import { getDashboardDoughnutRestructuredData } from '../../store/reducers/dashboardReducer/selectors'

import { ResponsivePie } from '@nivo/pie'
import { Typography } from '@mui/material'
import { Tooltip } from '../CostsOverview/styled'
import * as S from './styled'

interface DoughnutProps {
  data: DoughnutType
}

const Doughnut: FC<DoughnutProps> = ({ data }) => {
  const dispatch = useAppDispatch()

  const doughnutData = useTypedSelector(getDashboardDoughnutRestructuredData)

  useEffect(() => {
    dispatch(setDoughnutData(restructureDoughnutData(data)))
  }, [data, dispatch])

  return (
    <S.Article>
      <Typography variant='smallTextMedium' sx={{ mb: '12px' }}>Users overview</Typography>

      <S.Statistics>
        <section>
          <InfoBlock
            title={doughnutData?.totalUsers?.title}
            value={doughnutData?.totalUsers?.value}
            badgeContent={doughnutData?.totalUsers?.content}
            prefix={doughnutData?.totalUsers?.prefix}
          />

          <S.Doughnut>
            <ResponsivePie
              data={doughnutData?.disciplines}
              colors={{
                datum: 'data.color'
              }}
              margin={{ top: 10, right: 10, bottom: 12, left: 10 }}
              innerRadius={0.65}
              padAngle={0.7}
              activeOuterRadiusOffset={8}
              enableArcLinkLabels={false}
              enableArcLabels={false}
              tooltip={({
                datum: {
                  data: { label, value }
                }
              }) => (
                <Tooltip>
                  {label}: {value}
                </Tooltip>
              )}
            />
          </S.Doughnut>
        </section>

        <S.Disciplines>
          <InfoBlock
            title={doughnutData?.totalDisciplines?.title}
            value={doughnutData?.totalDisciplines?.value}
            badgeContent={doughnutData?.totalDisciplines?.content}
            prefix={doughnutData?.totalDisciplines?.prefix}
          />

          <S.Legend>
            {doughnutData?.disciplines.map((discipline) => (
              <S.LegendItem key={discipline.id}>
                <S.LeftPart>
                  <S.Dot backColor={discipline.color}></S.Dot>
                  <Typography variant='smallText'>{discipline.label}</Typography>
                </S.LeftPart>

                <Typography variant='smallTextMedium'>{discipline.value}</Typography>
              </S.LegendItem>
            ))}
          </S.Legend>
        </S.Disciplines>
      </S.Statistics>
    </S.Article>
  )
}

export default Doughnut
