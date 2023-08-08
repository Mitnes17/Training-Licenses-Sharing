import * as S from './styled'

const DeleteSubmitBtns = (): JSX.Element => {
  return (
    <S.ContainerBtns>
      <S.DeleteBtn type='reset'>Delete</S.DeleteBtn>
      <S.SaveBtn type='submit'>Save</S.SaveBtn>
    </S.ContainerBtns>
  )
}
export default DeleteSubmitBtns
