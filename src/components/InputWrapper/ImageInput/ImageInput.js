import React, {useCallback} from 'react';
import styled from "styled-components"
import {useDropzone} from 'react-dropzone';


const InputBlock = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 2px dashed;
  border-radius: 20px;
  width: 480px;
  font-family: sans-serif;
  margin: 40px auto;
  padding: 20px;
`

const ImageInput = ({ image, setImage }) => {
	const onDrop = useCallback(acceptedFiles => {
      const file = acceptedFiles[0]
    			let reader = new FileReader();
  				reader.readAsDataURL(file)
  				reader.onloadend = () => {
      				setImage(reader.result)
   				}  				
    }, [])

	const {acceptedFiles, getRootProps, getInputProps} = useDropzone({onDrop});
	
	return (

		<>
		<InputBlock>
			<div {...getRootProps({className: 'dropzone'})}>
           		<input {...getInputProps()} />
            	<p>Drag 'n' drop some files here, or click to select files</p>
        	</div>
		</InputBlock>
		</>
	)
}

export default ImageInput