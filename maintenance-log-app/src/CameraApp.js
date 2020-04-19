import React, { useState } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ImagePreview from './ImagePreview'

function dataURItoBlob (dataURI) {
    let byteString = atob(dataURI.split(',')[1]);
  
    // separate out the mime component
    let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  
    let ab = new ArrayBuffer(byteString.length);
    let ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    let blob = new Blob([ab], {type: mimeString});
    return blob;
}
  
function padWithZeroNumber (number, width) {
    number = number + '';
    return number.length >= width
        ? number
        : new Array(width - number.length + 1).join('0') + number;
}
  
function getFileExtention (blobType) {
    // by default the extention is .png
    let extention = IMAGE_TYPES.PNG;

    if (blobType === 'image/jpeg') {
        extention = IMAGE_TYPES.JPG;
    }
    return extention;
}
  
function getFileName (imageNumber, blobType) {
    const prefix = 'photo';
    const photoNumber = padWithZeroNumber(imageNumber, 4);
    const extention = getFileExtention(blobType);

    return `${prefix}-${photoNumber}.${extention}`;
}
  
function downloadImageFileFomBlob (blob, imageNumber) {
    window.URL = window.webkitURL || window.URL;
    let anchor = document.createElement('a');
    anchor.download = getFileName(imageNumber, blob.type);
    anchor.href = window.URL.createObjectURL(blob);
    let mouseEvent = document.createEvent('MouseEvents');
    mouseEvent.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    anchor.dispatchEvent(mouseEvent);
}

// I think this is where I would send the file to the S3 bucket, 
// and it would return the file url, and then I can save the url 
// to the image_url value in the database. I'm so stinking close!
function downloadImageFile (dataUri, imageNumber) {
    let blob = dataURItoBlob(dataUri);
    downloadImageFileFomBlob(blob, imageNumber);
}

function CameraApp (props) {
  const [dataUri, setDataUri] = useState('')
  const [isRemoveCamera, setIsRemoveCamera] = useState(false)
  const [imageNumber, setImageNumber] = useState(0)

  function handleTakePhoto (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
    downloadImageFile(dataUri, imageNumber);
    setImageNumber(imageNumber + 1);
  }
 
  function handleTakePhotoAnimationDone (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
  }
 
  function handleCameraError (error) {
    console.log('handleCameraError', error);
  }
 
  function handleCameraStart (stream) {
    //create button to start the camera, right now it's on when page starts.
    console.log('handleCameraStart');
  }
 
  function handleCameraStop () {
    //create button to stop camera
    console.log('handleCameraStop');
  }

  // umount camera after 60 seconds
  setTimeout(() => {
    setIsRemoveCamera(true)
  }, 60000)
 
  return isRemoveCamera ? null : (
    <div>
        { 
            (dataUri)
                ? <ImagePreview dataUri={dataUri}
                    isFullscreen={false}
                />
                : <Camera
                    onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
                    onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
                    onCameraError = { (error) => { handleCameraError(error); } }
                    idealFacingMode = {FACING_MODES.ENVIRONMENT}
                    idealResolution = {{width: 640, height: 480}}
                    imageType = {IMAGE_TYPES.JPG}
                    imageCompression = {0.97}
                    isMaxResolution = {true}
                    isImageMirror = {false}
                    isSilentMode = {false}
                    isDisplayStartCameraError = {true}
                    isFullscreen = {false}
                    sizeFactor = {1}
                    onCameraStart = { (stream) => { handleCameraStart(stream); } }
                    onCameraStop = { () => { handleCameraStop(); } }
              />
        }
        <button onClick={handleCameraStart}>Start Camera</button>
        <button onClick={handleCameraStop}>Stop Camera</button>
    </div>
    
  );
}
 
export default CameraApp;