import PlusIcon from '../../assets/icons/PlusIcon'
import { Container, FieldName, FieldsetTitle, InputText, Wrapper } from '../common/styles/styledGlobal'
import * as S from './styled'

const CredentialField = (): JSX.Element => {
  return (
    <Wrapper>
      <Container>
        <S.FlexDiv>
          <FieldName>Username 1</FieldName>
          <InputText type="text" required placeholder="Add license name" />
          <S.CopyBtn width={18} height={18} viewBox="0 0 20 21" fill="none" />
        </S.FlexDiv>
        <S.FlexDiv>
          <FieldName>Password</FieldName>
          <InputText type="text" required placeholder="Add web address" />
          <S.CopyBtn width={18} height={18} viewBox="0 0 20 21" fill="none" />
        </S.FlexDiv>
      </Container>
    </Wrapper>
  )
}

const Credentials = (): JSX.Element => {
  return (
    <S.Fieldset>
      <legend>
        <FieldsetTitle>Credentials</FieldsetTitle>
      </legend>
      <S.AddCredential>
        <PlusIcon width={24} height={24} viewBox="4 0 24 24" fill="none"/>
        <S.AddCredentialText>Add credential</S.AddCredentialText>
      </S.AddCredential>
      <CredentialField />
    </S.Fieldset>
  )
}
export default Credentials
