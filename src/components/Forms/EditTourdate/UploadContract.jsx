/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Modal, Icon } from 'semantic-ui-react';

const UploadContract = props => {
    const [open, setOpen] = useState('');
    const [contractInput, setContractInput] = useState('');
    const [previewSource, setPreviewSource] = useState('');

    const handleFileInputChange = e => {
        const file = e.target.files[0];
        previewFile(file)
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        }
    }

    const uploadImage = async (base64EncodedImage) => {
        try {
            await fetch('http://localhost:3001/api/v1/images/contract', {
                method: 'POST',
                body: JSON.stringify({
                    tourdate: props.tourdate,
                    data: base64EncodedImage,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.uid}`
                }
            })
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!previewSource) return;
        uploadImage(previewSource);
        props.fetch();
        setOpen(false);
    }

    return (
        <Modal
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            open={open}
            trigger={props.trigger}
        >
            <Modal.Header>
                <div>
                    <div className="promoter-info-edit">
                        <h3>Upload Contract</h3>
                        <div>
                            <Icon name="remove"
                                onClick={() => setOpen(false)}
                            />
                        </div>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Content>
                <form className="ui form" onSubmit={handleSubmit}>
                    <div className="field">
                        <label for="contract">
                            Upload Contract
                        </label>
                        <input
                            name="contract"
                            type="file"
                            onChange={handleFileInputChange}
                            value={contractInput}
                        />
                        {previewSource && (
                            <img
                                src={previewSource}
                                alt="chosen"
                                style={{ height: '50px' }}
                            />
                        )}
                    </div>
                    <div className="field">
                        <input
                            type="submit"
                            className="ui pink submit button"
                            value="Submit Contract"
                        />
                    </div>
                </form>
            </Modal.Content>
        </Modal>
    )
}

export default UploadContract;