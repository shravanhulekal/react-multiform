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
                <Label>Name</Label>
                <Input  type="text" 
                        placeholder="Enter your name"
                        defaultValue = {values.name} 
                        onChange = {handleChange('name')}
                        autoFocus = {true}
                    />
            </FormGroup>

            <FormGroup>
                <Label>Phone Number</Label>
                <Input type="tel" 
                    placeholder="Enter your phone number"
                    defaultValue = {values.phone} 
                    onChange = {handleChange('phone')}
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
      margin: '20px auto',
      padding: '2rem',
      maxWidth: '450px'
    }
  }

export default BasicInfo;
