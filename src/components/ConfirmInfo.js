import React, { Component } from 'react';
import { Button, Jumbotron, ListGroup, ListGroupItem } from 'reactstrap';

export class ConfirmInfo extends Component {

    continue = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }

    back = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }

  render() {
    const { values } = this.props;
    const listItems = Object.entries(values).map((value, key) => {
        return (
            <ListGroupItem key={key}><strong style={styles.capitalize}>{value[0]}:</strong>{' '}{value[1]}</ListGroupItem>
        );
    });
    return (
      <Jumbotron style={styles.main}>
          <h6>Confirm User Details</h6>
            <ListGroup>
                {listItems}
            </ListGroup>

            <Button color="success" block style={styles.button} size="md" onClick={this.continue}>Confirm &amp; Submit</Button>
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
        width: '90%',
        margin: '20px auto',
        padding: '2rem',
        maxWidth: '450px'
    },
    capitalize: {
        textTransform: 'capitalize'
    }
}

export default ConfirmInfo
