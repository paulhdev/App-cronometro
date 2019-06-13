import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./images/cronometro.png')} />
        <Text style={styles.timer}>0.0</Text>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.btnTexto}>Vai</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.btnTexto}>Zerar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aeef'
  },
  timer: {
    marginTop: -170,
    color: '#fff',
    fontSize: 72,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 20,
    borderRadius: 10
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  }
})