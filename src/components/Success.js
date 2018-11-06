import React, { Component } from 'react'
import { Alert } from 'reactstrap';

export class Success extends Component {
  render() {
    return (
      <Alert color="success" style={styles.main}>
        <h3>Success</h3>
        <p className="muted">User Data is been submitted successfully.</p>
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
