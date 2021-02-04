/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './style.css'
import { useDispatch } from 'react-redux'
import {
    Container,
    Row,
    Col,
    Form
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faFutbol } from '@fortawesome/free-solid-svg-icons';
// import from action
import { CreateField } from '../../redux/actions/admin'
// Alert 
import swal from 'sweetalert'

const AddCreateField = () => {
    const dispatch = useDispatch()
    const [addField, setAddField] = useState([])

    // Create New Field
    const [picture, setPicture] = useState({
        picture: null
    })
    const [input, setInput] = useState({
        fieldName: '',
        location: '',
        price: '',
        description: '',
        image: []
    })
    let formCreateField = new FormData()
    formCreateField.append('fieldName', input.fieldName)
    formCreateField.append('location', input.location)
    formCreateField.append('price', input.price)
    formCreateField.append('description', input.description)
    formCreateField.append('image', picture.image)

    const HandleName = (name, value) => {
        setInput({
            ...input,
            [name]: value
        });
    }
    const handleImage = (image, value) => {
        setPicture({
            image: value.target.file.map((data) => {
                setPicture({
                    [image]: data
                })
            })
        })
    }

    const [submitted, setSubmited] = useState(false);
    const handleAddNewField = e => {
        console.log('HAndle Field', e)
        e.preventDefault();
        dispatch(CreateField(formCreateField))
        setSubmited(!submitted)
    }

    // review Of File JPG
    // const [file, setFile] = useState('')
    // const [imagePreviewUrl, setImagePreviewUrl] = useState('')

    // const handleImageChange = e => {
    //     e.preventDefault();
    //     let reader = new FileReader()
    //     let file = e.target.files[0];
    //     reader.onloadend = () => {
    //         setFile({
    //             file: file
    //         })
    //         setImagePreviewUrl({
    //             imagePreviewUrl: reader.result
    //         })
    //     }
    //     reader.readAsDataURL(file)
    // }


    // let $imagePreview = null;
    // if (imagePreviewUrl) {
    //     $imagePreview = (<img src={imagePreviewUrl} />);
    // } else {
    //     $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    // }

    return (
        <div>
            <Container>
                <h1>Create New Field <FontAwesomeIcon icon={faFutbol} /></h1>
                <Row className='detail-top adminPage'>
                    <Form onSubmit={handleAddNewField}>
                        <>
                            <div className="backgroundUploadImage">
                                <div className="previewComponent">
                                    <input className="fileInput"
                                        type="file"
                                        onChange={(e) => handleImage('image', e.target.value)}
                                        name="image"
                                        id="image" />
                                    {/* <div className="imgPreview">
                                        {$imagePreview}
                                    </div> */}
                                </div>
                                <div className="previewComponent">
                                    <input className="fileInput"
                                        type="file"
                                        onChange={(e) => handleImage('image', e.target.value)}
                                        name="image"
                                        id="image" />
                                    {/* <div className="imgPreview">
                                        {$imagePreview}
                                    </div> */}
                                </div>
                                <div className="previewComponent">
                                    <input className="fileInput"
                                        type="file"
                                        onChange={(e) => handleImage('image', e.target.value)}
                                        name="image"
                                        id="image" />
                                    {/* <div className="imgPreview">
                                        {$imagePreview}
                                    </div> */}
                                </div>
                            </div>
                        </>
                        <Col className='detail-text'>
                            <div className='desc-field sm-3'>
                                <label className="label nameField">Name Field</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="fieldName"
                                    id="fieldName"
                                    onChange={(e) => HandleName("fieldName", e.target.value)}
                                    placeholder="Write your email here" />
                                <div class="form-group">
                                    <label className="label location"><i className='marker'><FontAwesomeIcon icon={faMapMarkerAlt} /></i>Location</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="location"
                                        name="location"
                                        onChange={(e) => HandleName("location", e.target.value)}
                                        placeholder="Write your email here" />
                                </div>
                                <div class="form-group">
                                    <label for="description">Description</label>
                                    <textarea
                                        type="text"
                                        class="form-control"
                                        id="description"
                                        rows="3"
                                        onChange={(e) => HandleName("description", e.target.value)}
                                        name="description"
                                        placeholder="Write your email here" />
                                </div>
                                <div class="form-group">
                                    <label className='price-field' for="price">Enter Price</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="price"
                                        name="price"
                                        onChange={(e) => HandleName('price', e.target.value)}
                                        placeholder="Write your email here" />
                                </div>
                            </div>
                            <div className="btnWidth">
                                <button type="submit" class="btn btn-warning addField">Create Field</button>
                            </div>
                            <div className="btnWidth">
                                <button type="button" class="btn btn-danger cancel">Cancel</button>
                            </div>
                        </Col>
                    </Form>
                </Row>
            </Container>
        </div >
    )
}
export default AddCreateField;
// import React from 'react'

// class ImageUpload extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { file: '', imagePreviewUrl: '' };
//     }

//     _handleSubmit(e) {
//         e.preventDefault();
//         // TODO: do something with -> this.state.file
//         console.log('handle uploading-', this.state.file);
//     }

//     _handleImageChange(e) {
//         e.preventDefault();

//         let reader = new FileReader();
//         let file = e.target.files[0];

//         reader.onloadend = () => {
//             this.setState({
//                 file: file,
//                 imagePreviewUrl: reader.result
//             });
//         }

//         reader.readAsDataURL(file)
//     }

//     render() {
//         let { imagePreviewUrl } = this.state;
//         let $imagePreview = null;
//         if (imagePreviewUrl) {
//             $imagePreview = (<img src={imagePreviewUrl} />);
//         } else {
//             $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
//         }

//         return (
//             <div className="previewComponent">
//                 <form onSubmit={(e) => this._handleSubmit(e)}>
//                     <input className="fileInput"
//                         type="file"
//                         onChange={(e) => this._handleImageChange(e)} />
//                     <button className="submitButton"
//                         type="submit"
//                         onClick={(e) => this._handleSubmit(e)}>Upload Image</button>
//                 </form>
//                 <div className="imgPreview">
//                     {$imagePreview}
//                 </div>
//             </div>
//         )
//     }
// }
// export default ImageUpload