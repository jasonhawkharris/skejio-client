// import React, { useState } from 'react';

// const UploadPoster = props => {
//     const [open, setOpen] = useState(false);
//     const [posterInput, setPosterInput] = useState('');
//     const [previewSource, setPreviewSource] = useState('');

//     const handleFileInputChange = e => {
//         const file = e.target.files[0];
//         previewFile(file)
//     }

//     const previewFile = (file) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onloadend = () => {
//             setPreviewSource(reader.result);
//         }
//     }

//     const uploadImage = async (base64EncodedImage) => {
//         try {
//             await fetch('http://localhost:3001/api/v1/images/poster', {
//                 method: 'POST',
//                 body: JSON.stringify({
//                     tourdate: props.tourdate,
//                     data: base64EncodedImage,
//                 }),
//                 headers: {
//                     'Content-Type': 'application/json',
//                     authorization: `Bearer ${localStorage.uid}`
//                 }
//             })
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     const handleSubmit = e => {
//         e.preventDefault();
//         if (!previewSource) return;
//         uploadImage(previewSource);
//         console.log(previewSource);
//     }
// }

// export default UploadPoster;