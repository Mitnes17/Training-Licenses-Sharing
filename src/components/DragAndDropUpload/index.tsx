import PictureIcon from '../../assets/icons/PictureIcon'
import * as S from './styled'

const DragAndDropUpload = (): JSX.Element => {
  return (
    <>
      <S.UploadLabelBox htmlFor='logo-upload'>
        <PictureIcon width={48} height={48} viewBox="-6 -6 48 48" fill="none"/>
        <S.Description>Drag and drop logo here</S.Description>
        <S.Description>or</S.Description>
        <S.InputUpload type="file" name="logo-upload" id="logo-upload" multiple={false}/>
        <S.UploadBtn>Browse file</S.UploadBtn>
      </S.UploadLabelBox>
    </>
  )
}

export default DragAndDropUpload
