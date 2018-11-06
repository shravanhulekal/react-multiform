import React, { Component } from 'react';
import BasicInfo from './BasicInfo';
import WorkInfo from './WorkInfo';
import ConfirmInfo from './ConfirmInfo';
import Success from './Success';

export class MainForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            step : 1,
            firstName: '',
            lastName: '',
            email: '',
            city: '',
            occupation: '',
            bio: ''
        }
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step : step + 1 });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    handleChange = input => e => {
        this.setState({ [input] : e.target.value });
    }

  render() {
      const { step } = this.state;
      const { firstName, lastName, email, city, occupation, bio } = this.state;
      const values = { firstName, lastName, email, city, occupation, bio };
    
      switch (step){
        case 1:
            return (
                <BasicInfo 
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = { values }
                />
            );
        case 2:
            return (
                <WorkInfo 
                    prevStep = {this.prevStep}
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = { values }
                />
            );
        case 3: 
            return (
                <ConfirmInfo 
                    prevStep = {this.prevStep}
                    nextStep = {this.nextStep}
                    values = { values }
                />
            );
        case 4:
            return <Success />
        default:
            break;
      }
  }
}

export default MainForm;
