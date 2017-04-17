import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class Seat extends Component {

  constructor(props) {
    super(props);

    console.log(props.seatNumber.substr(0,2)%2);

    let bg = 'blue';

    if (props.seatNumber.substr(0,2)%2===0) {
      bg = 'green'
    }

    this.state = {
      backgroundColor: bg,
    }
  }

  render() {

    return (
        <View style={[styles.container, {backgroundColor: this.state.backgroundColor} ]} key={this.props.seatNumber}>
          <Text key={this.props.seatNumber} style={styles.welcome}></Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  welcome: {
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 3,
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