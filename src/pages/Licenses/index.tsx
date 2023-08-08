import { useEffect } from 'react'

import LicenseCard from '../../components/LicenseCard'
import { fetchData } from '../../store/actionCreators/fetchData'
import { useAppDispatch, useTypedSelector } from '../../hooks/redux'
import { getLicensesData } from '../../store/reducers/fetchDataReducer/selectors'
import { type LicenseType } from '../../store/reducers/fetchDataReducer/fetchDataReducer'
import LicenseControlButtons from '../../components/LicenseControlButtons'

import * as S from './styled'
import { licensesUrl } from '../../API'

function Licenses (): JSX.Element {
  const dispatch = useAppDispatch()
  const licenses = useTypedSelector(getLicensesData)

  useEffect(() => {
    dispatch(fetchData({ link: licensesUrl, field: 'licenses' })).catch((error) => {
      console.log('Something went wrong', error)
    })
  }, [dispatch])

  return (
    <S.LicensePageStyled>
      <LicenseControlButtons />
      <S.LicencesWrapperStyled>
        {licenses.map((license: LicenseType) => {
          return (
            <LicenseCard
              id={license.id}
              key={license.id}
              name={license.name}
              description={license.description}
              seatsTotal={license.seatsTotal}
              seatsAvailable={license.seatsAvailable}
              expiresOn={license.expiresOn}
              logo={license.logo}
              licenseDuration={license.licenseDuration}
              cost={license.cost}
              website={license.website}
              currency={license.currency}
              credentials={license.credentials}
              isActive={license.isActive}
              isRecurring={license.isRecurring}
              licenseType={license.licenseType}
            />
          )
        })}
      </S.LicencesWrapperStyled>
    </S.LicensePageStyled>
  )
}

export default Licenses
