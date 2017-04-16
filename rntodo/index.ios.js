/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View
} from 'react-native';

export default class rntodo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello wataori-mart!!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text style={styles.instructions}>
          <WMark />
        </Text>
      </View>
    );
  }
}

class WMark extends Component {
  render() {
    let pic = {
      uri: 'https://connpass-tokyo.s3.amazonaws.com/user/27493/0154438e9e3f4a3fbd7102bb1f15075d.png',
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text> Hello {this.props.name} !</Text>
    );
  }
}

class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='moqada' />
        <Greeting name='8maki' />
      </View>
    );
  }
}

class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="text something"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// AppRegistry.registerComponent('rntodo', () => rntodo);
// AppRegistry.registerComponent('rntodo', () => WMark);
// AppRegistry.registerComponent('rntodo', () => LotsOfGreetings);
// AppRegistry.registerComponent('rntodo', () => FlexDimensionsBasics);
AppRegistry.registerComponent('rntodo', () => PizzaTranslator);
