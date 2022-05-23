import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { useDispatch, useSelector } from 'react-redux'
import { UPLOAD_IMAGES_REQUEST } from '../reducers/post';

const DropZone = () => {
  const dispatch = useDispatch();

  const onDrop = useCallback(acceptedFiles => {
    const imageFormData = new FormData();
    acceptedFiles.map((v) => {
      imageFormData.append('image', v)
    })
    // imageFormData.append('image', acceptedFiles);
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    })
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <form style={{border: '1px solid black', cursor: 'pointer', textAlign: 'center', verticalAlign: 'center' , height: '100px'}} {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </form>
  )

}

export default DropZone;