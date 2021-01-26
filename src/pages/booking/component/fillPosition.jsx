import React from 'react'
import { Form, FormGroup } from 'reactstrap'

const FillPosition = () => {
    return (
        <div>
            <h4>Please fill the position</h4>
            <Form>
                <FormGroup>
                    <Label for="goal">Goal Keeper</Label>
                        <Input
                            type="text"
                            name="goal-keeper"
                            id="goal-keeper"
                            placeholder="Write your name here"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="middle">Middle</Label>
                        <Input
                            type="text"
                            name="middle"
                            id="middle"
                            placeholder="Write your name here"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="forward">Forward</Label>
                        <Input
                            type="text"
                            name="forward"
                            id="forward"
                            placeholder="Write your name here"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="forward">Forward</Label>
                        <Input
                            type="text"
                            name="forward"
                            id="forward"
                            placeholder="Write your name here"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="forward">Forward</Label>
                        <Input
                            type="text"
                            name="forward"
                            id="forward"
                            placeholder="Write your name here"
                        />
                </FormGroup>
            </Form>
        </div>
    )
}

export default FillPosition