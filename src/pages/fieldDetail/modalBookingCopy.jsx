import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Row,
  Col,
  Container,
  Spinner,
  Label,
} from "reactstrap";
import axios from "axios";
// import moment from "moment";
import moment from "moment-timezone"
import swal from "sweetalert";
import "@fortawesome/fontawesome-free";
// import "./Auth.css";
// import { useHistory } from "react-router-dom";

const ModalBookingField = (props) => {
  //Modal
  const [modalBookingField, setModalBookingField] = useState(false);
  const [modalAfterBooking, setModalAfterBooking] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingTime, setBookingTime] = useState(null);

  //Data Rental

  // const history = useHistory();

  //Toggle
  const { className } = props;
  const toggleBookingField = () => setModalBookingField(!modalBookingField);

  const toggleNested = () => {
    setModalAfterBooking(!modalAfterBooking);
    setCloseAll(false);
  };
//   const toggleAll = () => {
//     setModalAfterBooking(!modalAfterBooking);
//     setCloseAll(true);
//   };

  const [duration, setDuration] = useState(1);
  const [date, setDate] = useState("2020-12-25");
  const [time, setTime] = useState("20:37");

  //Convert
  const convertDuration = duration / 1;
  const dateTime = new Date(date + "T" + time + "Z");
  const newTime1 = new Date(dateTime.getTime() - 25200000);
  const newTime2 = new Date(dateTime.getTime() - 25200000 + convertDuration * 3600000);

  //API Need
  const startTime = newTime1.toISOString();
  const endTime = newTime2.toISOString();
  // console.log("datetime =>",dateTime)
  // console.log("newtime =>",newTime1)
  // console.log("starttime =>",startTime)
  // console.log("endtime =>",endTime)
  // console.log(date)
  // console.log(time)

  //url
  // const baseUrl = "http://kickin.southeastasia.cloudapp.azure.com";
  const baseUrl = "https://soka.kuyrek.com:3003/booking/";

  //save data needed
  const token = localStorage.getItem("token");
//   const bookingId = localStorage.getItem("bookingId");
//   const transactionId = localStorage.getItem("transactionId");

  //authorization
  var config = {
    headers: {
        Authorization: `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  };

  //Life Cycle
  useEffect(() => {
    getBokingList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Get Booking List
  const getBokingList = () => {
    axios
      .get(`${baseUrl}/${props.id}/create/bookedfield`, config)
      .then((res) => {
        setBookingTime(res.data.data);
      })
      .catch((err) => {
        // console.log(err)
        swal({
          icon: "warning",
          title: "Failed to get data",
          text: "Please wait",
          type: "warning",
          buttons: false,
          timer: 3000,
        });
      });
  };

  //Booking Field
  const handleBook = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const data = {
      startTime: startTime,
      endTime: endTime,
    };

    axios
      .post(`${baseUrl}/${props.id}/bookedfield`, data, config)
      .then((res) => {
        const { id, startTime } = res.data.data.booking;
        localStorage.setItem("bookingId", id);
        // localStorage.setItem("status", status);
        localStorage.setItem("startTime", startTime);
        setIsSubmitting(false);
        swal({
          icon: "success",
          title: "Your Booking is Succes",
          text: "Please submit transaction before confirmation payment",
          type: "success",
          buttons: false,
          timer: 3000,
        });
        setModalAfterBooking(true);
      })
      .catch((err) => {
        // console.log(err);
        swal({
          icon: "warning",
          title: "Selected time is Conflict",
          text: "Please try again with another time",
          type: "warning",
          buttons: false,
          timer: 3000,
        });
        setIsSubmitting(false);
      });
  };

  //Cancel Booking
//   const handleCancel = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     const data = {
//       status: "cancelled",
//     };
//     // console.log(data);
//     toggleAll();
//     axios
//       .patch(`${baseUrl}/booking/${bookingId}`, data, config)
//       .then((res) => {
//         // console.log(res);
//         toggleAll();
//         swal({
//           icon: "success",
//           title: `Your Booking has been canceled`,
//           text: "make sure you doing the right thing",
//           type: "success",
//           buttons: false,
//           timer: 3000,
//         });
//         setIsSubmitting(false);
//       })
//       .catch((err) => {
//         // console.log(err);
//         swal({
//           icon: "warning",
//           title: "Failed to cancel booking",
//           text: "Please try again",
//           type: "warning",
//           buttons: false,
//           timer: 3000,
//         });
//         setIsSubmitting(false);
//       });
//   };

  //Rental Vest
  //Submit Transaction
//   const handleTransaction = () => {
//     setIsSubmitting(true);
//     const data = {};
//     axios
//       .post(`${baseUrl}/transaction/post/${bookingId}`, data, config)
//       .then((res) => {
//         localStorage.setItem("transactionId", res.data.data.transactionData.id);
//         if (transactionId !== undefined) {
//           handlePayment();
//         }
//         setIsSubmitting(false);
//         toggleAll();
//         swal({
//           icon: "success",
//           title: `Your transaction has been added`,
//           text: "Please confirmation your payment before 24 hours",
//           // type: "success",
//           buttons: false,
//           timer: 3000,
//         });
//       })
//       .catch((err) => {
//         // console.log(err);
//         swal({
//           icon: "warning",
//           title: "Failed to added transaction",
//           text: "Please try again",
//           type: "warning",
//           buttons: true,
//           timer: 5000,
//         });
//         setIsSubmitting(false);
//       });
//     // console.log("tersubmit");
//   };

  //Payment Confirmation
//   const handlePayment = () => {
//     const data = {};
//     // console.log("tersubmit");
//     axios
//       .post(`${baseUrl}/payment/${transactionId}`, data, config)
//       .then((res) => {
//         // console.log(res);
//       })
//       .catch((err) => console.log(err));
//   };

  return (
    //Modal Utama
    <div>
      <Button onClick={toggleBookingField} className="btn-primary mb-3">
        <i class="fas fa-bookmark mr-2"></i>
        Book
      </Button>
      <Modal
        isOpen={modalBookingField}
        toggle={toggleBookingField}
        id="modal-book"
      >
        {props.isLogin !== true ? (
          <div>
            <ModalBody
              style={{
                width: "400px",
                height: "300px",
                margin: "50px",
                padding: "0px",
              }}
            >
              <Row>
                <Col>
                  <Button
                    onClick={toggleBookingField}
                    close
                    aria-label="Cancel"
                  >
                    <span aria-hidden>
                      <i class="fas fa-times-circle"></i>
                    </span>
                  </Button>
                </Col>
              </Row>
              <Col>
                <h3 style={{ textAlign: "center" }}>
                  Hello guest, <br />
                  please log in first <br />
                  as user!!
                </h3>
                <h4 style={{ textAlign: "center" }}>
                  if you want booking a field
                </h4>
              </Col>
            </ModalBody>
          </div>
        ) : (
            //  history.push(/)
            <div>
              <ModalBody>
                <Row>
                  <Col>
                    <Button
                      onClick={toggleBookingField}
                      close
                      aria-label="Cancel"
                    >
                      <span aria-hidden>
                        <i class="fas fa-times-circle"></i>
                      </span>
                    </Button>
                  </Col>
                </Row>
                {/* Modal Pertama */}

                <Form onSubmit={handleBook}>
                  <FormGroup>
                    <h3 className="title">{props.name}</h3>

                    <Row>
                      {bookingTime ? (
                        bookingTime !== undefined ? (
                          <>
                            <Container>
                              <h5 style={{ color: "#53c9c2" }}>
                                You can't booking this field at this time
                            </h5>
                            </Container>
                            {bookingTime.getBookingListToday.map((time) => (
                              <Col sm={6}>
                                <Button
                                  disabled
                                  className="mt-2"
                                  style={{
                                    height: "30px",
                                    padding: "5px 5px",
                                    backgroundColor: "#313131",
                                  }}
                                >
                                  {" "}
                                  <p style={{ color: "#53c9c2" }}>
                                    {moment(time.startTime).format(
                                      "D MMM YYYY, k:mm"
                                    )}{" "}
                                  - {moment(time.endTime).format("k:mm")}
                                  </p>
                                </Button>
                              </Col>
                            ))}
                          )
                        </>
                        ) : (
                            <Spinner color="light" />
                          )
                      ) : (
                          <></>
                        )}
                    </Row>

                    <Row className="mt-3">
                      <Container className="m-auto">
                        <h4>Select Booking Time</h4>
                      </Container>
                    </Row>
                    <Col
                      style={{
                        border: " 2px solid #545454",
                        padding: "0.5rem",
                        borderRadius: "5px",
                      }}
                    >
                      <Row>
                        <Col sm="6">
                          <Label for="Date">Date</Label>
                          <Input
                            type="date"
                            name="date"
                            id="Date"
                            onChange={(e) => setDate(e.target.value)}
                          />
                        </Col>
                        <Col sm="6">
                          <Label for="Time">Time</Label>
                          <Input
                            type="time"
                            name="time"
                            id="Time"
                            onChange={(e) => setTime(e.target.value)}
                          />
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <Label for="duration">Duration</Label>
                          <Input
                            type="select"
                            id="duaration"
                            onChange={(e) => setDuration(e.target.value)}
                          >
                            <option value="1">1 Hour</option>
                            <option value="2">2 Hour</option>
                            <option value="3">3 Hour</option>
                            <option value="4">4 Hour</option>
                            <option value="5">5 Hour</option>
                            <option value="6">6 Hour</option>
                          </Input>
                        </Col>
                      </Row>
                    </Col>
                  </FormGroup>

                  <FormGroup>
                    <Col>
                      <Row>
                        <p>
                          <strong>Note :</strong> Please read the instruction
                        before booking field !!
                      </p>
                      </Row>
                    </Col>
                  </FormGroup>

                  <Form>
                    <h4>Review Your Book</h4>
                    <FormGroup>
                      <h5 style={{ textAlign: "center", fontWeight: "700" }}>
                        Playing Time :
                      {moment(startTime).format("D MMM YYYY, k:mm")}

                      </h5>
                    </FormGroup>

                    <FormGroup>
                      {isSubmitting ? (
                        <Button
                          className="col-12 btn-primary"
                          type="submit"
                          disabled
                        >
                          <Spinner color="light" />
                        </Button>
                      ) : (
                          <Button onClick={handleBook} className="col-12 btn-book">
                            Booking Field
                          </Button>
                        )}
                    </FormGroup>
                  </Form>
                </Form>

                {/* =================================================================================================================== */}

                {/*Modal Kedua*/}
                <Form>
                  <div>
                    {/* <Button onClick={toggleNested} className="col-12 btn-second">
                    <strong>Rental kit or Submit Transaction</strong>
                  </Button> */}

                    <Modal
                      isOpen={modalAfterBooking}
                      toggle={toggleNested}
                      onClosed={closeAll ? toggleBookingField : undefined}
                      className={className}
                      id="modal-after-booking"
                    >
                      <ModalBody>
                        <Row>
                          <Col>
                            <Button
                              onClick={toggleNested}
                              close
                              aria-label="Cancel"
                            >
                              <span aria-hidden>
                                <i class="fas fa-times-circle"></i>
                              </span>
                            </Button>
                          </Col>
                        </Row>
                        <Container>
                          {isSubmitting ? (
                            <Button
                              className="col-12 btn-primary"
                              type="submit"
                              disabled
                            >
                              <Spinner color="light" />
                            </Button>
                          ) : (
                              <Button
                                // onClick={() => handleTransaction()}
                                // className="col-12 btn-primary"
                              >
                                Submit Transaction
                              </Button>
                            )}

                          {isSubmitting ? (
                            <Button
                              className="col-12 mt-3 btn-primary"
                              type="submit"
                              disabled
                            >
                              <Spinner color="light" />
                            </Button>
                          ) : (
                            //   <Button
                            //     type="submit"
                            //     color="danger"
                            //     onClick={handleCancel}
                            //     className="col-12 mt-3"
                            //     style={{ height: "50px" }}
                            //   >
                            //     <strong>Cancel Booking</strong>
                            //   </Button>
                            <p></p>
                            )}
                        </Container>
                      </ModalBody>
                    </Modal>
                  </div>
                </Form>
              </ModalBody>
            </div>
          )}
      </Modal>
    </div>
  );
};

export default ModalBookingField;
