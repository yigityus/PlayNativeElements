import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Seat from "./Seat";
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class SeatRow extends Component {
  render() {
    let seatRows = [];
    let i = 0;
    this.props.columns.forEach( column => {
      seatRows.push(
          <Col key={i++}>
            <Seat key={i++} seatNumber={column}/>
          </Col>)
    })

    return (
        <Row>
          {seatRows}
        </Row>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    margin: 2,
  },
  welcome: {
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 0,
  },
  selected: {
    marginLeft: -10,
  },
});