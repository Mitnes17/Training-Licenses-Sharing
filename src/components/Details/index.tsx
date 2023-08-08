import * as S from './styled'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import Radio from '@mui/material/Radio'
import DragAndDropUpload from '../DragAndDropUpload'
import {
  Container,
  FieldName,
  FieldsetTitle,
  InputText,
  Wrapper
} from '../common/styles/styledGlobal'

const Details = (): JSX.Element => {
  return (
    <S.Fieldset>
      <legend>
        <FieldsetTitle>Details</FieldsetTitle>
      </legend>

      <Wrapper>
        <Container>
          <div>
            <FieldName>Name</FieldName>
            <InputText type="text" required placeholder="Add license name" />
          </div>
          <div>
            <FieldName>Website</FieldName>
            <InputText type="text" required placeholder="Add web address" />
          </div>
        </Container>
      </Wrapper>

      <Wrapper>
        <FormControl>
          <S.RadioLabel focused={false}>Type of license</S.RadioLabel>
          <RadioGroup row name="license-type" sx={{ gap: 1.5 }}>
            <S.FormControlLabel
              value="training"
              control={
                <Radio
                  disableRipple={true}
                  icon={<S.RadioIcon />}
                  checkedIcon={<S.RadioIconChecked />}
                  sx={{ ml: 0.25 }}
                />
              }
              label="Training"
            />
            <S.FormControlLabel
              value="software"
              control={
                <Radio
                  disableRipple={true}
                  icon={<S.RadioIcon />}
                  checkedIcon={<S.RadioIconChecked />}
                />
              }
              label="Software"
            />
          </RadioGroup>
        </FormControl>
      </Wrapper>

      <Wrapper>
        <FieldName>Description (optional)</FieldName>
        <S.DescriptionTextarea placeholder="Add a description" />
      </Wrapper>

      <Wrapper>
        <FieldName>Logo (optional)</FieldName>
        <DragAndDropUpload />
      </Wrapper>
    </S.Fieldset>
  )
}
export default Details
