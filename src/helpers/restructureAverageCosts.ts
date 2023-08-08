import { type AverageCostsData } from '../store/reducers/dashboardReducer/dashboard'
import {
  type DoughnutAvgDisciplineType,
  type AverageCostsType
} from '../store/reducers/fetchDataReducer/fetchDataReducer'

export const restructureAverageCosts = (data: AverageCostsType): AverageCostsData => ({
  averageCostInfo: { title: '', value: data.averageCostPerUser, content: '/1 year', prefix: '' },
  barChart: data.averageCostPerDepartmentsMap.map((discipline: DoughnutAvgDisciplineType) => ({
    id: discipline.id,
    discipline: discipline.name,
    cost: discipline.value
  }))
})
