// import React, { useState } from 'react'
// import './style.css'
// import { useDispatch } from 'react-redux'
// import {
//     Container,
//     Row,
//     Col,
//     Form
// } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faFutbol } from '@fortawesome/free-solid-svg-icons';
// // import from action
// import { CreateField } from '../../redux/actions/Admin'

// const AddCreateField = () => {
//     const dispatch = useDispatch()
//     const [addField, setAddField] = useState()

//     // Create New Field
//     const [picture, setPicture] = useState({
//         picture: null
//     })
//     const [input, setInput] = useState({
//         fieldName: '',
//         location: '',
//         price: '',
//         description: '',
//         image: []
//     })
//     let formCreateField = new FormData()
//     formCreateField.append('fieldName', input.fieldName)
//     formCreateField.append('location', input.location)
//     formCreateField.append('price', input.price)
//     formCreateField.append('description', input.description)
//     formCreateField.append('image', picture.image)

//     const HandleName = (name, value) => {
//         setInput({
//             ...input,
//             [name]: value
//         });
//     }
//     const handleImage = e => {
//         setPicture({
//             image: e.target.files.map((data) => {
//                 setPicture({
//                     image: data
//                 })
//             })
//         })
//     }

//     const handleAddNewField = e => {
//         e.preventDefault();
//         dispatch(CreateField(formCreateField))
//         setAddField(!addField)
//     }

//     return (
//         <div>
//             <Container>
//                 <h1>Create New Field <FontAwesomeIcon icon={faFutbol} /></h1>
//                 <Row className='detail-top adminPage'>
//                     <Form onSubmit={handleAddNewField}>
//                         <>
//                             <div className='col-12 col-sm-4 col-md-8 field-img'>
//                                 <div className="position-relative overflow-hidden">
//                                     <img
//                                         src='https://images.unsplash.com/photo-1566796195789-d5a59f97235b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
//                                         alt="field small"
//                                         md={6}
//                                         xs={12}
//                                         className="col-3 img-sm"
//                                     />
//                                     <img
//                                         src='https://images.unsplash.com/photo-1566796195789-d5a59f97235b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
//                                         alt="field small"
//                                         md={6}
//                                         xs={12}
//                                         className="col-3 img-sm"
//                                     />
//                                     <img
//                                         src='https://images.unsplash.com/photo-1566796195789-d5a59f97235b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
//                                         alt="field small"
//                                         md={6}
//                                         xs={12}
//                                         className="col-3 img-sm"
//                                     />
//                                     <img
//                                         src='https://images.unsplash.com/photo-1566796195789-d5a59f97235b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
//                                         alt="field small"
//                                         md={6}
//                                         xs={12}
//                                         className="col-3 img-sm"
//                                     />
//                                 </div>
//                             </div>
//                         </>
//                         <Col className='detail-text'>
//                             <div className='desc-field sm-3'>
//                                 <label className="label nameField">Name Field</label>
//                                 <input type="fieldName" class="form-control" id="fieldName" aria-describedby="emailHelp" onChange={(e) => HandleName("fieldName", e.target.value)} />
//                                 <div class="form-group">
//                                     <label className="label location"><i className='marker'><FontAwesomeIcon icon={faMapMarkerAlt} /></i>Location</label>
//                                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => HandleName("location", e.target.value)} />
//                                 </div>
//                                 <div class="form-group">
//                                     <label for="exampleFormControlTextarea1">Description</label>
//                                     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => HandleName("description", e.target.value)} ></textarea>
//                                 </div>
//                                 <div class="form-group">
//                                     <label className='price-field'>Enter Price</label>
//                                     <input type="text" class="form-control" id="price" aria-describedby="emailHelp" onChange={input.price} />
//                                 </div>
//                             </div>
//                             <div className="btnWidth">
//                                 <button type="button" class="btn btn-warning addField">Create Field</button>
//                             </div>
//                             <div className="btnWidth">
//                                 <button type="button" class="btn btn-danger cancel">Cancel</button>
//                             </div>
//                         </Col>
//                     </Form>
//                 </Row>
//             </Container>
//         </div>
//     )
// }


// export default AddCreateField;
