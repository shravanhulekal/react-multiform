import React, { Component } from 'react';
import { Button, Jumbotron, FormGroup, Label, Input } from 'reactstrap';

export class BasicInfo extends Component {

    continue = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }

  render() {
      const { values, handleChange } = this.props;
    return (
        <Jumbotron style={styles.main}>
            <FormGroup>
                <Label>First Name</Label>
                <Input  type="text" 
                        placeholder="Enter your first name"
                        defaultValue = {values.firstName} 
                        onChange = {handleChange('firstName')}
                    />
            </FormGroup>

            <FormGroup>
                <Label>Last Name</Label>
                <Input type="text" 
                    placeholder="Enter your last name"
                    defaultValue = {values.lastName} 
                    onChange = {handleChange('lastName')}
                />
            </FormGroup>

            <FormGroup>
                <Label>Email</Label>
                <Input type="email" 
                    placeholder="Enter your email" 
                    defaultValue = {values.email} 
                    onChange = {handleChange('email')}
                />
            </FormGroup>

            <Button color="success" block size="md" onClick={this.continue}>Continue</Button>
        </Jumbotron>
    )
  }
}

const styles = {
    main: {
      width: '50%',
      margin: '10px auto',
      padding: '2rem'
    }
  }

export default BasicInfo;
