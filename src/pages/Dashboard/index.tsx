import { useEffect } from 'react'

import Doughnut from '../../components/Doughnut'
import { fetchData } from '../../store/actionCreators/fetchData'
import { useAppDispatch, useTypedSelector } from '../../hooks/redux'
import CostsOverview from '../../components/CostsOverview'
import AvgCosts from '../../components/AvgCosts'
import {
  getDashboardAvgCostData,
  getDashboardCostOverviewData,
  getDashboardDoughnutData,
  getDashboardLicensesExpiring,
  getDashboardLicensesUnused
} from '../../store/reducers/fetchDataReducer/selectors'
import Licenses from '../../components/Licenses'

import Grid from '@mui/material/Unstable_Grid2'
import * as S from './styled'
import {
  avgCostsUrl,
  costsOverviewUrl,
  doughnutUrl,
  licensesExpiringUrl,
  licensesUnusedUrl
} from '../../API'

const Dashboard = (): JSX.Element => {
  const dispatch = useAppDispatch()

  const doughnut = useTypedSelector(getDashboardDoughnutData)
  const costsOverview = useTypedSelector(getDashboardCostOverviewData)
  const averageCost = useTypedSelector(getDashboardAvgCostData)
  const licensesExpiring = useTypedSelector(getDashboardLicensesExpiring)
  const licensesUnused = useTypedSelector(getDashboardLicensesUnused)

  useEffect(() => {
    dispatch(fetchData({ link: doughnutUrl, field: 'doughnut' }))

    dispatch(fetchData({ link: costsOverviewUrl, field: 'costsOverview' }))

    dispatch(fetchData({ link: avgCostsUrl, field: 'averageCosts' }))

    dispatch(fetchData({ link: licensesExpiringUrl, field: 'licensesExpiring' }))

    dispatch(fetchData({ link: licensesUnusedUrl, field: 'licensesUnused' }))
  }, [dispatch])

  return (
    <S.Dashboard>
      <S.GridContainer container spacing={2}>
        <Grid lg={6} xs={12}>
          <CostsOverview data={costsOverview} />
        </Grid>

        <Grid lg={6} xs={12}>
          <Doughnut data={doughnut} />
        </Grid>

        <Grid lg={6} xs={12}>
          <AvgCosts data={averageCost} />
        </Grid>

        <Grid lg={6} xs={12}>
          <Licenses dataExpiring={licensesExpiring} dataUnused={licensesUnused} />
        </Grid>
      </S.GridContainer>
    </S.Dashboard>
  )
}

export default Dashboard
