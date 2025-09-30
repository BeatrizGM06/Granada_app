import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View>
      <View style={{marginTop:200,marginLeft:100}}>
        <Text>Boton 1</Text>
      </View>
      <View>
        <Text style={styles.contenedor}>Boton 2</Text>
      </View>
      <View>
        <Text>Boton 3</Text>
      </View>
      <View>
        <Text>Boton 4</Text>
      </View>
      <View>
        <Text>Boton 5</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor:{
    marginTop:200,
    marginLeft:100
  }
})