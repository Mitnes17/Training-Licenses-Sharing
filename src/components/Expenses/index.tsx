import { Container, FieldName, FieldsetTitle, Wrapper } from '../common/styles/styledGlobal'
import * as S from './styled'

const Expenses = (): JSX.Element => {
  return (
    <S.Fieldset>

      <legend>
        <FieldsetTitle>Expenses</FieldsetTitle>
      </legend>

      <Wrapper>
        <Container>
          <div>
            <FieldName>Cost</FieldName>
            <S.FlexDiv>
              <S.InputNumber type="text" name="cost" placeholder="0.00" />
              <S.SelectNarrow name="currency">
                <option value="usd">USD</option>
              </S.SelectNarrow>
              <S.SelectArrow width={24} height={24} viewBox="0 0 24 24" fill="none" />
            </S.FlexDiv>
          </div>
          <div>
            <FieldName>Period</FieldName>
            <S.FlexDiv>
              <S.InputNumber type="text" name="period" placeholder="0" />
              <S.SelectNarrow name="period">
                <option value="year">Year</option>
                <option value="month">Month</option>
              </S.SelectNarrow>
              <S.SelectArrow width={24} height={24} viewBox="0 0 24 24" fill="none" />
            </S.FlexDiv>
          </div>
        </Container>
      </Wrapper>

      <Wrapper>
        <Container>
          <div>
            <FieldName>Type</FieldName>
            <S.RelativeDiv>
              <S.SelectLarge name="type">
                <option value="non-recurring">Non recurring</option>
              </S.SelectLarge>
              <S.SelectArrow width={24} height={24} viewBox="0 0 24 24" fill="none" />
            </S.RelativeDiv>
          </div>
          <S.RelativeDiv>
            <FieldName>Expires on</FieldName>
            <S.InputDate type="date" name="expiry-date" />
            <S.CalendarBtn width={24} height={24} viewBox="0 0 24 24" fill="none" />
          </S.RelativeDiv>
        </Container>
      </Wrapper>

      <Wrapper>
        <Container>
          <div>
            <FieldName>Seats</FieldName>
            <S.InputTextLarge type="text" required placeholder="0"></S.InputTextLarge>
          </div>
        </Container>
      </Wrapper>
    </S.Fieldset>
  )
}
export default Expenses
