import React, { useState } from "react";
import {
  Button,
  Col,
  Input,
  Label,
  Modal,
  Row,
} from "reactstrap";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import swal from "sweetalert";
import "@fortawesome/fontawesome-free";
import "./Feedback.css";

const Feedback = (props) => {
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');

  const toggleFeedback = () => setModalFeedback(!modalFeedback);
  const [modalFeedback, setModalFeedback] = useState(false);

  const token = localStorage.getItem("token");
  const baseUrl = `https://soka.kuyrek.com:3002/feedback/${props.id}/create`;

  const ratingChange = (newRating) => {
    setRating(newRating);
    console.log(rating);
  };

  var config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  const handleUpcomming = () => {
    swal({
      icon: "warning",
      title: "Cannot Give Feedback",
      text: "Try another field",
      type: "warning",
      buttons: false,
      timer: 2000,
    });
  }

  const submitFeedback = (e) => {
    e.preventDefault();
    const data = {
      review: review,
      rating: rating,
    };

    axios
      .post(baseUrl, data, config)
      .then((res) => {
        console.log(res);
        setModalFeedback(false);
        swal({
          icon: "success",
          title: "Feedback has been added",
          text: "Thanks for your feedback",
          type: "success",
          buttons: false,
          timer: 3000,
        });
      })
      .catch((err) => {
        console.log('Ini error feedback: ',err);
        setModalFeedback(false);
        swal({
          icon: "warning",
          title: "You already add the feedback",
          text: "Try another fields",
          type: "warning",
          buttons: false,
          timer: 3000,
        });
      });
  };

  return (
    <>
      {props.done === false ? (<button className="btn player-baru" onClick={handleUpcomming}>Coming up match</button>) : (<button className="btn player" onClick={toggleFeedback}>Give Feedback</button>)}
      <Modal
        isOpen={modalFeedback}
        toggle={toggleFeedback}
        className="custom-modal-size"
      >
        <div className="modal-content">
          <div className="modal-body">
            <Row>
              <Col>
                <Button onClick={toggleFeedback} close aria-label="Cancel">
                  <span aria-hidden>
                    <i class="fas fa-times-circle"></i>
                  </span>
                </Button>
              </Col>
            </Row>
          <h3 className="modal-title" style={{ textAlign: "center" }}>
            Leave your Feedback
          </h3>
          <br/>
            <form onSubmit={submitFeedback}>
              <div className="form-group">
                <Label className="label">Select Rating</Label>
                <ReactStars
                  count={5}
                  onChange={ratingChange}
                  size={50}
                  activeColor="#FFCB74"
                />
                
              </div>
              {/* <div className="form-group">
                <Label className="label">Your Name</Label>
                <Input
                  type="input"
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  rows="1"
                />
              </div> */}
              <div className="form-group">
                <Label className="label">Your Feedback</Label>
                <Input
                  type="textarea"
                  onChange={(e) => setReview(e.target.value)}
                  className="form-control"
                  rows="4"
                />
              </div>
              <br />
              <div className="form-group">
                  <Button
                    type="submit"
                    className="btn btn-primary btn-block btn-lg"
                    value="Submit"
                  >
                    Submit
                  </Button>
                
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Feedback;
