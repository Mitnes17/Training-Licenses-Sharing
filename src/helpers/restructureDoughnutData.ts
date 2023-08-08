import { type DoughnutAvgDisciplineType } from './../store/reducers/fetchDataReducer/fetchDataReducer.d'
import { type DoughnutData } from '../store/reducers/dashboardReducer/dashboard'
import { type DoughnutType } from '../store/reducers/fetchDataReducer/fetchDataReducer'

const colors = [
  '#168ACF',
  '#1EABF1',
  '#81D1FA',
  '#452D9E',
  '#5E3BAF',
  '#7E5BC0',
  '#AB1A58',
  '#D62162',
  '#004c4c',
  '#f16913',
  '#f88379',
  '#8e0152',
  '#1f77b4',
  '#8c564b',
  '#d62728',
  '#168ACF',
  '#1EABF1',
  '#81D1FA',
  '#452D9E',
  '#5E3BAF',
  '#7E5BC0',
  '#AB1A58',
  '#D62162',
  '#004c4c',
  '#f16913',
  '#f88379',
  '#8e0152',
  '#1f77b4',
  '#8c564b',
  '#d62728',
  '#168ACF',
  '#1EABF1',
  '#81D1FA',
  '#452D9E',
  '#5E3BAF',
  '#7E5BC0',
  '#AB1A58',
  '#D62162',
  '#004c4c',
  '#f16913',
  '#f88379',
  '#8e0152',
  '#1f77b4',
  '#8c564b',
  '#d62728'
]

export const restructureDoughnutData = (data: DoughnutType): DoughnutData => ({
  totalDisciplines: {
    title: 'Disciplines',
    value: data.totalDisciplines,
    content: null,
    prefix: ''
  },
  totalUsers: {
    title: 'Total Users',
    value: data.totalUsers,
    content: data.deltaUsers,
    prefix: ''
  },

  disciplines: data.numberOfUsersPerDiscipline.map(
    (discipline: DoughnutAvgDisciplineType, index) => ({
      id: discipline.id,
      label: discipline.name,
      value: discipline.value,
      color: colors[index]
    })
  )
})
