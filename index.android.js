/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';
import { Container, Content, H1 } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Dimensions, Platform } from 'react-native';
import Seat from "./Seat";
import SeatRow from "./SeatRow";
import SeatMap from "./SeatMap";


console.log('statusBarHeight: ', StatusBar.currentHeight);

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

export default class PlayNativeElements extends Component {



  componentDidMount() {

  }

  _seatMap() {
    const seatMap = [];
    var seats = require('./seats.json');

    console.log(seats.seatMapRow.length);

    var rows = seats.seatMapRow;

    console.log(rows.length);

    var row = '';
    rows.forEach(function (column) {
      seatCols = [];
      column.cabinElement.forEach(function (cabin) {
        if (cabin.seat) {
          row += cabin.seat.seatNumber + '-';
          seatCols.push(cabin.seat.seatNumber);
        }
      })
      seatMap.push(seatCols);
      console.log(row);
      row = '';
    })

    console.log(seatMap);

    return seatMap;
  }


  render() {

    const seatMap = this._seatMap();

    return (
          <Container>
            <Content>
              <View style={{ backgroundColor: 'pink', flex: 1, height: screenWidth - StatusBar.currentHeight , width:  screenHeight }} >
              <Grid>
                <Col size={1}></Col>
                <Col size={3}></Col>
                <Col size={1}><SeatMap seatMap={seatMap}/></Col>
              </Grid>
            </View>
            </Content>
          </Container>

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

AppRegistry.registerComponent('PlayNativeElements', () => PlayNativeElements);
