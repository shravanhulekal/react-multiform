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
            <ListGroupItem style={styles.capitalize} key={key}>{value[0]}:{' '}{value[1]}</ListGroupItem>
        );
    }); 
    return (
      <Jumbotron style={styles.main}>
          <h5>Confirm User Details</h5>
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
        width: '50%',
        margin: '10px auto',
        padding: '2rem'
    },
    capitalize: {
        textTransform: 'capitalize'
    }
}

export default ConfirmInfo
