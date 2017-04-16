/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  ListView,
  Image,
  View
} from 'react-native';

const wataImage = 'https://connpass-tokyo.s3.amazonaws.com/user/27493/0154438e9e3f4a3fbd7102bb1f15075d.png'

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

class ListViewBasics extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        "8maki", "moqada", "ide", "achiku"
      ])
    };
  }
  render() {
    return (
      <View style={{flex:1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

class IScroll extends Component {
  render() {
    const pic = {
      uri: wataImage
    };
    return (
      <ScrollView>
        <Text style={{fontSize: 30}}>scroll please</Text>
        <Image source={pic} />
        <Image source={pic} />
        <Image source={pic} />
        <Image source={pic} />
        <Text style={{fontSize: 30}}>cotton_ori</Text>
      </ScrollView>
    )
  }
} 

class WMark extends Component {
  render() {
    const pic = {
      uri: wataImage
    };
    return (
      <Image
        source={pic}
        style={{height: 110, width: 193}}
      />
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
        <Greeting name="moqada" />
        <Greeting name="8maki" />
      </View>
    );
  }
}

class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: 'powderblue', flex: 1}} />
        <View style={{backgroundColor: 'skyblue', flex: 2}} />
        <View style={{backgroundColor: 'steelblue', flex: 3}} />
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
// AppRegistry.registerComponent('rntodo', () => PizzaTranslator);
// AppRegistry.registerComponent('rntodo', () => IScroll);
AppRegistry.registerComponent('rntodo', () => ListViewBasics);
