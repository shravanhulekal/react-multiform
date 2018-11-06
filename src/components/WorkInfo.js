import React, { Component } from 'react';
import { Button, Jumbotron, FormGroup, Label, Input } from 'reactstrap';

export class WorkInfo extends Component {
    
    continue = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }

    back = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }

  render() {
    const { values, handleChange } = this.props;
    return (
        <Jumbotron style={styles.main}>
            <FormGroup>
                <Label>Occupation</Label>
                <Input  type="text" 
                        placeholder="Enter your occupation"
                        defaultValue = {values.occupation} 
                        onChange = {handleChange('occupation')}
                    />
            </FormGroup>

            <FormGroup>
                <Label>City</Label>
                <Input type="text" 
                    placeholder="Enter your city"
                    defaultValue = {values.city} 
                    onChange = {handleChange('city')}
                />
            </FormGroup>

            <FormGroup>
                <Label>Your Bio</Label>
                <Input type="textarea" 
                    placeholder="Enter your bio" 
                    defaultValue = {values.bio} 
                    onChange = {handleChange('bio')}
                />
            </FormGroup>

        <Button color="success" block style={styles.button} size="md" onClick={this.continue}>Continue</Button>
        <Button color="info" block style={styles.button} size="md" onClick={this.back}>Back</Button>
    </Jumbotron>
    )
  }
}

const styles = {
    button:{
        marginRight: '5px',
        marginTop: '5px'
    },
    main: {
        width: '50%',
        margin: '10px auto',
        padding: '2rem'
    }
}

export default WorkInfo
