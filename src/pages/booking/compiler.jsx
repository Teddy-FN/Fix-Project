import React, { Component } from 'react'
import SetDate from './component/setDate'
import SetTime from './component/setTime'

export class Booking extends Component {
    state = {
      step: 1,
      selectedDate: '',
      selectedTime: '',
      //ini nanti tambahin ya and diganti sesuai kebutuhan
    //   email: '',
    //   occupation: '',
    //   city: '',
    //   bio: ''
    };
  
    // Proceed to next step
    nextStep = () => {
      const { step } = this.state;
      this.setState({
        step: step + 1
      });
    };
  
    // Go back to prev step
    prevStep = () => {
      const { step } = this.state;
      this.setState({
        step: step - 1
      });
    };
  
    // Handle fields change
    handleChange = input => e => {
      this.setState({ [input]: e.target.value });
    };
  
    render() {
      const { step } = this.state;
      const { selectedDate, selectedTime } = this.state;
      const values = { selectedDate, selectedTime };
  
      switch (step) {
        case 1:
          return (
            <SetDate
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 2:
          return (
            <SetTime
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        //nanti dilanjutin disini jangan lupa angka case di success nya digantiwww
        case 4:
          return <Success />;
        default:
          (console.log('This is a multi-step form built with React.'))
      }
    }
  }
  
  export default Booking;
  