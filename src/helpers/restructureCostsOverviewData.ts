import { type costsOverviewData } from '../store/reducers/dashboardReducer/dashboard'
import { type CostsOverviewInterface } from '../store/reducers/fetchDataReducer/fetchDataReducer'

export const restructureCostsOverviewData = (data: CostsOverviewInterface): costsOverviewData => {
  const months: Record<number, string> = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec'
  }

  const barChart = data.costsReport.map((cost) => ({
    month: months[cost.month] + ' ' + cost.year.toString().slice(-2),
    cost: cost.cost
  }))

  const infoblocks = [
    {
      title: `Total costs for ${data.costsReport[data.costsReport.length - 1]?.year ?? ''}`,
      value: data.costsForCurrentYear.toLocaleString(),
      content: data.deltaCosts,
      prefix: '$'
    },
    {
      title: 'Software',
      value: data.numberOfSoftware,
      content: data.deltaSoftware,
      prefix: ''
    },
    {
      title: 'Trainings',
      value: data.numberOfTrainings,
      content: data.deltaTrainings,
      prefix: ''
    }
  ]

  return { barChart, infoblocks }
}
