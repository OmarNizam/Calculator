/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';


export default class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {

    return (

        <View style={styles.container}>
          <View style={styles.half1}>
            <Text style={styles.text}> This is 1 </Text>
          </View>
          <View style={styles.half2}>
            <View style={styles.half21}>
              <Text style={styles.text}> This is 2/1 </Text>
            </View>
            <View style={styles.half22}>
              <Text style={styles.text}> This is 2/2 </Text>
            </View>
          </View>
        </View>

    )
  }
}


  const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    half1: {
      flex:1,
      backgroundColor:'red',
      justifyContent: 'center',
      alignItems: 'center'
    },
    half2: {
      flex:1,
      flexDirection: 'row',
      backgroundColor: 'blue',
    },
    half21: {
      flex:1,
      backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'center'
    },
    half22: {
      flex:1,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      color: 'white',
      fontSize: 30,

    }
  })
