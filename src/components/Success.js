import React, { Component } from 'react'
import { Alert } from 'reactstrap';

export class Success extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirectTime: 5
    }
  }
  componentDidMount(){
    window.setTimeout( () => {
      window.location.href = '/'
    }, 5000);
    
    setInterval(() => {
      this.setState({ redirectTime: this.state.redirectTime - 1 })
    }, 1000);
  }
  render() {
    const { redirectTime } = this.state;
    return (
      <Alert color="success" style={styles.main}>
        <h3>Success</h3>
        <p className="muted">User Data is been submitted successfully. <br /> Redirecting back to home page in {redirectTime} sec.</p>
      </Alert>
    )
  }
}

const styles = {
  main: {
      maxWidth: '650px',
      width: '70%',
      margin: '10px auto',
      padding: '2rem',
      textAlign: 'center'
    }
}

export default Success
