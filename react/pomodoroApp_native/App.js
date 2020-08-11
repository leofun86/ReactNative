import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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
  // Método que actualiza contador si cumple con evaluación
  shouldComponentUpdate(nextProps) { return ( nextProps.count < 11 ) }
  // Método que muestra el resultado de la evaluación anterior
  componentDidUpdate() { console.log(this.props.count) }
  // Renderizado de texto de contador
  render() { return ( <Text style={styles.textStyle}>{this.props.count}</Text> ) }
}

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      count:0,
    }
  }

  // Intervalo de incremento
  componentDidMount() {
    this.interval = setInterval(this.inc, 1000)
  }

  // Destrucción de intervalo
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  // Incrementador
  inc = () => {
    console.log('Incrementando!');
    this.setState(prevState=>({
      count: this.state.count +1,
    }))
  }

  // Renderizado de contador
  render() {
    return (
      <View style={styles.appContainer} >
        <Count count={this.state.count} />
      </View>
    )
  }

}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      showCounter: true,
    }
  }

  toggleCounter = ()=>{
    this.setState(prevState=>({
      showCounter: !prevState.showCounter,
    }))
  }

  render() {
    if (this.state.showCounter) {
      return (
        <View style={styles.appContainer}>
          <Button title="Toggle" onPress={this.toggleCounter} />
          <Counter />
        </View>
      )
    } else {
      return <Button title="Toggle" onPress={this.toggleCounter} />
    }
  }
}