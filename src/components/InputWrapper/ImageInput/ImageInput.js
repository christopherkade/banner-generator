import React, { useCallback } from 'react';
import styled from "styled-components"
import { useDropzone } from 'react-dropzone';


const ImageDropBlock = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  border: 1px dashed;
  border-radius: 1.25rem;
  margin: 20px auto;
  padding: 10px;

  &:hover {
    cursor: pointer;
  }
`

const ImageInput = ({ setImage }) => {

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]
    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImage(reader.result)
    }
  }, [setImage])

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <ImageDropBlock {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      <p>Chose a file or drag it here</p>
    </ImageDropBlock>
  )
}

export default ImageInput
