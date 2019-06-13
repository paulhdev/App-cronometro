import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numero: 0,
      botao: 'Vai'
    }
    // Variavel do timer do relogio
    this.timer = null

    this.vai = this.vai.bind(this)
    this.zerar = this.zerar.bind(this)
  }

  vai() {
    let state = this.state

    if(this.timer != null) {
      // Parar o timer
      clearInterval(this.timer)
      this.timer = null
      state.botao = 'Vai'
    } else {
      // Começa o timer
      this.timer = setInterval(() => {
        let state = this.state
        state.numero += 0.1
        this.setState(state)
      }, 100)
      state.botao = 'Parar'
    }
    this.setState(state)
  }

  zerar() {
    let state = this.state

    if(this.timer != null) {
      // Parar timer
      clearInterval(this.timer)
      this.timer = null
    }

    state.numero = 0
    state.botao = 'Vai'
    this.setState(state)
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./images/cronometro.png')} />
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.botao} onPress={this.vai}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.btnTexto} onPress={this.zerar}>Zerar</Text>
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