import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

export class SetTime extends Component {
    continue = e => {
      e.preventDefault();
      this.props.nextStep();
    };
  
    back = e => {
      e.preventDefault();
      this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
          <MuiThemeProvider>
            <>
              <Dialog
                open
                fullWidth
                maxWidth='sm'
              >
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={this.back}
                >Back</Button>
    
                <Button
                  color="primary"
                  variant="contained"
                  onClick={this.continue}
                >Continue</Button>
              </Dialog>
            </>
          </MuiThemeProvider>
        );
      }
    }

export default SetTime