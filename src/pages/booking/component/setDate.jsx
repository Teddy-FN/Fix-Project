import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers'


function SetDate() {

    const [selectedDate, setSelectedDate] = useState(null)
    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    // continue = e => {
    //     e.preventDefault();
    //     this.props.nextStep();
    // };

    return (
        <div>
            <MuiThemeProvider>
                <>
                    <Dialog
                        open
                        fullWidth
                        maxWidth='sm'>
                        <h4>Pick Your Booking Date</h4>
                        <div className="Calendar">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify='space-arround'>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant='inline'
                                        format='dd/MM/yyyy'
                                        margin='normal'
                                        id='date-picker'
                                        label='Date Picker'
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        keyboardButtonProps={{
                                            'aria-label': ' change-date'
                                        }}
                                    />
                                </Grid>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={this.continue}
                                >Continue</Button>
                            </MuiPickersUtilsProvider>
                        </div>
                    </Dialog>
                </>
            </MuiThemeProvider>
        </div>
    )
}

export default SetDate