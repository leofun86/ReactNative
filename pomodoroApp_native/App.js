import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { render } from 'react-dom';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 48,
    fontFamily: 'arial',
  },
})

class Count extends React.Component {
  shouldComponentUpdate(nextProps) { return (nextProps.count < 5) }
  componentDidUpdate () { console.log(this.props.count) }
  render() { return ( <Text style={styles.textStyle}>{this.props.count}</Text> ) }   
}

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      count:0,
    }
  }

  //Ejecución de métodos, etc en un intervalo establecido
  componentDidMount() {
    setInterval(()=> {
        this.inc()
    }, 1000)
  }

  //Incrementador
  inc() {
    this.setState(prevState => ({
      count: this.state.count +1,
    }));
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Count count={this.state.count} />
      </View>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Counter />
    )
  }
}