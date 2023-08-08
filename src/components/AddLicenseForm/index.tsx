import * as S from './styled'
import Credentials from '../Credentials'
import Details from '../Details'
import Expenses from '../Expenses'
import DeleteSubmitBtns from '../DeleteSaveBtns'
import ArrowLeft from '../../assets/icons/ArrowLeft'

const AddLicenseForm = (): JSX.Element => {
  return (
    <S.Wrapper>
      <S.GoBackBtn to="/licenses">
        <ArrowLeft width={48} height={48} viewBox="0 0 44 48" fill="none"/>
        <span>Back to list</span>
      </S.GoBackBtn >
      <S.Form>
        <S.FormTitle>Add License</S.FormTitle>
        <Details />
        <Credentials />
        <Expenses />
        <DeleteSubmitBtns />
      </S.Form>
    </S.Wrapper>
  )
}
export default AddLicenseForm
