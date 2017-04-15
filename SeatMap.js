import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';
import SeatRow from "./SeatRow";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;


export default class SeatMap extends Component {



render() {
    let seatMap = [];
    let i = 0;
    this.props.seatMap.forEach( row => {
      seatMap.push(
          <SeatRow key={i++} columns={row}/>
    )});

    console.log(screenWidth, screenHeight)
    console.log(width, height)

    return (
        <Col>
          {seatMap}
        </Col>
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